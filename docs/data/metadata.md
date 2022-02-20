---
sidebar_position: 2
---

# Metadata

Top level metadata for the set can be found primarily through `ego4d.json` available via the **[EGO4D CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md)** with the `--metdata` option (or enabled by default with any other primary dataset).

<details>
    <summary>Metadata - ego4d.json schema</summary>

- **`date`** *(string)*
- **`version`** *(string)*
- **`description`** *(string)*
- **`videos`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
    - **`duration_sec`** *(number)*
    - **`scenarios`** *(array)*
      - **Items** *(string)*
    - **`video_metadata`** *(object)*
      - **`fps`** *(number)*
      - **`num_frames`** *(integer)*
      - **`video_codec`** *(string)*
      - **`display_resolution_width`** *(['integer', 'null'])*
      - **`display_resolution_height`** *(['integer', 'null'])*
      - **`sample_resolution_width`** *(['integer', 'null'])*
      - **`sample_resolution_height`** *(['integer', 'null'])*
      - **`mp4_duration_sec`** *(number)*
      - **`video_start_sec`** *(number)*
      - **`video_duration_sec`** *(number)*
      - **`audio_start_sec`** *(['null', 'number'])*
      - **`audio_duration_sec`** *(['null', 'number'])*
      - **`video_start_pts`** *(integer)*
      - **`video_duration_pts`** *(integer)*
      - **`video_base_numerator`** *(integer)*
      - **`video_base_denominator`** *(integer)*
      - **`audio_start_pts`** *(['integer', 'null'])*
      - **`audio_duration_pts`** *(['integer', 'null'])*
      - **`audio_base_numerator`** *(['integer', 'null'])*
      - **`audio_base_denominator`** *(['integer', 'null'])*
    - **`split_em`** *(['null', 'string'])*
    - **`split_av`** *(['null', 'string'])*
    - **`split_fho`** *(['null', 'string'])*
    - **`s3_location`** *(string)*
    - **`manifold_path`** *(string)*
    - **`origin_video_id`** *(string)*
    - **`video_source`** *(string)*
    - **`device`** *(['null', 'string'])*
    - **`physical_setting_name`** *(['null', 'string'])*
    - **`fb_participant_id`** *(['integer', 'null'])*
    - **`video_components`** *(array)*
      - **Items** *(object)*
        - **`component_uid`** *(string)*
        - **`video_uid`** *(string)*
        - **`component_idx`** *(integer)*
        - **`redacted`** *(boolean)*
        - **`canonical_video_start_sec`** *(number)*
        - **`canonical_video_end_sec`** *(number)*
        - **`canonical_video_start_frame`** *(integer)*
        - **`canonical_video_end_frame`** *(integer)*
        - **`video_metadata`** *(object)*
          - **`fps`** *(number)*
          - **`num_frames`** *(integer)*
          - **`video_codec`** *(string)*
          - **`display_resolution_width`** *(integer)*
          - **`display_resolution_height`** *(integer)*
          - **`sample_resolution_width`** *(integer)*
          - **`sample_resolution_height`** *(integer)*
          - **`mp4_duration_sec`** *(number)*
          - **`video_start_sec`** *(['null', 'number'])*
          - **`video_duration_sec`** *(['null', 'number'])*
          - **`audio_start_sec`** *(['null', 'number'])*
          - **`audio_duration_sec`** *(['null', 'number'])*
          - **`video_start_pts`** *(integer)*
          - **`video_duration_pts`** *(['integer', 'null'])*
          - **`video_base_numerator`** *(integer)*
          - **`video_base_denominator`** *(integer)*
          - **`audio_start_pts`** *(['integer', 'null'])*
          - **`audio_duration_pts`** *(['integer', 'null'])*
          - **`audio_base_numerator`** *(['integer', 'null'])*
          - **`audio_base_denominator`** *(['integer', 'null'])*
    - **`concurrent_sets`**
    - **`has_redacted_regions`** *(boolean)*
    - **`redacted_intervals`** *(array)*
      - **Items** *(object)*
        - **`start_sec`** *(number)*
        - **`end_sec`** *(number)*
        - **`start_frame`** *(integer)*
        - **`end_frame`** *(integer)*
    - **`gaps`** *(null)*
- **`concurrent_video_sets`** *(array)*
  - **Items** *(object)*
    - **`concurrent_video_set_id`** *(integer)*
    - **`valid`** *(boolean)*
    - **`videos`** *(array)*
      - **Items** *(object)*
        - **`concurrent_video_set_id`** *(integer)*
        - **`video_uid`** *(string)*
        - **`video_start_offset_sec`** *(number)*
- **`physical_settings`** *(array)*
  - **Items** *(object)*
    - **`name`** *(string)*
    - **`fb_physical_setting_id`** *(integer)*
    - **`source`** *(string)*
    - **`s3_path`** *(string)*

</details>
