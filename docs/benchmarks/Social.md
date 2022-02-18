---
sidebar_position: 6
---

# Social Interactions

Benchmark Repo: [https://github.com/EGO4D/social-interactions](https://github.com/EGO4D/social-interactions)

## Motivation

An egocentric video provides a unique lens for studying social interactions because it captures utterances and nonverbal cues from each participant’s unique view and enables embodied approaches to social understanding. Progress in egocentric social understanding could lead to more capable virtual assistants and social robots.

## Task Definition

Our Social benchmark focuses on multimodal understanding of conversational interactions via attention and speech. Specifically, we focus on identifying communicative acts that are directed toward the camera-wearer, as distinguished from those directed to other social partners:

1. Looking at me (LAM): given a video in which the faces of the social partners have been localized and identified, classify whether each visible face is looking at the camera-wearer.

2. Talking to me (TTM): given a video and audio segment with the same tracked faces and additional label that identifies speaker status, classify whether each visible face is talking to the camera wearer.

## Annotations

Social annotations build on those from AV diarization. Given (1) face bounding boxes labeled with participant IDs and tracked across frames, and (2) associated active speaker annotations that identify in each frame whether the social partners whose faces are visible are speaking, annotators provide the ground truth labels for LAM and TTM as a binary label for each face in each frame. For LAM, annotators label the time segment (start and end time) of a visible person when the individual is looking at the camera wearer. For TTM, we use the vocal activity annotation from AVD, then identify the time segment when the speech is directed at the camera wearer.

<details>
  <summary>Audio-Visual Diarization - av_&lt;set>.json</summary>

- **`date`** *(string)*
- **`version`** *(string)*
- **`description`** *(string)*
- **`videos`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
    - **`split`** *(string)*
    - **`clips`** *(array)*
      - **Items** *(object)*
        - **`clip_uid`** *(string)*
        - **`source_clip_uid`** *(string)*
        - **`video_uid`** *(string)*
        - **`video_start_sec`** *(number)*
        - **`video_end_sec`** *(number)*
        - **`video_start_frame`** *(integer)*
        - **`video_end_frame`** *(integer)*
        - **`clip_start_sec`** *(integer)*
        - **`clip_end_sec`** *(number)*
        - **`clip_start_frame`** *(integer)*
        - **`clip_end_frame`** *(integer)*
        - **`valid`** *(boolean)*
        - **`camera_wearer`** *(object)*
          - **`person_id`** *(string)*
          - **`camera_wearer`** *(boolean)*
          - **`voice_segments`** *(array)*
            - **Items** *(object)*
              - **`start_time`** *(number)*
              - **`end_time`** *(number)*
              - **`start_frame`** *(integer)*
              - **`end_frame`** *(integer)*
              - **`video_start_time`** *(number)*
              - **`video_end_time`** *(number)*
              - **`video_start_frame`** *(integer)*
              - **`video_end_frame`** *(integer)*
              - **`person`** *(string)*
        - **`persons`** *(array)*
          - **Items** *(object)*
            - **`person_id`** *(string)*
            - **`camera_wearer`** *(boolean)*
            - **`tracking_paths`** *(array)*
              - **Items** *(object)*
                - **`track_id`** *(string)*
                - **`track`** *(array)*
                  - **Items** *(object)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`frame`** *(integer)*
                    - **`video_frame`** *(integer)*
                    - **`clip_frame`** *(null)*
                - **`suspect`** *(boolean)*
                - **`unmapped_frames_count`** *(integer)*
                - **`unmapped_frames`** *(array)*
                  - **Items** *(integer)*
            - **`voice_segments`** *(array)*
              - **Items** *(object)*
                - **`start_time`** *(number)*
                - **`end_time`** *(number)*
                - **`start_frame`** *(integer)*
                - **`end_frame`** *(integer)*
                - **`video_start_time`** *(number)*
                - **`video_end_time`** *(number)*
                - **`video_start_frame`** *(integer)*
                - **`video_end_frame`** *(integer)*
                - **`person`** *(string)*
        - **`missing_voice_segments`** *(array)*
        - **`transcriptions`** *(array)*
          - **Items** *(object)*
            - **`transcription`** *(string)*
            - **`start_time_sec`** *(number)*
            - **`end_time_sec`** *(number)*
            - **`person_id`** *(string)*
            - **`video_start_time`** *(number)*
            - **`video_start_frame`** *(integer)*
            - **`video_end_time`** *(number)*
            - **`video_end_frame`** *(integer)*
        - **`social_segments_talking`** *(array)*
          - **Items** *(object)*
            - **`start_time`** *(number)*
            - **`end_time`** *(number)*
            - **`start_frame`** *(integer)*
            - **`end_frame`** *(integer)*
            - **`video_start_time`** *(number)*
            - **`video_end_time`** *(number)*
            - **`video_start_frame`** *(integer)*
            - **`video_end_frame`** *(integer)*
            - **`person`** *(['null', 'string'])*
            - **`target`** *(['null', 'string'])*
            - **`is_at_me`** *(boolean)*
        - **`social_segments_looking`**

</details>
