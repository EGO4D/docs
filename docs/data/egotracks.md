---
sidebar_position: 10
---

# EgoTracks

[EgoTracks: A Long-term Egocentric Visual Object Tracking Dataset](https://arxiv.org/abs/2301.03213)

## Motivation

Visual object tracking is a key component to many egocentric vision problems.  However, the full spectrum of challenges of egocentric tracking faced by an embodied AI is underrepresented in many existing datasets; these tend to focus on relatively short, third-person videos. Egocentric video has several distinguishing characteristics from those commonly found in past datasets: frequent large camera motions and hand interactions with objects commonly lead to occlusions or objects exiting the frame, and object appearance can change rapidly due to widely different points of view, scale, or object states. Embodied tracking is also naturally long-term, and being able to consistently (re-)associate objects to their appearances and disappearances over as long as a lifetime is critical. EgoTracks presents a significant challenge to recent state-of-the-art single-object tracking models, which we find score poorly on traditional tracking metrics for our new dataset, compared to popular benchmarks. We release this dataset as part of the Ego4D benchmark, hoping our dataset leads to further advancements in tracking.

The EgoTracks uses the interesting objects defined in VQ and annotates bounding boxes of the object for each frame it appears.

## Task Definition

Given an egocentric video and a visual template of an object, the Long-term tracking task requires reporting the location of the object in each frame of the video, as well as a confidence score representing the presence of the object. 

The annotation is in the same format as VQ, consisting of a total of 22.42k tracks from 5.9k videos. The 3.6k/1.2k/1.1k for train/val/test is the same as the VQ split.

## Download

You can download the egotracks dataset via the [CLI](/CLI.md) using `--datasets egotracks`.

## Schema

Once you download the annotations with the cli, you'll have a set of json files. Here are their schemas for quick reference:

<details>
  <summary>Forecasting Hands & Objects Master File - fho_main.json schema</summary>

  - **`version`** *(string)*
  - **`date`** *(string)*
  - **`description`** *(string)*
  - **`metadata`** *(string)*
  - **`videos`** *(array)*
    - **Items** *(object)*
      - **`annotated_intervals`** *(array)*
        - **Items** *(object)*
          - **`clip_id`** *(string)*
          - **`clip_uid`** *(['null', 'string'])*
          - **`start_sec`** *(number)*
          - **`end_sec`** *(number)*
          - **`clip_parent_start_sec`** *(number)*
          - **`clip_parent_end_sec`** *(number)*
          - **`narrated_actions`** *(array)*
            - **Items** *(object)*
              - **`warnings`** *(array)*
              - **`uid`** *(['null', 'string'])*
              - **`start_sec`** *(number)*
              - **`end_sec`** *(number)*
              - **`start_frame`** *(integer)*
              - **`end_frame`** *(integer)*
              - **`is_valid_action`** *(boolean)*
              - **`is_partial`** *(boolean)*
              - **`clip_start_sec`** *(number)*
              - **`clip_end_sec`** *(number)*
              - **`clip_start_frame`** *(integer)*
              - **`clip_end_frame`** *(integer)*
              - **`narration_timestamp_sec`** *(number)*
              - **`clip_narration_timestamp_sec`** *(number)*
              - **`narration_text`** *(string)*
              - **`narration_annotation_uid`** *(string)*
              - **`structured_verb`** *(['null', 'string'])*
              - **`freeform_verb`** *(['null', 'string'])*
              - **`state_transition`** *(['null', 'string'])*
              - **`critical_frames`**
              - **`clip_critical_frames`**
              - **`frames`**
              - **`is_rejected`** *(boolean)*
              - **`is_invalid_annotation`** *(boolean)*
              - **`reject_reason`** *(['null', 'string'])*
              - **`stage`** *(['null', 'string'])*
          - **`start_frame`** *(integer)*
          - **`end_frame`** *(integer)*
          - **`clip_parent_start_frame`** *(integer)*
          - **`clip_parent_end_frame`** *(integer)*
          - **`redacted`** *(boolean)*
      - **`video_metadata`** *(object)*
        - **`video_start_pts`** *(integer)*
        - **`video_base_numerator`** *(integer)*
        - **`video_base_denominator`** *(integer)*
        - **`duration_sec`** *(number)*
        - **`num_frames`** *(integer)*
        - **`fps`** *(number)*
        - **`width`** *(integer)*
        - **`height`** *(integer)*
        - **`rotation`** *(null)*
      - **`video_uid`** *(string)*

</details>
