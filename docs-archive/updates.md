---
sidebar_position: 20
---

Two dataset updates are pending for Ego4D:

* v2.0 (Jan '23) - Focused on a number of video fixes, additional NLQ & FHO data.  Details below.
* v2.1 (early March) - Focused on additional AV/Social, VQ & Moments data & additional utilities. 

CVPR Challenges will be based on the updated datasets.  And going forward, updates to the dataset will occur annually in Jan. 

As ever, we would love any questions or feedback on current or future changes, observed issues with the dataset and requests for future updates/utilities/dataloaders/examples/etc.  Please join us on the Ego4D Forum: [https://discuss.ego4d-data.org/](https://discuss.ego4d-data.org/)

# v2.0 Update (Jan '23)

## NLQ Annotation Updates

Natural Language Queries has been updated to include additional query and video coverage.  For train and val, there are now XXX queries vs XXX in v1, in addition to a small number of fixes for specific queries.  

## FHO Annotation Updates

TODO

## Erroneous Videos Removed From Dataset & Benchmarks

A small number of videos were removed outright from the dataset - 1 video with frozen frames, 1 with varying resolution, and several videos too short to be practically useful.  A small number (< 5) of stereo videos were in benchmark splits (including test in some cases) and were removed (but remain in the dataset appropriately flagged in metadata).  

Specific uids removed are provided in the changelog and the ego4d.json metadata has been updated appropriately.

## Additional annotations formats (fho_master.json)

There's been several requests for additional annotation formats, particularly for a unified json across the FHO tasks, which is now available. Please see the schemas page for additional details: [annotation schemas](./data/annotations-schemas.md)

## VQ Annotation Updates

Some bounding boxes were incorrectly rotated for VQ2D annotations and have been corrected.  This is the only set of corrections which is expected to have a significant impact on results and we will share updated baseline numbers with the release.  Note that this was corrected in the v1.0.5 version of the dataset for the prior VQ challenge and was the 

# v2.1 Updates (Feb/Mar '23)

## Additional annotations (AV/Social, VQ, MQ)

Roughly 2X annotations will be made publicly available for AV/Social, Visual Queries (including higher quality queries for existing objects) and Moments.

## AV Tracking Paths

A small but non-negligible set of AV tracking paths had two paths merged from distant parts of the videos.  Those have been appropriately separated in the update.  (The paths themselves have not changed beyond the separation.)

## Moments hierarchy updates

The moments hierarchy will be updated with a multi-level hierarchy to correct common concerns about the granularity of the classes.  In addition, the multiple time segements for each "natural" moment will be resolved into a single time interval to be more inline with common practices.  More details coming shortly, though please join us on the forum to discuss. 

# Prior Incremental Updates

## Downsampled Videos

Downsampled videos have been added - download as dataset `video_540ss` via the [CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md).  Videos have been scaled to 540px on the short side - more details available via the [docs](./videos.md)

## Feature Corrections

An error in feature generation that added some noise was corrected.  Full detail will be provided shortly, and the features have already been updated.

Additional features will be released shortly as well.  (EgoVLP & Narration Embeddings)

# Further Details

Upon release, the [CHANGELOG](https://github.com/facebookresearch/Ego4d/blob/main/CHANGELOG) has more detailed specifics on the update as well.  And we'll post on the [Ego4D forum](https://discuss.ego4d-data.org/) with details and follow up discussion there.