---
sidebar_position: 10
---

# FAQ

Note that many questions may have already been answered on the [forum](https://discuss.ego4d-data.org/) or github issues for the [primary github repo](https://github.com/facebookresearch/Ego4d/issues?q=is%3Aissue) or for the [benchmark specific repos](./data/videos.md).

## Why are there multiple minutes of blank frames in some of the videos?

Those sections of the video have been redacted.  The decision was made to keep the frames in the video to keep the timing & sequence consistent with the raw video, but the component had to be removed for privacy/deid/etc concerns.  Please see the [video documentation](./data/videos.md) for more info.

## My credentials expired.  How do I renew?

Go back to [https://ego4ddataset.com/](https://ego4ddataset.com/) and re-enter the same info you originally regstered with and you'll receive an updated set of credentials immediately.

## Are there dataloaders available for the dataset. 

Two answers: Yes & coming soon. For each of the benchmarks, there is a dataloader available that was used to generate the benchmark results and that should cover most purposes.  There's also a set of common dataloaders coming, which will be available sometime in May. 


