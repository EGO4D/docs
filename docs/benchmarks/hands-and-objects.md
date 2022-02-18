---
sidebar_position: 4
---

# Hand & Object Interactions

Benchmark Repo: [https://github.com/EGO4D/hands-and-objects](https://github.com/EGO4D/hands-and-objects)

## Motivation

While Episodic Memory aims to make past video queryable, Hands & Objects aims to understand the camera-wearers present activity – in terms of interactions with objects. Specifically, the Hands & Objects benchmark captures how the camera-wearer changes the state of an object by using or manipulating it – which we call an object state change. Though cutting a piece of lumber in half can be achieved through many methods (e.g., various tools, force, speeds, grasps, end effectors), all should be recognized as the same state change.

## Task Definition

Object state changes can be viewed along temporal, spatial, and semantic axes, leading to these three tasks:

1. Point-of-no-return temporal localization: given a short video clip of a state change, the goal is to estimate the keyframe that contains the point-of–no-return (PNR) (the time at which a state change begins)

2. State change object detection: given three temporal frames (pre, post, PNR), the goal is to regress the bounding box of the object undergoing a state change

3. Object state change classification: Given a short video clip, the goal is to classify whether an object state change has taken place or not

## Annotations

We select the data to annotate based on activities that are likely to involve hand-object interactions (e.g., knitting, carpentry, baking, etc.). We start by labeling each narrated hand-object interaction. For each, we label three moments in time (pre, PNR, post) and the bounding boxes for the hands, tools, and objects in each of the three frames. We also annotate the state change types (remove, burn, etc.), action verbs, and nouns for the objects.

<details>
  <summary>Point-of-no-Return Temporal Localization - fho_hands_&lt;set>.json schema</summary>

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
