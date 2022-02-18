---
sidebar_position: 5
---

# AV Diarization

## Motivation

People communicate using spoken language, making the capture of conversational content in business meetings and social settings a problem of great scientific and practical interest. While diarization has been a standard problem in the speech recognition community, Ego4D brings in two new aspects (1) simultaneous capture of video and audio (2) the egocentric perspective of a participant in the conversation.

## Task Definition

The Audio-Visual Diarization (AVD) benchmark is composed of four tasks:

1. Localization and tracking of the participants in the field of view: A bounding box is annotated around each participant's faces.

2. Active speaker detection where each tracked speaker is assigned an anonymous label, including the camera-wearer who never appears in the visual field of view.

3. Diarization of each speaker’s speech activity, where we provide time segments corresponding to each speaker's voice activity in a clip.

4. Transcription of each speakers speech content (only English speakers are considered for this version)

## Annotation Schema

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
