---
sidebar_position: 3
---

# Videos

Videos are sourced from a variety of devices, locations and participants across a wide range of
scenarios.  The original source videos (**video components**) that were captured by university participants were composed into standardized, full length videos (**canonical videos**, the primary videos in the dataset).  Shorter clips of the longer videos were then annotated to generate the dataset annotations, and finally shorter **canonical clips** were formed from the videos and exported with the dataset.

Accordingly, video data is available in three forms for the dataset. Each form can be identified with a unique identifier string (uuid4):
1. **Canonical videos** - Derived from the video components
2. **Canonical Clips** - Clips associated to specific [annotation](annotations-schemas.md) data and derived from the canonical videos.
3. Video Components - The raw components used to construct the videos and primary provided as an ancillarly export for thoroughness.

The canonical videos or the canonical clips are the **recomended** way to use the dataset.

## Background

Each video, in the dataset, is in a video container (such as mp4, webm, etc.)
and may have multiple streams. In other words, for a video we have the
following:
1. The container
2. Video stream
3. Audio stream

### Non-Obvious Properties

It is possible for the following properties to be true:
- The container ends **before** or **after** one or both of the stream
  ends. In the case that the:
  - Video stream ends before: blank frames are played
  - Video stream ends after: video players will continue to play the stream
- The audio stream starts after the video stream starts
- The video stream starts after the audio stream starts

To be clear, in instances where raw components is contained within the
video container (by multiple frames), it has no frame data in these
regions.

These properties can be fixed by either:
1. Remuxing the video file to another MP4 container, i.e. `ffmpeg -i in.mp4 -c copy out.mp4`
2. Compressing the video file

## Canonical Videos

The purpose of the canonical videos is to normalize the videos in
order to simplify the usage of the dataset, and are the primary way we expect
users to consume the dataset.

Canonical videos are normalized videos constructed from the [video
components](#video-components), concatenated together with the following 
characteristics:

1. 30FPS
2. Sample Aspect Ratio (SAR) set to 1:1
3. Audio set to AAC

Each canonical video is:

1. Compressed with a two-pass VP9 (CRF of 41)
2. Components have their video streams trimmed. This means that:
   1. Canonical videos are a continious stream of video frames,
      i.e. if a video component starts at `t > 0` the initial part of
      the video component is removed.
   2. If the audio exceeds the video stream, the audio is trimmed

FFMPEG is used for all processing.

### How They Are Constructed

Each video component is first compressed with a video filter to
normalize all properties outside of audio. During compression, videos
are seeked to `vs` where `vs` is the start time of the video stream,
such that components can be trimmed to the video stream.

After each component for a video has been compressed, they run through
the following steps:

1. A remux of the container is performed to encode the audio to AAC or
   normalize inconsistent audio rates
2. FFMPEG concat demuxer is used to combine the components together
   into one video file (with [`-segment_time_metadata 1`](https://ffmpeg.org/ffmpeg-formats.html#Options))

## Canonical Clips

Canonical clips are trimmed videos, produced for each benchmark. They are produced by trimming/processing the canonical videos. The purpose and aim of the canonical clips is to make training on each benchmark more accessible than the full canonical video. As with the full scale videos, there are two variants of the canonical clips: clips and clips_540ss. 540ss indicates these clips are downscaled to have their shortest side 540 pixels wide or high.

To be clear, since the canonical clips are based off the canonical videos. They are at a constant frame rate of 30FPS. 

If you have feedback on how these clips are generated, please post to the forum.

Each clip is constructed with PyAV with the following compression parameters:
- Codec: VP9
- Crf: 18
- Pixel Format: match original
- Constant FPS: 30
- Range: `[start_frame, end_frame)`
    - Note: the end frame is not included in the clip


### Using the Annotations with Canonical Clips

Each annotation file has their fields prefixed with "`clip_`" if it is referring to a canonical clip time/frame or "`video_`" if it is referring to the canonical video time/frame.

### Obtaining the Clips

You can download the canonical clips with the CLI via:

```bash
ego4d --output_directory="~/ego4d_data" --datasets clips 
```
This will download all clips for each benchmark. Provide the `--benchmarks` filter if you want to filter via a specific benchmark (av, fho, em, nlq, vq, mq). Provide clips_540ss instead if you want the downscaled clips to 540 pixels on the shorter side.

### Canonical Clip Definitions

#### Forecasting Hands and Objects (FHO)

FHO's train/val/test split is partitioned by 5 minute clips, each containing a sequence of narrations and consequently hand/object interactions. The canonical clips correspond to these 5 minute intervals with an 8 second padding before and after the clip (or no padding on either end if the clip is at the beginning or end). This padding was performed to allow for context to be potentially used at training or inference time for the first or last set of annotations within the 5 minute interval. 

#### Episodic-Memory (NLQ, VQ, MQ)

Each canonical clip is associated with each "clip" referenced by each JSON file. These clips were annotated by a single annotator. These are the time ranges used for trimming. Here are some basic statistics on the length of each clip:

- NLQ: average length is 10 minutes, clips are at most 20 minutes long
- VQ: average length is 6 minutes, clips are at most 16 minutes long
- MQ: average length is 7.8 minutes, clips are at most 8 minutes long

#### AV

Canonical clips are associated with the "clips" field in the annotation JSON file. These are roughly 5 minute intervals.

## Video Components

Majoriy of the video components in the dataset have been compressed
and have had their metadata stripped prior to them being used. Hence
in many cases where there was originally IMU or GPU metadata there no
longer is.

The raw video component data is available through **[EGO4D
CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)**
with the `--raw_components` option.

### Attributes of the Data

#### Inconsistent Properties

1. Video timebases (base numerator/denominator)
2. Audio timebases (base numerator/denominator)
3. FPS
4. Audio rate (32KHz vs 48KHz)
5. Audio channel layout (mono vs. audio)

Additionally many video components have [non-obvious
properties](#non-obvious-properties).

TODO: stats
