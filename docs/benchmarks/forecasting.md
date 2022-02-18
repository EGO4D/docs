---
sidebar_position: 3
---

# Forecasting

Benchmark Repo: [https://github.com/EGO4D/forecasting](https://github.com/EGO4D/forecasting)

## Motivation

Forecasting movements and interactions requires comprehending the camera wearer’s intention. It has immediate applications in AR and human-robot interaction, such as anticipatively turning on appliances or moving objects for the human’s convenience.

## Task Definition

The Forecasting benchmark includes four tasks:

1. Locomotion prediction: predict a set of possible future ground plane trajectories of the camera wearer.

2. Hand movement prediction: predict the hand positions of the camera wearer in future frames.

3. Short-term object interaction anticipation: detect a set of possible future interacted objects in the most recent frame of the clip. To each object, assign a verb indicating the possible future interaction and a “time to contact” estimate of when the interaction is going to begin.

4. Long-term action anticipation: predict the camera wearer’s future sequence of actions.

## Annotations

Using the narrations, we identify the occurrence of each object interaction, assigning a verb and a target object class. The verb and noun taxonomies are seeded from the narrations and then hand-refined. For each action, we identify a contact frame and a precondition frame in which we annotate bounding boxes around active objects. The same objects as well as hands are annotated in three frames preceding the pre-condition frame by 0.5s, 1s and 1.5s. We obtain ground truth ego-trajectories of the camera wearer using structure from motion.

<details>
  <summary>Hand Movement Prediction - fho_hands_&lt;set>.json schema</summary>

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
