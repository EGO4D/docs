---
sidebar_position: 5
---

# Annotations

Once you download the annotations with the cli, you'll have a set of json files. Here are their schemas for quick reference - see [annotation guidelines](/data/annotation-guidelines) and [benchmark tasks](/benchmarks/overview) for more information on what the fields represent.

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

<details>
  <summary>Forecasting Hands & Objects - fho_hands_&lt;set>.json schema</summary>

- **`version`** *(string)*
- **`date`** *(string)*
- **`description`** *(string)*
- **`manifest`** *(string)*
- **`split`** *(string)*
- **`clips`** *(array)*
  - **Items** *(object)*
    - **`clip_id`** *(integer)*
    - **`clip_uid`** *(string)*
    - **`video_uid`** *(string)*
    - **`frames`** *(array)*
      - **Items** *(object)*
        - **`action_start_sec`** *(number)*
        - **`action_end_sec`** *(number)*
        - **`action_start_frame`** *(integer)*
        - **`action_end_frame`** *(integer)*
        - **`action_clip_start_sec`** *(number)*
        - **`action_clip_end_sec`** *(number)*
        - **`action_clip_start_frame`** *(integer)*
        - **`action_clip_end_frame`** *(integer)*
        - **`pre_45`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`pre_30`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`pre_15`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`post_frame`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`pre_frame`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`pnr_frame`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*
        - **`contact_frame`** *(object)*
          - **`frame`** *(integer)*
          - **`clip_frame`** *(integer)*
          - **`boxes`** *(array)*
            - **Items** *(object)*
              - **`left_hand`** *(array)*
                - **Items** *(number)*
              - **`right_hand`** *(array)*
                - **Items** *(number)*

</details>

<details>
  <summary>Long-Term Action Anticipation - fho_lta_&lt;set>.json schema</summary>

- **`version`** *(string)*
- **`date`** *(string)*
- **`description`** *(string)*
- **`split`** *(string)*
- **`clips`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
    - **`clip_uid`** *(string)*
    - **`clip_parent_start_sec`** *(number)*
    - **`clip_parent_end_sec`** *(number)*
    - **`clip_parent_start_frame`** *(integer)*
    - **`clip_parent_end_frame`** *(integer)*
    - **`interval_start_frame`** *(integer)*
    - **`interval_end_frame`** *(integer)*
    - **`interval_start_sec`** *(number)*
    - **`interval_end_sec`** *(number)*
    - **`verb`** *(string)*
    - **`noun`** *(string)*
    - **`action_clip_start_sec`** *(number)*
    - **`action_clip_end_sec`** *(number)*
    - **`action_clip_start_frame`** *(integer)*
    - **`action_clip_end_frame`** *(integer)*
    - **`clip_id`** *(integer)*
    - **`action_idx`** *(integer)*
    - **`verb_label`** *(integer)*
    - **`noun_label`** *(integer)*

</details>

<details>
  <summary>State Change Object Detection - fho_scod_&lt;set>.json schema</summary>

- **`version`** *(string)*
- **`date`** *(string)*
- **`description`** *(string)*
- **`split`** *(string)*
- **`clips`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
    - **`clip_id`** *(string)*
    - **`clip_uid`** *(string)*
    - **`clip_parent_start_sec`** *(number)*
    - **`clip_parent_end_sec`** *(number)*
    - **`clip_parent_start_frame`** *(integer)*
    - **`clip_parent_end_frame`** *(integer)*
    - **`pre_frame`** *(object)*
      - **`frame_number`** *(integer)*
      - **`clip_frame_number`** *(integer)*
      - **`width`** *(integer)*
      - **`height`** *(integer)*
      - **`bbox`** *(array)*
        - **Items** *(object)*
          - **`object_type`** *(string)*
          - **`structured_noun`** *(['null', 'string'])*
          - **`instance_number`** *(['integer', 'null'])*
          - **`bbox`** *(object)*
            - **`x`** *(number)*
            - **`y`** *(number)*
            - **`width`** *(number)*
            - **`height`** *(number)*
    - **`pnr_frame`** *(object)*
      - **`frame_number`** *(integer)*
      - **`clip_frame_number`** *(integer)*
      - **`width`** *(integer)*
      - **`height`** *(integer)*
      - **`bbox`** *(array)*
        - **Items** *(object)*
          - **`object_type`** *(string)*
          - **`structured_noun`** *(['null', 'string'])*
          - **`instance_number`** *(['integer', 'null'])*
          - **`bbox`** *(object)*
            - **`x`** *(number)*
            - **`y`** *(number)*
            - **`width`** *(number)*
            - **`height`** *(number)*
    - **`post_frame`** *(object)*
      - **`frame_number`** *(integer)*
      - **`clip_frame_number`** *(integer)*
      - **`width`** *(integer)*
      - **`height`** *(integer)*
      - **`bbox`** *(array)*
        - **Items** *(object)*
          - **`object_type`** *(string)*
          - **`structured_noun`** *(['null', 'string'])*
          - **`instance_number`** *(['integer', 'null'])*
          - **`bbox`** *(object)*
            - **`x`** *(number)*
            - **`y`** *(number)*
            - **`width`** *(number)*
            - **`height`** *(number)*

</details>

<details>
  <summary>Short Term Action Anticipation - fho_sta_&lt;set>.json schema</summary>

- **`info`** *(object)*
  - **`description`** *(string)*
  - **`version`** *(string)*
  - **`split`** *(string)*
  - **`include_annotations`** *(boolean)*
  - **`video_metadata`** *(object)*
    - **`<video_uid>`** *(object)*
      - **`frame_width`** *(integer)*
      - **`frame_height`** *(integer)*
      - **`fps`** *(number)*
  - **`year`** *(string)*
  - **`date_created`** *(string)*
- **`annotations`** *(array)*
  - **Items** *(object)*
    - **`uid`** *(string)*
    - **`video_id`** *(string)*
    - **`frame`** *(integer)*
    - **`clip_id`** *(integer)*
    - **`clip_uid`** *(string)*
    - **`clip_frame`** *(integer)*
    - **`objects`** *(array)*
      - **Items** *(object)*
        - **`box`** *(array)*
          - **Items** *(number)*
        - **`verb_category_id`** *(integer)*
        - **`noun_category_id`** *(integer)*
        - **`time_to_contact`** *(number)*
- **`noun_categories`** *(array)*
  - **Items** *(object)*
    - **`id`** *(integer)*
    - **`name`** *(string)*
- **`verb_categories`** *(array)*
  - **Items** *(object)*
    - **`id`** *(integer)*
    - **`name`** *(string)*

</details>

<details>
  <summary>Long-Term Action Anticipation - fho_lta_&lt;set>.json schema</summary>

- **`version`** *(string)*
- **`date`** *(string)*
- **`description`** *(string)*
- **`split`** *(string)*
- **`clips`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
    - **`clip_uid`** *(string)*
    - **`clip_parent_start_sec`** *(number)*
    - **`clip_parent_end_sec`** *(number)*
    - **`clip_parent_start_frame`** *(integer)*
    - **`clip_parent_end_frame`** *(integer)*
    - **`interval_start_frame`** *(integer)*
    - **`interval_end_frame`** *(integer)*
    - **`interval_start_sec`** *(number)*
    - **`interval_end_sec`** *(number)*
    - **`verb`** *(string)*
    - **`noun`** *(string)*
    - **`action_clip_start_sec`** *(number)*
    - **`action_clip_end_sec`** *(number)*
    - **`action_clip_start_frame`** *(integer)*
    - **`action_clip_end_frame`** *(integer)*
    - **`clip_id`** *(integer)*
    - **`action_idx`** *(integer)*
    - **`verb_label`** *(integer)*
    - **`noun_label`** *(integer)*

</details>

<details>
  <summary>Moments Queries - moments_&lt;set>.json schema</summary>

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
        - **`source_clip_uid`** *(string)*
        - **`annotations`** *(array)*
          - **Items** *(object)*
            - **`annotator_uid`** *(string)*
            - **`labels`** *(array)*
              - **Items** *(object)*
                - **`start_time`** *(number)*
                - **`end_time`** *(number)*
                - **`label`** *(string)*
                - **`video_start_time`** *(number)*
                - **`video_end_time`** *(number)*
                - **`video_start_frame`** *(integer)*
                - **`video_end_frame`** *(integer)*

</details>

<details>
    <summary>Narrations - narrations.json</summary>

- **`<video_uid>`** *(object)*
  - **`narration_pass_1`** *(object)*
    - **`narrations`** *(array)*
      - **Items** *(object)*
        - **`timestamp_sec`** *(number)*
        - **`timestamp_frame`** *(integer)*
        - **`_unmapped_timestamp_sec`** *(number)*
        - **`narration_text`** *(string)*
        - **`annotation_uid`** *(string)*
    - **`summaries`** *(array)*
      - **Items** *(object)*
        - **`start_sec`** *(number)*
        - **`end_sec`** *(number)*
        - **`summary_text`** *(string)*
        - **`annotation_uid`** *(string)*
  - **`narration_pass_2`** *(object)*
    - **`narrations`** *(array)*
      - **Items** *(object)*
        - **`timestamp_sec`** *(number)*
        - **`timestamp_frame`** *(integer)*
        - **`_unmapped_timestamp_sec`** *(number)*
        - **`narration_text`** *(string)*
        - **`annotation_uid`** *(string)*
    - **`summaries`** *(array)*
      - **Items** *(object)*
        - **`start_sec`** *(number)*
        - **`end_sec`** *(number)*
        - **`summary_text`** *(string)*
        - **`annotation_uid`** *(string)*
  - **`status`** *(string)*

</details>

<details>
  <summary>Natural Language Queries - nlq_&lt;set>.json schema</summary>

- **`version`** *(string)*
- **`date`** *(string)*
- **`description`** *(string)*
- **`manifest`** *(string)*
- **`videos`** *(array)*
  - **Items** *(object)*
    - **`video_uid`** *(string)*
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
        - **`source_clip_uid`** *(string)*
        - **`annotations`** *(array)*
          - **Items** *(object)*
            - **`language_queries`** *(array)*
              - **Items** *(object)*
                - **`clip_start_sec`** *(number)*
                - **`clip_end_sec`** *(number)*
                - **`video_start_sec`** *(number)*
                - **`video_end_sec`** *(number)*
                - **`video_start_frame`** *(integer)*
                - **`video_end_frame`** *(integer)*
                - **`template`** *(['null', 'string'])*
                - **`query`** *(['null', 'string'])*
                - **`slot_x`** *(['null', 'string'])*
                - **`verb_x`** *(['null', 'string'])*
                - **`slot_y`** *(['null', 'string'])*
                - **`verb_y`** *(string)*
                - **`raw_tags`** *(array)*
                  - **Items** *(['null', 'string'])*
            - **`annotation_uid`** *(string)*
    - **`split`** *(string)*

</details>

<details>
  <summary>Visual Queries - vq_&lt;set>.json schema</summary>

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
                - **`query_frame`** *(integer)*
                - **`query_video_frame`** *(integer)*
                - **`response_track`** *(array)*
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
              - **`2`** *(object)*
                - **`is_valid`** *(boolean)*
                - **`errors`** *(array)*
                  - **Items** *(string)*
                - **`warnings`** *(array)*
                  - **Items** *(string)*
                - **`query_frame`** *(integer)*
                - **`query_video_frame`** *(['integer', 'null'])*
                - **`response_track`** *(array)*
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
              - **`3`** *(object)*
                - **`is_valid`** *(boolean)*
                - **`errors`** *(array)*
                  - **Items** *(string)*
                - **`warnings`** *(array)*
                  - **Items** *(string)*
                - **`query_frame`** *(integer)*
                - **`query_video_frame`** *(['integer', 'null'])*
                - **`response_track`** *(array)*
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
              - **`4`** *(object)*
                - **`is_valid`** *(boolean)*
                - **`errors`** *(array)*
                - **`warnings`** *(array)*
                  - **Items** *(string)*
                - **`query_frame`** *(integer)*
                - **`query_video_frame`** *(integer)*
                - **`response_track`** *(array)*
                  - **Items** *(object)*
                    - **`frame_number`** *(integer)*
                    - **`x`** *(number)*
                    - **`y`** *(number)*
                    - **`width`** *(number)*
                    - **`height`** *(number)*
                    - **`rotation`** *(integer)*
                    - **`original_width`** *(integer)*
                    - **`original_height`** *(integer)*
                    - **`video_frame_number`** *(integer)*
                - **`object_title`** *(string)*
                - **`visual_crop`** *(object)*
                  - **`frame_number`** *(integer)*
                  - **`x`** *(number)*
                  - **`y`** *(number)*
                  - **`width`** *(number)*
                  - **`height`** *(number)*
                  - **`rotation`** *(integer)*
                  - **`original_width`** *(integer)*
                  - **`original_height`** *(integer)*
                  - **`video_frame_number`** *(integer)*
            - **`warnings`** *(array)*
              - **Items** *(string)*

</details>
