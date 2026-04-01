---
sidebar_position: 10
---
# Ego4D and EgoExo4D Challenge 2026

## **Overview**

At [EgoVis](https://egovis.github.io/cvpr26/) workshop during CVPR 2026, we will host **5** challenges representing Ego4D and EgoExo4D benchmarks. This year we will have **3** challenges from Ego4D and **2** challenges from EgoExo4D dataset. Please find details below on the challenges:

## **Ego4D challenges**


### [Episodic memory](./benchmarks/episodic-memory.md):

* [Natural language queries (NLQ)](https://www.codabench.org/competitions/15262/): Given a video clip and a query expressed in natural language, localize the temporal window within all the video history where the answer to the question is evident.
* [Goal Step](https://www.codabench.org/competitions/14878/): Given an untrimmed egocentric video, identify the temporal action segment corresponding to a natural language description of the step. Specifically, predict the (start_time, end_time) for a given keystep description.


### [Forecasting](./benchmarks/forecasting.md):

* [Short Term object interaction anticipation](https://www.codabench.org/competitions/14477/): Given a video clip, predict the next active objects, and, for each of them, predict the next action, and the time to contact.

Other Ego4D challenges which are not part of CVPR 2026 will soon be available on CodaBench. We are undergoing a transition from EvalAI to CodaBench hence we are running a reduced set of challenges this year.

## **EgoExo4D challenges**

Ego-Exo4D is a diverse, large-scale multi-modal multi view video dataset and benchmark challenge. Ego-Exo4D centers around simultaneously-captured ego-centric and exocentric video of skilled human activities (e.g., sports, music, dance, bike repair). 

Here are the specific challenge tracks we will host at [EgoVis workshop](https://egovis.github.io/cvpr26/) during CVPR 2026.

### EgoPose Benchmark

* Ego-Pose Body: Given an egocentric video, estimate the 3D body pose of the camera-wearer. Specifically, predict the 3D position of the 17 annotated body joints for each frame. [[github]](https://github.com/EGO4D/ego-exo4d-egopose/tree/main/bodypose) [[tutorials]](https://docs.ego-exo4d-data.org/tutorials/)

### Keystep Benchmark
* [Procedure Understanding](https://www.codabench.org/competitions/14725/): The objective of this task is to infer a procedure's underlying structure from observing natural videos of subjects performing the procedure. [[github]](https://github.com/EGO4D/ego-exo4d-keystep/tree/main/procedure_understanding)

Other EgoExo4D challenges which are not part of CVPR 2026 will soon be available on CodaBench. We are undergoing a transition from EvalAI to CodaBench hence we are running a reduced set of challenges this year.


## Dataset

Ego4D challenge participants will use Ego4D’s annotated data set of more than 3,670 hours of video data, capturing the daily-life scenarios of more than 900 unique individuals from nine different countries around the world. Unique train, validation and unannotated test sets are available to download per challenge at [https://ego4d-data.org/docs/](https://ego4d-data.org/docs/). This year's challenge we will continue to use Ego4D v2.0 which contains ~2X train and val annotations for Forecasting, Hands & Objects and NLQ, a number of corrections and usability enhancements, and two new related dataset enhancements (Ego Schema and Goal Step). The test set remains the same as previous versions of the challenge. More details can be found [here](https://ego4d-data.org/docs/updates/). 


EgoExo4D challenge participants will be using EgoExo4D dataset for these challenges. Please find the [documentation](https://docs.ego-exo4d-data.org/) here about the dataset.


## Participation Guidelines


Participate in the contest by registering on the [CodaBench challenge page](https://www.codabench.org/). Participants will upload their predictions in the format specified for the specific challenge, and will be evaluated by comparing to ground truth predictions. Instructions for online submission are provided at CodaBench. Please refer to the individual CodaBench pages for each challenge for submission guidelines, task specifications, and evaluation criteria.


## Dates


* Ego4D challenges will launch on **March 15, 2026** with the leaderboard closing on **May 13, 2026**. 
* EgoExo4D challenges will launch on **March 15, 2026** with the leaderboard closing on **May 13, 2026**. 
* Winners for both will be announced at the [Third Joint Egocentric Vision Workshop](https://egovis.github.io/cvpr26/) at CVPR 2026. 


## Competition Rules

Competition rules can be found [here](pathname:///tc.pdf).


## Challenge Reports


In addition to the submission on CodaBench, participants must submit a report describing their method to the workshop CMT [link](https://cmt3.research.microsoft.com/EgoVis2026/). In addition to your method and results, please remember to include examples of positive and negative results (limitations) of your model. These validation reports will be evaluated by challenge hosts from the Ego4D consortium before winner determination can be made. Similarly, challenge validation reports, research code from winning entries, and names of participants from the winning teams for all successful submissions must be shared publicly with the research community.  More details can be found on the [EgoVis workshop page](https://egovis.github.io/cvpr26/). 


## Acknowledgements


The Ego4D and EgoExo4D challenges would not have been possible without the infrastructure and support of the [CodaBench team](https://www.codabench.org/). Thank you!


### Organizers

- **Suyog Jain**
- **Andrew Westbury**
- Xizi Wang
- Chen Zhao
- Merey Ramazanova
- Francesco Ragusa
- Seminara Luigi 
- Tushar Nagarajan
- Karttikeya Mangalam
- Raiymbek Akshulakov
- Sherry Xue 
- Jinxu Zhang
- Shan Shu
- Gabriel Pérez Santamaria
- Juanita Puentes
- Maria Camila Escobar Palomeque
- Arjun Somayazulu
- Sanjay Haresh
- Yale Song
- Antonino Furnari
- Manolis Savva
- Giovanni Maria Farinella
- Pablo Arbelaez
- Jianbo Shi
- Kristen Grauman


## Past Challenges / Winners
**[CVPR Workshop 2025](https://egovis.github.io/cvpr25/)** (June 2025)

**[CVPR Workshop 2024](https://egovis.github.io/cvpr24/)** (June 17, 2024)

**[CVPR Workshop 2023](https://ego4d-data.org/workshops/cvpr23/  )** (June 19, 2023)

**[ECCV Workshop 2022](https://ego4d-data.org/workshops/eccv22/)** (Oct 24, 2022)

**[CVPR Workshop 2022](https://ego4d-data.org/workshops/cvpr22/)** (June 19, 2022)


[Colab Badge]:          https://colab.research.google.com/assets/colab-badge.svg



<!-- ### Not running:
* [State change object detection](https://eval.ai/web/challenges/challenge-page/1632/overview): Given an egocentric video clip, identify the objects whose states are changing and outline them with bounding boxes.


* [Audio-visual localization](https://eval.ai/web/challenges/challenge-page/1633/overview): Given an egocentric video clip, localize the speakers in the visual field of view.


* [Audio-only Diarization Challenge](https://eval.ai/web/challenges/challenge-page/1641/overview): Given an egocentric video clip, identify which person spoke and when they spoke based on audio alone.


* [Hand forecasting](https://eval.ai/web/challenges/challenge-page/1630/overview): Given a short preceding video clip, predict where the hand will be visible in the future, in terms of a bounding box center in keyframes.
* [Object state change classification](https://eval.ai/web/challenges/challenge-page/1627/overview): Given an egocentric video clip, indicate the presence or absence of an object state change.
* [Audio-visual speaker diarization](https://eval.ai/web/challenges/challenge-page/1640/overview): Given an egocentric video clip, identify which person spoke and when they spoke.

* PACO Zero-Shot:](https://eval.ai/web/challenges/challenge-page/1970/overview) Retrieve the bounding box of a specific object instance from a dataset, based on a textual query describing the instance. Query is composed using object and part attributes describing the object of interest. 



Competition rules can be found [here](https://ego4d-interactive-fig1.s3.eu-west-2.amazonaws.com/tc.pdf). 
-->



