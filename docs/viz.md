---
title: "Visualization Tool"
sidebar_position: 4
---

# Visualization Tool

The dataset visualization tool is publicly available at: [https://visualize.ego4d-data.org](https://visualize.ego4d-data.org). You will need an approved license for access.

## Filtering

![Filterbox Example](/img/Filtering_Example_1.png)

One of the first things you'll likely want to do is filter by benchmark.<br />
Filter queries use a simple syntax of <span style={{color: 'rgb(92,151,239)'}}><strong>property</strong></span> <span style={{color: 'rgb(158,158,158)'}}><strong>operator</strong></span> <span style={{color: 'rgb(199,65,101)'}}><strong>value</strong></span> expressions chained together with <strong>AND</strong>s, <strong>OR</strong>s, and <strong>()</strong>s. Anything with a space or () must be surrounded by double quotes.<br/>
e.g.
1. <span style={{color: 'rgb(92,151,239)'}}>benchmarks</span> <span style={{color: 'rgb(158,158,158)'}}>include</span> <span style={{color: 'rgb(199,65,101)'}}>moments</span>
1. <span style={{color: 'rgb(92,151,239)'}}>video_uid</span> <span style={{color: 'rgb(158,158,158)'}}>==</span> <span style={{color: 'rgb(199,65,101)'}}>a37f501d-5cc1-4cc2-8ac2-1ec4e66a86d2</span>
1. <span style={{color: 'rgb(92,151,239)'}}>benchmarks</span> <span style={{color: 'rgb(158,158,158)'}}>include</span> <span style={{color: 'rgb(199,65,101)'}}>fho_hands</span> AND <span style={{color: 'rgb(92,151,239)'}}>modalities</span> <span style={{color: 'rgb(158,158,158)'}}>include</span> <span style={{color: 'rgb(199,65,101)'}}>imu</span>
1. <span style={{color: 'rgb(92,151,239)'}}>duration</span> <span style={{color: 'rgb(158,158,158)'}}>></span> <span style={{color: 'rgb(199,65,101)'}}>5000</span>
1. <span style={{color: 'rgb(92,151,239)'}}>moments.activities</span> <span style={{color: 'rgb(158,158,158)'}}>include</span> <span style={{color: 'rgb(199,65,101)'}}>"cut_open_a_package_(e.g._with_scissors)"</span>

Autocomplete helps you type these up. Once your query is entered, click anywhere outside the autocomplete dropdown to end it (instead of hitting enter).

## Interactive Annotations

<div style={{display: "flex", justifyContent: "space-between"}}>
    <img alt="Interactive Annotations" src="/img/Interactive_Annotations_1.png" width="30%" />
    <img alt="Interactive Annotations" src="/img/Interactive_Annotations_2.png" width="30%" />
    <img alt="Interactive Annotations" src="/img/Interactive_Annotations_3.png" width="30%" />
</div>

Once you click into a video, you'll see it with all its annotations. Many annotations are interactive.<br/>
These include:
1. Video Frames
1. Video Times
1. Response Tracks
1. Visual Crops

Any annotation that shows an underline on hover is clickable and will usually take you to that moment in the video.

You'll also notice many annotations have custom labels based on their context, e.g. scod object state changes show their pre/pnr/post times before expansion.

## Visualization Modules
Each benchmark has modules to visualize its data types.<br />
These include:
1. ### Time Segments
<div style={{display: "flex", justifyContent: "space-between", alignItems:"start"}}>
    <img alt="Interactive Annotations" src="/img/Visualization_Modules_Time_Segments_1.png" width="45%" />
    <img alt="Interactive Annotations" src="/img/Visualization_Modules_Time_Segments_2.png" width="45%" style={{objectFit:"cover"}} />
</div>
These show interactive start/end segments. Click a block to jump to the start, shift+click it to jump to the end. The black line indicates the streaming video's timestamp. A greedy algorithm assigns segments to tracks to show all segments without overlaps on a track and a minimal number of tracks. Colors are the same per label, but can be reused across multiple labels.
<br /><br />

1. ### Labeled Timestamps
<div style={{display: "flex", justifyContent: "space-between", alignItems:"start"}}>
    <img alt="Interactive Annotations" src="/img/Visualization_Modules_Labeled_Timestamps_1.png" width="50%" />
</div>
Some annotations like narrations are labeled times across the video. This module shows any timestamp labels near the current video time.
<br /><br />

1. ### Bounding Boxes
<div style={{display: "flex", justifyContent: "space-between", alignItems:"start"}}>
    <img alt="Interactive Annotations" src="/img/Visualization_Modules_Labeled_Bounding_Boxes_1.png" width="80%" />
</div>
Benchmarks with bounding boxes, like visual queries, are visualized directly on the video. Bounding boxes that track an object across frames (e.g. response tracks) are interpolated across them. The FHO hands benchmark uses points, not areas, to represent hands, so these are shown with fixed-size circles instead of bounding boxes.