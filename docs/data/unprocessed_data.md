---
sidebar_position: 10
---

# Unprocessed Data

:::note
1. Usage of raw data is *not recommended* unless you know what you're
doing, or can be used to obtain component types such as binaural audio
or 3rd person video data
2. There are some missing raw components. Please create an issue on GitHub if you are wanting this data.
:::

All data has been processed to some extent. The data available here is
simply what each member of the consortium has provided in their "raw"
form (as raw as you can get). Most video components have been
compressed. [Top level metadata](./metadata.md) specifies the commands
used for compression and other potential issues with them.

You can download the data with the CLI specifying the string
`--datasets components/<type>`, where `<type>`is one of the following values:


| `<type>`           | Description                                                  | Size    | Quantity (# components) |
|--------------------|--------------------------------------------------------------|---------|-------------------------|
| `videos`           | Video components                                             | 20TB    | 24246 (8 missing)       |
| `imu`              | IMU                                                          | 114.8GB | 6396 (498 missing)      |
| `gaze`             | Gaze (CSV)                                                   | 0.5GB   | 32                      |
| `burned_in_gaze`   | Videos with a 2D point overlayed on them specifying the Gaze | 175GB   | 38                      |
| `binaural_audio`   | Binaural audio assocaiated to videos                         | 20GB    | 29                      |
| `3rd_person_video` | 3rd Person Videos                                            | 155.6GB | 37                      |

For some components there are some deficiencies to them. So please
read the appropriate section in the document before using it.
