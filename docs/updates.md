---
sidebar_position: 18
---

Ego4D was recently updated to version v2.0 (Feb '23) - focused on additional Forecasting, Hands & Objects (243 hrs vs 120 hrs) and Natural Language Queries (27k vs 19k queries) annotations, a number of corrections and usability enhancements, and two new related dataset enhancements (PACO object and EgoTracks tracking path annotations).  Details below.

CVPR challenges for this year will be based on the updated dataset for FHO & NLQ benchmarks.

A v2.1 update will occur after CVPR (July '23), focusing on additional AV/Social, VQ & Moments data & additional utilities.  Going forward, primary updates will occur to the dataset in January each year.

As ever, we would love any questions or feedback on current or future changes, observed issues with the dataset and requests for future updates/utilities/dataloaders/examples/etc.  Please join us on the Ego4D Forum: [https://discuss.ego4d-data.org/](https://discuss.ego4d-data.org/)

# v2.0 Update

## FHO Annotation Updates

Forecasting, Hands & Objects has roughly double the annotations compared to v1 (243 hours of annotated clips vs 120 hrs in v1), split in the same 75/25 proportion in train/val.  Benchmark task jsons have been updated accordingly for train/val, though the unannotated test json's remain the same (and can be submitted to the same eval.ai challenges as with v1). 

## NLQ Annotation Updates

Natural Language Queries has been updated to include additional query and video coverage.  For train and val, there are now 27k queries vs 19k in v1, in addition to a small number of fixes for specific queries.  (Specifically, a number of query time intervals were specified as point in time with start=end and have been updated to include the time interval.)  

## Erroneous Videos Removed From Dataset & Benchmarks

A small number of videos were removed outright from the dataset - 1 video with frozen frames, 1 with varying resolution, and several videos too short to be practically useful.  A small number (< 5) of stereo videos were in benchmark splits (including test in some cases) and were removed (but remain in the dataset appropriately flagged in metadata).  

Specific uids removed are provided in the changelog and the ego4d.json metadata has been updated appropriately.

## Additional annotations formats (fho_main.json)

There's been several requests for additional annotation formats, particularly for a unified json across the FHO tasks, which is now available. Please see the schemas page for additional details: [annotation schemas](./data/annotations-schemas.md)

## VQ Annotation Updates

Some bounding boxes were incorrectly rotated for VQ2D annotations and have been corrected.  This is the only set of corrections which is expected to have a significant impact on results and we will share updated baseline numbers with the release.  Note that this was corrected in the v1.0.5 version of the dataset for the prior VQ challenge and was the 

## PACO (Parts and Attributes of Common Objects) Dataset

[PACO (Parts and Attributes of Common Objects) Dataset](https://arxiv.org/abs/2301.01795)

Object models are gradually progressing from predicting just category labels to providing detailed descriptions of object instances. This motivates the need for large datasets which go beyond traditional object masks and provide richer annotations such as part masks and attributes. Hence, we introduce PACO: Parts and Attributes of Common Objects. It spans 75 object categories, 456 object-part categories and 55 attributes across image (LVIS) and video (Ego4D) datasets. We provide 641K part masks annotated across 260K object boxes, with roughly half of them exhaustively annotated with attributes as well. We design evaluation metrics and provide benchmark results for three tasks on the dataset: part mask segmentation, object and part attribute prediction and zero-shot instance detection. Dataset, models, and code are open-sourced: [https://github.com/facebookresearch/paco](https://github.com/facebookresearch/paco)

## EgoTracks

[EgoTracks Documentation](./data/egotracks.md)

[EgoTracks: A Long-term Egocentric Visual Object Tracking Dataset](https://arxiv.org/abs/2301.03213)

Visual object tracking is a key component to many egocentric vision problems. However, the full spectrum of challenges of egocentric tracking faced by an embodied AI is underrepresented in many existing datasets; these tend to focus on relatively short, third-person videos. Egocentric video has several distinguishing characteristics from those commonly found in past datasets: frequent large camera motions and hand interactions with objects commonly lead to occlusions or objects exiting the frame, and object appearance can change rapidly due to widely different points of view, scale, or object states. Embodied tracking is also naturally long-term, and being able to consistently (re-)associate objects to their appearances and disappearances over as long as a lifetime is critical. Previous datasets under-emphasize this re-detection problem, and their "framed" nature has led to adoption of various spatiotemporal priors that we find do not necessarily generalize to egocentric video. We thus introduce EgoTracks, a new dataset for long-term egocentric visual object tracking. Sourced from the Ego4D dataset, this new dataset presents a significant challenge to recent state-of-the-art single-object tracking models, which we find score poorly on traditional tracking metrics for our new dataset, compared to popular benchmarks. We further show improvements that can be made to a STARK tracker to significantly increase its performance on egocentric data, resulting in a baseline model we call EgoSTARK. We publicly release our annotations and benchmark, hoping our dataset leads to further advancements in tracking.

# v2.1 Updates (July '23)

## Additional annotations (AV/Social, VQ, MQ)

Roughly 2X annotations will be made publicly available for AV/Social, Visual Queries (including higher quality queries for existing objects) and Moments.

## AV Tracking Paths

A small but non-negligible set of AV tracking paths had two paths merged from distant parts of the videos.  Those have been appropriately separated in the update.  (The paths themselves have not changed beyond the separation.)

## Moments hierarchy updates

The moments hierarchy will be updated with a multi-level hierarchy to correct common concerns about the granularity of the classes.  In addition, the multiple time segements for each "natural" moment will be resolved into a single time interval to be more inline with common practices.  More details coming shortly, though please join us on the forum to discuss. 

# Prior Incremental Updates

## Downsampled Videos

Downsampled videos have been added - download as dataset `video_540ss` via the [CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md).  Videos have been scaled to 540px on the short side - more details available via the [docs](./data/videos.md)

## Feature Updates

An error in feature generation that added some noise was corrected.  Full detail will be provided shortly, and the features have already been updated.

Omnivore FP16 features were added: [Features](https://ego4d-data.org/docs/data/features/)

Additional features will be released shortly as well.  (EgoVLP & Narration Embeddings)

# Further Details

Upon release, the [CHANGELOG](https://github.com/facebookresearch/Ego4d/blob/main/CHANGELOG) has more detailed specifics on the update as well.  And we'll post on the [Ego4D forum](https://discuss.ego4d-data.org/) with details and follow up discussion there.