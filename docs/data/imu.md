---
sidebar_position: 6
---

# IMU

The IMU data is normalized to a flat CSV file per
[video](./videos.md). IMU has been normalized into a single format,
with associated timestamps to the canonical videos and video
components.

Unprocessed IMU data is not currently available. Some IMU data is
available on video components and can be parsed with
[gpmf-parser](https://github.com/gopro/gpmf-parser).

:::note
IMU data is not attached to (all) the video
component containers, due to many video components having metadata
stripped from them
:::

## Sample

```
component_idx,component_timestamp_ms,canonical_timestamp_ms,gyro_x,gyro_y,gyro_z,accl_x,accl_y,accl_z
0,0.0,0.0,0.025559105431309903,0.25026624068157616,0.11182108626198084,-2.278177458033573,-1.0311750599520384,-1.0311750599520384
0,4.975124378109452,4.975124378109452,0.01597444089456869,0.27689030883919064,0.10862619808306707,-2.2709832134292567,-0.8609112709832134,-0.8609112709832134
0,9.950248756218905,9.950248756218905,-0.014909478168264113,0.29073482428115016,0.0926517571884984,-2.3669064748201443,-0.4268585131894485,-0.4268585131894485
```

`canonical_timestamp_ms` may be `NULL` in some instances, due to the
canonical videos trimming to the [video stream
region](../videos/#canonical-videos).

## Technical Details

Since each canonical video has their video stream region trimmed, to
normalize the IMU data:

1. IMU timestamps relative to the video stream are found (via a simple offset)
2. Timestamps are then offset with respect to where each video
   component starts in the canonical videos

## Download

```
python3 -m ego4d.cli.cli --output_directory=<dir> --dataset=imu
```
