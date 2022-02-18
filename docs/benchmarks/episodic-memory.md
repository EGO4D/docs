---
sidebar_position: 2
---

# Episodic Memory

Benchmark Repo: [https://github.com/EGO4D-Consortium/episodic-memory](https://github.com/EGO4D-Consortium/episodic-memory)

## Motivation

Egocentric video from a wearable camera records the who/what/when/where of an individual’s daily
life experience. This makes it ideal for what Tulving called episodic memory: specific first-person experiences (“what did I eat and who did I sit by on my first flight to France?”), to be distinguished from semantic memory (“what’s the capital of France?”). An augmented reality assistant that processes the egocentric video stream could give us super-human memory if it could appropriately index our visual experience and answer queries.

## Task Definition

Given an egocentric video and a query, the Ego4D Episodic Memory task requires localizing where the answer can be seen within the user’s past video. We consider three query types:
1. Natural language queries (NLQ), in which the query is expressed in text (e.g., “What
did I put in the drawer?”), and the output response is the temporal window where the answer is visible or deducible.
2. Visual queries (VQ), in which the query is a static image of an object, and the output response localizes the object the last time it was seen in the video, both temporally and spatially. The spatial response is a 2D bounding box on the object, and optionally a 3D displacement vector from the current camera position to the object’s 3D bounding box. VQ captures how a user might teach the system an object with an image example, then later ask for its location (“Where is this [picture of my keys]?”).
3. Moments queries (MQ), in which the query is the name of a high-level activity or “moment”, and the response consists of all temporal windows where the activity occurs (e.g., “When did I read to my children?”).

## Annotations

For language queries, we devised a set of 13 template questions meant to span things a user might ask to augment their memory, such as “what is the state of object X?”, e.g., “did I leave the window open?”. Annotators express the queries in free-form natural language, and also provide the slot filling (e.g., X = window).

For moments, we established a taxonomy of 110 activities in a data-driven, semi-automatic manner by mining the narration summaries. Moments capture high-level activities in the camera wearer’s day, e.g., setting the table is a moment, whereas pick up is an action in our [Forecasting benchmark](./forecasting.md).

For NLQ and VQ, we ask annotators to generate language/visual queries and couple them with the “responsetrack” in the video. For MQ, we provide the taxonomy of labels and ask annotators to label clips with each and every temporal segment containing a moment instance. In total, we have ∼74K total queries spanning 800 hours of video.


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
