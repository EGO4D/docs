---
sidebar_position: 5
---

# AV Diarization

## Motivation

People communicate using spoken language, making the capture of conversational content in business meetings and social settings a problem of great scientific and practical interest. While diarization has been a standard problem in the speech recognition community, Ego4D brings in two new aspects (1) simultaneous capture of video and audio (2) the egocentric perspective of a participant in the conversation.

## Task Definition

The Audio-Visual Diarization (AVD) benchmark is composed of four tasks: 

1. Localization and tracking of the participants in the field of view: A bounding box is annotated around each participant's faces. 

2. Active speaker detection where each tracked speaker is assigned an anonymous label, including the camera-wearer who never appears in the visual field of view. 

3. Diarization of each speaker’s speech activity, where we provide time segments corresponding to each speaker's voice activity in a clip. 

4. Transcription of each speakers speech content (only English speakers are considered for this version) 





