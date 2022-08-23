---
sidebar_position: 20
---

# v1.1 Update

:::note Forum/Visualization Release
Note that the [Ego4D forum](https://discuss.ego4d-data.org/) and [visualization tool](./viz.md) are now available.
:::

An update to the dataset is pending.  We'll provide full details on release shortly (by mid early July).  For the vast majority of the dataset we expect a de minimis impact on results, but we will be confirming with updated numbers as we release.

## Downsampled Videos

Downsampled videos have been added - download as dataset `video_540ss` via the [CLI](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md).  Videos have been scaled to 540px on the short side - more details available via the [docs](./videos.md)

## VQ Annotation Updates

Some bounding boxes were incorrectly rotated for VQ2D annotations and have been corrected.  This is the only set of corrections which is expected to have a significant impact on results and we will share updated baseline numbers with the release.

## AV Tracking Paths

A small but non-negligible set of AV tracking paths had two paths merged from distant parts of the videos.  Those have been appropriately separated in the update.  (The paths themselves have not changed beyond the separation.)

## Stereo Videos Removed From Benchmarks

A small number (< 5, specific uids provided in the changelog) of stereo videos were in benchmark splits (including test in some cases) and were removed in v1.1.  The future challenges will be evaluated without those videos in the test splits (naturally).  Those videos are all still available to use as one sees fit though, and are now flagged appropriately in the top level ego4d.json metadata.

## Feature Updates

An error in feature generation that added some noise was corrected.  Full detail will be provided shortly, and the features have already been updated.

Additional features will be released shortly as well.  (EgoVLP & Narration Embeddings)

## Additional annotations formats

There's been several requests for additional annotation formats, particularly for a unified json across the FHO tasks, and that will be release shortly with the update.

# Further Details

Upon release, the [CHANGELOG](https://github.com/facebookresearch/Ego4d/blob/main/CHANGELOG) has more detailed specifics on the update as well.  And we'll post on the [Ego4D forum](https://discuss.ego4d-data.org/) with details and follow up discussion there.