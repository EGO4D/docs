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
  <summary>Visual Queries - EgoTracks_&lt;set>.json schema</summary>

  - **`version`** *(string)*
  - **`date`** *(string)*
  - **`description`** *(string)*
  - **`manifest`** *(string)*
  - **`videos`** *(array)*
    - **Items** *(object)*
      - **`video_uid`** *(string)*
      - **`split`** *(string)*
      - **`clips`** *(array)*
        - **Items** *(object)*
          - **`clip_uid`** *(string)*
          - **`video_start_sec`** *(number)*
          - **`video_end_sec`** *(number)*
          - **`video_start_frame`** *(integer)*
          - **`video_end_frame`** *(integer)*
          - **`clip_start_sec`** *(integer)*
          - **`clip_end_sec`** *(number)*
          - **`clip_start_frame`** *(integer)*
          - **`clip_end_frame`** *(integer)*
          - **`clip_fps`** *(number)*
          - **`annotation_complete`** *(boolean)*
          - **`source_clip_uid`** *(string)*
          - **`annotations`** *(array)*
            - **Items** *(object)*
              - **`query_sets`** *(object)*
                - **`1`** *(object)*
                  - **`is_valid`** *(boolean)*
                  - **`errors`** *(array)*
                    - **Items** *(string)*
                  - **`warnings`** *(array)*
                    - **Items** *(string)*
                  - **`lt_track`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                  - **`object_title`** *(string)*
                  - **`visual_crop`** *(object)*
                    - **`frame_number`** *(integer)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`rotation`** *(number)*
                    - **`original_width`** *(integer)*
                    - **`original_height`** *(integer)*
                    - **`video_frame_number`** *(integer)*
                    - **`exported_clip_frame_number`** *(integer)*
                  - **`visual_clip`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                - **`2`** *(object)*
                  - **`is_valid`** *(boolean)*
                  - **`errors`** *(array)*
                    - **Items** *(string)*
                  - **`warnings`** *(array)*
                    - **Items** *(string)*
                  - **`lt_track`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                  - **`object_title`** *(string)*
                  - **`visual_crop`** *(object)*
                    - **`frame_number`** *(integer)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`rotation`** *(number)*
                    - **`original_width`** *(integer)*
                    - **`original_height`** *(integer)*
                    - **`video_frame_number`** *(integer)*
                    - **`exported_clip_frame_number`** *(integer)*
                  - **`visual_clip`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                - **`3`** *(object)*
                  - **`is_valid`** *(boolean)*
                  - **`errors`** *(array)*
                    - **Items** *(string)*
                  - **`warnings`** *(array)*
                    - **Items** *(string)*
                  - **`lt_track`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                  - **`object_title`** *(string)*
                  - **`visual_crop`** *(object)*
                    - **`frame_number`** *(integer)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`rotation`** *(number)*
                    - **`original_width`** *(integer)*
                    - **`original_height`** *(integer)*
                    - **`video_frame_number`** *(integer)*
                    - **`exported_clip_frame_number`** *(integer)*
                  - **`visual_clip`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                - **`4`** *(object)*
                  - **`is_valid`** *(boolean)*
                  - **`errors`** *(array)*
                  - **`warnings`** *(array)*
                    - **Items** *(string)*
                  - **`lt_track`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
                  - **`object_title`** *(string)*
                  - **`visual_crop`** *(object)*
                    - **`frame_number`** *(integer)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`rotation`** *(number)*
                    - **`original_width`** *(integer)*
                    - **`original_height`** *(integer)*
                    - **`video_frame_number`** *(integer)*
                    - **`exported_clip_frame_number`** *(integer)*
                  - **`visual_clip`** *(array)*
                    - **Items** *(object)*
                      - **`frame_number`** *(integer)*
                      - **`x`** *(number)*
                      - **`y`** *(number)*
                      - **`width`** *(number)*
                      - **`height`** *(number)*
                      - **`rotation`** *(number)*
                      - **`original_width`** *(integer)*
                      - **`original_height`** *(integer)*
                      - **`video_frame_number`** *(integer)*
                      - **`exported_clip_frame_number`** *(integer)*
              - **`warnings`** *(array)*
                - **Items** *(string)*

</details>
