# FHO Overview

## Introduction

The purpose of this document is to give a high-level overview of the Forecasting Hands and Object (FHO) annotations. This serves as documentation for the task and will cover: the purpose of the annotations, how FHO was annotated, the annotation data and related information (such as taxonomy), changes and additions to the data and finally the related benchmarks/challenges constructed from the annotation data.

Forecasting Hands and Object are annotated human/object interactions on top of the Ego4D dataset. These annotations describe what interaction occurred (if any), when the interaction occurred (relative to time), where the interaction occurred (via bounding boxes) and the result of the interaction (state change transition). The main objective of FHO data is to support the study of algorithms able to understand hands-object interactions and predict human intent in both the present and future [1].

## The Data

We refer to V1 as the data originally released with the [EGO4D paper][1], while V2 refers to an update of the dataset which was announced on the forum.

### How FHO was Annotated

There are two (three in V1) annotation stages for the FHO annotation pipeline. You can read a more detailed description of this in the annotation guidelines. At a high-level these steps are:
For a clip where we think a human/object interaction occurs: ask annotators to mark critical frames. Annotators may reject the clip if there is no interaction or if the object of change is not visible
Annotate bounding boxes on these critical frames
In V1, this is split into two separate annotation tasks. In V2, this was redesigned to be one annotation task due to quality issues occurring in the V1 design.

The open question above is: where are human/object interactions? This is answered by sampling the videos using the narrations. Narrations are covered for each video and a subset of them are prefixed with "#C" if a camera wearer is performing an action. This subset of narrations may or may not correspond to a human object interaction. For example, the narration could be "#C C cuts the carrot stem" or "#C walks across the street" in the former case there is a human/object interaction and in the latter there is no human/object interaction (this clip would be rejected by annotators).

FHO is not annotated for every narration starting with #C across the database due to constraints on time and budget. Instead, we sample a subset of the videos, these are sampled uniformly (randomly) across each university in 5 minute intervals over a specific set of scenarios.

### Main JSON file

As of V2 of the dataset, there is a main JSON file containing the above annotations with associated narrations. From this main JSON file, we derive a variety of different benchmark tasks. You can see a description of them below (under "Derived Benchmark Tasks and Challenges") or in the Ego4D paper.

The test has their narrations and annotations redacted.

### Taxonomy

There are multiple taxonomies for FHO and each of its benchmark tasks. At the top-level we have the taxonomy the annotators used, from here we refined the taxonomy by merging some nouns/verbs together, and finally for some derived benchmark tasks the taxonomy is further filtered or clustered.

You can find the taxonomy the annotators used and the taxonomy mapping in the "fho_main_taxonomy.json" file.

As mentioned above, when exporting the main JSON file, we perform some additional clustering of nouns and verbs. Annotators have the option to annotate a noun or verb as "OTHER" and have a textual description. Due to this, we have a language model that attempts to map from this textual description to the noun or verb. The original noun and verb the annotator annotated is in the field prefixed with underscores.

### Statistics 

As it stands, we have in the train & val splits:
- `# nouns = 508` (not including nouns not in taxonomy; "unstructured" nouns)
- `# verbs = 119` (not including verbs not in taxonomy; "unstructured" verbs)
- `# unique object instances` = 348,267
    - NOTE: this does consider tracking the same object over multiple annotation points / the entire video
- `# ground truth bounding boxes` = 1,975,137


[1]: https://arxiv.org/abs/2110.07058
