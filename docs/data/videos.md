---
sidebar_position: 3
---

# Videos

Videos are sourced from a variety of devices, locations and participants across a wide range of
scenarios.  The original source videos (**video components**) that were captured by university participants were composed into standardized, full length videos (**canonical videos**, the primary videos in the dataset).  Shorter clips of the longer videos were then annotated to generate the dataset annotations, and finally shorter **canonical clips** were formed from the videos and exported with the dataset.

Accordingly, video data is available in three forms for the dataset. Each form can be identified with a unique identifier string (uuid4):
1. **Canonical videos** - Derived from the video components
2. **Canonical Clips** - Clips associated to specific [annotation](annotations.md) data and derived from the canonical videos.
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
order to simplify the usage of the dataset.

Canonical videos are normalized videos constructed from the [video
components](#video-components). Each canonical video has each video
component concatenated together.

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

TODO

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
