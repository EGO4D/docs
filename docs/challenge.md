---
sidebar_position: 9
---

# Ego4D Challenge 2022

## Overview

In 2022, we will host 16 challenges, representing each of Ego4D’s five benchmarks. These are: 

### [Episodic memory](./benchmarks/episodic-memory.md):

* [Visual queries with 2D localization](https://eval.ai/web/challenges/challenge-page/1619/overview) and [VQ 3D localization](https://eval.ai/web/challenges/challenge-page/1646/overview): Given an egocentric video clip and an image crop depicting the query object, return the last time the object was seen in the input video, in terms of the tracked bounding box (2D + temporal localization) or the 3D displacement vector from the camera to the object in the environment. 
* [Natural language queries](https://eval.ai/web/challenges/challenge-page/1629/overview): Given a video clip and a query expressed in natural language, localize the temporal window within all the video history where the answer to the question is evident.   
* [Moments queries](https://eval.ai/web/challenges/challenge-page/1626/overview): Given an egocentric video and an activity name (e.g., a “moment”), localize all instances of that activity in the past video 

   

### [Hands and Objects](./benchmarks/hands-and-objects.md): 

* [Temporal localization](https://eval.ai/web/challenges/challenge-page/1622/overview): Given an egocentric video clip, localize temporally the key frames that indicate an object state change.
* [Object state change classification](https://eval.ai/web/challenges/challenge-page/1627/overview): Given an egocentric video clip, indicate the presence or absence of an object state change.
* [State change object detection](https://eval.ai/web/challenges/challenge-page/1632/overview): Given an egocentric video clip, identify the objects whose states are changing and outline them with bounding boxes. 

### [Audio-Visual Diarization & Social](./benchmarks/av-diarization.md):

* [Audio-visual localization](https://eval.ai/web/challenges/challenge-page/1633/overview): Given an egocentric video clip, localize the speakers in the visual field of view. 
* [Audio-visual speaker diarization](https://eval.ai/web/challenges/challenge-page/1640/overview): Given an egocentric video clip, identify which person spoke and when they spoke.
* [Audio-only Diarization Challenge](https://eval.ai/web/challenges/challenge-page/1641/overview): Given an egocentric video clip, identify which person spoke and when they spoke based on audio alone.
* [Speech transcription](https://eval.ai/web/challenges/challenge-page/1637/overview): Given an egocentric video clip, transcribe the speech of each person.
* [Talking to me](https://eval.ai/web/challenges/challenge-page/1625/overview): Given an egocentric video clip, identify whether someone in the scene is talking to the camera wearer.
* [Looking at me](https://eval.ai/web/challenges/challenge-page/1624/overview): Given an egocentric video clip, identify whether someone in the scene is looking at the camera wearer.

### [Forecasting](./benchmarks/forecasting.md): 

* **Locomotion forecasting**: Given a video frame and the past trajectory, predict the future ego positions of the camera wearer (in the form of a 3D trajectory).
* [Hand forecasting](https://eval.ai/web/challenges/challenge-page/1630/overview): Given a short preceding video clip, predict where the hand will be visible in the future, in terms of a bounding box center in keyframes.  
* [Short-term hand object prediction](https://eval.ai/web/challenges/challenge-page/1623/overview): Given a video clip, predict the next active objects, the next action, and the time to contact. 
* [Long-term activity prediction](https://eval.ai/web/challenges/challenge-page/1598/overview): Given a video clip, the goal is to predict what sequence of activities will happen in the future? For example, after kneading dough, what will the baker do next?  

<!-- ### Privacy: 

* Beyond these challenges, we will launch a privacy-oriented challenge in the coming weeks, specifically calling for novel and impactful plans using annotations and data from the Ego4D AV and Social benchmarks for privacy-preserving research.  -->

## Dataset 

Ego4D challenge participants will use Ego4D’s annotated data set of more than 3,670 hours of video data, capturing the daily-life scenarios of more than 900 unique individuals from nine different countries around the world. Unique train, validation and unannotated test sets are available to download per challenge at [https://ego4d-data.org/docs/](https://ego4d-data.org/docs/). 

## Participation Guidelines

Participate in the contest by registering on the [EvalAI challenge page](https://eval.ai/) and create a team. All participants must register as a part of a “participating team” on EvalAI to ensure the submission limits are honored. Participants will upload their predictions in the format specified for the specific challenge, and will be evaluated on AWS instance by comparing to ground truth predictions. Instructions for training, local evaluation, and online submission are provided at EvalAI. Please refer to the individual EvalAI pages for each challenge for submission guidelines, task specifications, and evaluation criteria.

## Dates 

Top performing teams will be invited to speak at our accepted CVPR and ECCV workshops in June and October, with the specific competition tracks below concluding respectively at these times. 

**June 1, 2022 ([CVPR Workshop](https://ego4d-data.org/Workshop/CVPR22/#organisers), phase 1)**

* Visual Queries
* Natural Language Queries
* PNR Temporal Localization
* Object State Change Classification
* Short-term Object Interaction Anticipation
* Long-term Action Anticipation

**October 1, 2022 ([ECCV Workshop](https://ego4d-data.org/Workshop/ECCV22/), phase 2)**

* Moments Queries 
* 3D Localization 
* State Change Object Detection 
* Localization and Tracking 
* Diarization (Audio)
* Diarization (Audio+Video)
* Transcription 
* Looking at Me
* Talking to Me
* Future Hand Prediction

## Competition Rules and Prize Information

Competition rules can be found [here](https://ego4d-interactive-fig1.s3.eu-west-2.amazonaws.com/tc.pdf). Additionally, we are thrilled that FAIR is able to offer the following prize thresholds per challenges: 

* First place: $3,000 
* Second place: $2,000
* Third place: $1,000

## Challenge Reports

In addition to the submission on EvalAI, participants must submit a report describing their method to the workshop CMT (link TBD). In addition to your method and results, please remember to include examples of positive and negative results (limitations) of your model.

For CVPR'22 challenges due June 1, the deadline for report submission will be June 6.

## Acknowledgements

The Ego4D challenge would not have been possible without the infrastructure and support of the [EvalAI team](https://eval.ai/team). Thank you! 

### Organizers

**Rohit Girdhar**

Santhosh Kumar Ramakrishnan	

Chen Zhao

Merey Ramazanova

Satwik Kottur	

Mengmeng Xu

Vincent Cartillier	

Yifei Huang	

Qichen Fu	

Siddhant Bansal	

Hao Jiang	

Vamsi Ithapu

Jachym Kolar

Christian Fuegen,

Leda Sari

Eric Zhongcong Xu	 

Yunyi Zhu  

Murong Ma 

Zachary Chavis	

Wenqi Jia

Miao Liu

Antonino Furnari	

Tushar Nagarajan

Karttikeya Mangalam 

Dima Damen

Giovanni Maria Farinella

Michael Wray

Gene Byrne

Andrew Westbury

