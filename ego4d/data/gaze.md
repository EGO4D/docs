---
sidebar_position: 5
---

# Gaze

Gaze is available in two forms:

1. Similar to [IMU](./imu.md), gaze is available in a flat CSV file
for a subset of [videos](./videos.md). These files are processed from
the original CSV files (please see "Notes" below as for why)
2. Burned in gaze videos. These videos have an overlay of the camera wearer's gaze as a 2D point graphic.


Unprocessed gaze data is available (directly from the consortium). Please refer to [unprocessed data](./unprocessed_data.md) for details on downloading burned-in gaze videos.

We refer to a recent paper for data split (insert this link: https://github.com/BolinLai/GLC/blob/main/slowfast/datasets/DATASET.md) and preprocessing scripts on egocentric gaze estimation task.

## Download

You can download the gaze data with the CLI using `--datasets gaze`.

## Sample

```
component_idx,component_timestamp_s,canonical_timestamp_s,world_index,confidence,norm_pos_x,norm_pos_y,base_data,gaze_point_3d_x,gaze_point_3d_y,gaze_point_3d_z,eye_center0_3d_x,eye_center0_3d_y,eye_center0_3d_z,gaze_normal0_x,gaze_normal0_y,gaze_normal0_z,eye_center1_3d_x,eye_center1_3d_y,eye_center1_3d_z,gaze_normal1_x,gaze_normal1_y,gaze_normal1_z
0,0.0,0.0,10583.0,1.0,0.4422956915462719,0.440328527379919,,,,,,,,,,,,,,,,
0,0.004056999999988875,0.004056999999988875,10583.0,1.0,0.4444741922266343,0.4417514942310474,,,,,,,,,,,,,,,,
0,0.008062999999992826,0.008062999999992826,10583.0,1.0,0.4420773281770594,0.4421598646375868,,,,,,,,,,,,,,,,
0,0.016042000000084045,0.016042000000084045,10583.0,1.0,0.44133738910450654,0.442092443395544,,,,,,,,,,,,,,,,
0,0.020003000000087923,0.020003000000087923,10583.0,1.0,0.4456248844371121,0.4425749602141204,,,,,,,,,,,,,,,,
0,0.024024999999994634,0.024024999999994634,10583.0,1.0,0.44868000815896425,0.439816227665654,,,,,,,,,,,,,,,,
0,0.0280380000000946,0.0280380000000946,10584.0,1.0,0.4489469528198242,0.4418025264033565,,,,,,,,,,,,,,,,
0,0.03603500000008353,0.03603500000008353,10584.0,1.0,0.4523132829105153,0.4371138396086516,,,,,,,,,,,,,,,,
0,0.040044000000079905,0.040044000000079905,10584.0,1.0,0.4501118098988253,0.4375872011537905,,,,,,,,,,,,,,,,
```

## Notes

- Unprocessed data has the first row set to some value `t>0`. The reason for this is due to:
    - Footage of the video was trimmed and aligned to the gaze
      data. The corresponding Gaze CSV was trimmed by taking a range
      of the rows, leaving the "raw" data in-tact but not having the
      timestamps adjusted.
    - Processed data corrects this by offsetting each time-stamp, assuming
      the first row is associated to `t=0`.
- Data is recorded at a higher frequency than the frame rate of the video
- As of writing, the only fields populated in each CSV are `"world_index"`, `"confidence"`, `"norm_pos_x"` and `"norm_pos_y"`
- Every video with gaze has only one video component, with relatively normal properties; such as, the video stream always starts at `t=0`, etc.

## EGTEA Gaze+

For the EGTEA Gaze+ dataset, we refer to a [recent paper](https://github.com/BolinLai/GLC/blob/main/slowfast/datasets/DATASET.md) for data splits and preprocessing scripts on the egocentric gaze estimation task.
