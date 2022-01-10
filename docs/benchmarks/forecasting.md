---
sidebar_position: 3
---

# Forecasting

Benchmark Repo: [https://github.com/EGO4D/forecasting](https://github.com/EGO4D/forecasting)

## Motivation

Forecasting movements and interactions requires comprehending the camera wearer’s intention. It has immediate applications in AR and human-robot interaction, such as anticipatively turning on appliances or moving objects for the human’s convenience.

## Task Definition

The Forecasting benchmark includes four tasks: 

1. Locomotion prediction: predict a set of possible future ground plane trajectories of the camera wearer. 

2. Hand movement prediction: predict the hand positions of the camera wearer in future frames.

3. Short-term object interaction anticipation: detect a set of possible future interacted objects in the most recent frame of the clip. To each object, assign a verb indicating the possible future interaction and a “time to contact” estimate of when the interaction is going to begin. 

4. Long-term action anticipation: predict the camera wearer’s future sequence of actions.

## Annotations

Using the narrations, we identify the occurrence of each object interaction, assigning a verb and a target object class. The verb and noun taxonomies are seeded from the narrations and then hand-refined. For each action, we identify a contact frame and a precondition frame in which we annotate bounding boxes around active objects. The same objects as well as hands are annotated in three frames preceding the pre-condition frame by 0.5s, 1s and 1.5s. We obtain ground truth ego-trajectories of the camera wearer using structure from motion.

