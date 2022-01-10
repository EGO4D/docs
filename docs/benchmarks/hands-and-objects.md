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




