---
sidebar_position: 10
---
# Ego4D Challenge 2023


## Overview


In CVPR 2023, we will host **14** challenges including 2 new challenges (EgoTracks & PACO Zero-Shot), representing each of Ego4D’s five benchmarks. These are:


### [Episodic memory](./benchmarks/episodic-memory.md):


* [Visual queries with 2D localization (VQ2D)](https://eval.ai/web/challenges/challenge-page/1843/overview) and [Visual Queries 3D localization (VQ3D)](https://eval.ai/web/challenges/challenge-page/1646/overview): Given an egocentric video clip and an image crop depicting the query object, return the most recent occurrence of the object in the input video, in terms of contiguous bounding boxes (2D + temporal localization) or the 3D displacement vector from the camera to the object in the environment. 
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1vtVOQzLarBCspQjH5RtHZ8qzH0VZxrmZ?usp=sharing)
* [Natural language queries (NLQ)](https://eval.ai/web/challenges/challenge-page/1629/overview): Given a video clip and a query expressed in natural language, localize the temporal window within all the video history where the answer to the question is evident.
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1S1LTplak-Fno3lMumCLoIfzYsx_TfNes?usp=sharing)
* [Moments queries (MQ)](https://eval.ai/web/challenges/challenge-page/1626/overview): Given an egocentric video and an activity name (e.g., a “moment”), localize all instances of that activity in the past video
* [EgoTracks](https://eval.ai/web/challenges/challenge-page/1969/overview): Given an egocentric video and a visual template of an object, localize the bounding box containing the object in each frame of the video along with a confidence score representing the presence of the object. **[NEW for 2023]**
* [EgoObjects Parts & Attributes Queries:](https://eval.ai/web/challenges/challenge-page/1970/overview) Retrieve the bounding box of a specific object instance from a dataset, based on a textual query describing the instance. Query is composed using object and part attributes describing the object of interest. **[NEW for 2023]**
 
### [Hands and Objects](./benchmarks/hands-and-objects.md):


* [Temporal localization](https://eval.ai/web/challenges/challenge-page/1622/overview): Given an egocentric video clip, localize temporally the key frames that indicate an object state change.
* [Object state change classification](https://eval.ai/web/challenges/challenge-page/1627/overview): Given an egocentric video clip, indicate the presence or absence of an object state change.


### [Audio-Visual Diarization](./benchmarks/av-diarization.md):
* [Audio-visual speaker diarization](https://eval.ai/web/challenges/challenge-page/1640/overview): Given an egocentric video clip, identify which person spoke and when they spoke.
* [Speech transcription](https://eval.ai/web/challenges/challenge-page/1637/overview): Given an egocentric video clip, transcribe the speech of each person.


### [Social Understanding](./benchmarks/social.md):


* [Talking to me](https://eval.ai/web/challenges/challenge-page/1625/overview): Given an egocentric video clip, identify whether someone in the scene is talking to the camera wearer.
* [Looking at me](https://eval.ai/web/challenges/challenge-page/1624/overview): Given an egocentric video clip, identify whether someone in the scene is looking at the camera wearer.


### [Forecasting](./benchmarks/forecasting.md):


* [Short-term hand object prediction](https://eval.ai/web/challenges/challenge-page/1623/overview): Given a video clip, predict the next active objects, and, for each of them, predict the next action, and the time to contact.
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1Ok_6F1O6K8kX1S4sEnU62HoOBw_CPngR?usp=sharing)
* [Long-term activity prediction](https://eval.ai/web/challenges/challenge-page/1598/overview): Given a video clip, the goal is to predict what sequence of activities will happen in the future. For example, after kneading dough, list the actions that the baker will do next. 


Other Ego4D challenges which are not part of CVPR 2023 workshop remain open on EvalAI website for submissions but are not eligible for prizes.


<!-- ### Privacy:


* Beyond these challenges, we will launch a privacy-oriented challenge in the coming weeks, specifically calling for novel and impactful plans using annotations and data from the Ego4D AV and Social benchmarks for privacy-preserving research.  -->


## Dataset


Ego4D challenge participants will use Ego4D’s annotated data set of more than 3,670 hours of video data, capturing the daily-life scenarios of more than 900 unique individuals from nine different countries around the world. Unique train, validation and unannotated test sets are available to download per challenge at [https://ego4d-data.org/docs/](https://ego4d-data.org/docs/).


This year's challenge will use Ego4D v2.0 which contains ~2X train and val annotations for Forecasting, Hands & Objects and NLQ, a number of corrections and usability enhancements, and two new related dataset enhancements (PACO & EgoTracks). The test set remains the same as previous versions of the challenge. More details can be found [here](https://ego4d-data.org/docs/updates/). We have also updated the baselines for NLQ, MQ, VQ2D and forecasting tasks leveraging more training data available in Ego4D v2.0 release. 


## Participation Guidelines


Participate in the contest by registering on the [EvalAI challenge page](https://eval.ai/) and create a team. All participants must register as a part of a “participating team” on EvalAI to ensure the submission limits are honored. Participants will upload their predictions in the format specified for the specific challenge, and will be evaluated on AWS instances by comparing to ground truth predictions. Instructions for training, local evaluation, and online submission are provided at EvalAI. Please refer to the individual EvalAI pages for each challenge for submission guidelines, task specifications, and evaluation criteria.


## Dates


The challenge will launch on March 1, 2023 with the leaderboard closing on May 19, 2023. Winners will be announced at the [Joint International 3rd Ego4D and 11th EPIC Workshop](https://sites.google.com/view/ego4d-epic-cvpr2023-workshop/) at CVPR 2023. Top performing teams may be invited to speak at the workshop.




## Competition Rules and Prize Information


Competition rules can be found [here](https://ego4d-interactive-fig1.s3.eu-west-2.amazonaws.com/tc.pdf). Additionally, we are thrilled that FAIR is able to offer the following prize thresholds per challenges:


* First place: $1500
* Second place: $1000
* Third place: $500


## Challenge Reports


In addition to the submission on EvalAI, participants must submit a report describing their method to the workshop CMT (link TBD). In addition to your method and results, please remember to include examples of positive and negative results (limitations) of your model. These validation reports will be evaluated by challenge hosts from the Ego4D consortium before winner determination can be made. Similarly, challenge validation reports, research code from winning entries, and names of participants from the winning teams for all successful submissions must be shared publicly with the research community.   


## Acknowledgements


The Ego4D challenge would not have been possible without the infrastructure and support of the [EvalAI team](https://eval.ai/team). Thank you!


### Organizers


- **Suyog Jain**
- **Rohit Girdhar**
- **Andrew Westbury**
- Santhosh Kumar Ramakrishnan
- Chen Zhao
- Merey Ramazanova
- Satwik Kottur
- Mengmeng Xu
- Vincent Cartillier 
- Yifei Huang
- Qichen Fu
- Siddhant Bansal
- Hao Jiang
- Vamsi Ithapu
- Jachym Kolar
- Christian Fuegen
- Leda Sari
- Eric Zhongcong Xu 
- Zachary Chavis 
- Wenqi Jia
- Miao Liu
- Antonino Furnari
- Francesco Ragusa 
- Tushar Nagarajan
- Dima Damen
- Giovanni Maria Farinella
- Michael Wray
- Hao Tang
- Kevin Liang
- Weiyao Wang
- Vladan Petrovic
- Anmol Kalia
- Vignesh Ramanathan
- Dhruv Mahajan
- Gene Byrne
- Matt Feiszli
- Kristen Grauman




## Past Challenges / Winners
**[ECCV Workshop 2022](https://ego4d-data.org/workshops/eccv22/)** (Oct 24, 2022)


**[CVPR Workshop 2022](https://ego4d-data.org/workshops/cvpr22/)** (June 19, 2022)


[Colab Badge]:          https://colab.research.google.com/assets/colab-badge.svg




<!-- ### Not running:
* [State change object detection](https://eval.ai/web/challenges/challenge-page/1632/overview): Given an egocentric video clip, identify the objects whose states are changing and outline them with bounding boxes.


* [Audio-visual localization](https://eval.ai/web/challenges/challenge-page/1633/overview): Given an egocentric video clip, localize the speakers in the visual field of view.


* [Audio-only Diarization Challenge](https://eval.ai/web/challenges/challenge-page/1641/overview): Given an egocentric video clip, identify which person spoke and when they spoke based on audio alone.


* [Hand forecasting](https://eval.ai/web/challenges/challenge-page/1630/overview): Given a short preceding video clip, predict where the hand will be visible in the future, in terms of a bounding box center in keyframes.


-->



