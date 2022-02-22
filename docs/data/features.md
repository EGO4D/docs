---
sidebar_position: 7
---

# Features

Pre-extracted feature vectors are available for every video in the
dataset. They can be accessed with the **[EGO4D
CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)**
with the `--dataset slowfast8x8_r101_k400` option.


## Description

Here is a table of the features pre-extracted from Ego4D. These
features are extracted from the canonical videos. Canonical videos are
all 30FPS.

Window Size and Stride are in frames.

| Feature Type | Dataset(s) Trained On | Model Arch                   | Window Size | Stride | Model Weights Location                                    |
|--------------|-----------------------|------------------------------|-------------|--------|-----------------------------------------------------------|
| Action       | Kinetics 400          | SlowFast 8x8 (R101 backbone) | 32          | 16     | torchub path: facebookresearch/pytorchvideo/slowfast_r101 |
| Image        | N/A                   | N/A; planned                 |             |        |                                                           |
| Audio        | N/A                   | N/A; planned                 |             |        |                                                           |


Features are extracted in a moving window fashion. At every extraction
point the model sees the next Window Size (`W`) frames (i.e. at frame
`i` the model sees features `[i, i + W)` frames). The window starts at
frame 0, and then is offset by the stride until the end of the video
is reached.

There is a boundary condition where the last window may extend past
the video. In this case, the extraction point is backed up such that a
window with `W` frames from the video is used. This occurs when the
number of frames in the canonical video is not divisble by the stride.


## Example Window Stride

Let's say a video has 39 frames. The frames for extraction will be (in frame numbers):

- [0, 31]
- [7, 38] which is “back-padded” from [16, 47] to fit the last window

## Implementation

- Read the [README on the Ego4D github](https://github.com/facebookresearch/Ego4d/tree/main/ego4d/features) to run or use the code yourself
- [UniformClipSampler](https://pytorchvideo.readthedocs.io/en/latest/api/data/data.html?highlight=ClipSampler#pytorchvideo.data.UniformClipSampler) from PytorchVideo is used
