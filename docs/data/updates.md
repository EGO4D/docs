---
sidebar_position: 20
---

# v1.1 Update

In addition to the dataset updates below, note that the [Ego4D forum](https://discuss.ego4d-data.org/) and [Visualization tool](./viz.md)

The [CHANGELOG](https://github.com/facebookresearch/Ego4d/blob/main/CHANGELOG) has more detailed specifics on the update as well.

## Stereo Videos Removed From Benchmarks

A small number (< 5, specific uids provided in the changelog) of stereo videos were in benchmark splits (including test in some cases) and were removed in v1.1.  The challenge will be evaluated without those videos in the test splits (naturally).  Those videos are all still available to use as one sees fit though, and are now flagged appropriately in the top level ego4d.json metadata.

## VQ Annotation Updates

Some bounding boxes were incorrectly rotated for VQ2D annotations and have been corrected.  Benchmark/challenge results will be updated shortly.

## Feature Updates

Omnivore features have been updated.  Please see the changelog for details.


