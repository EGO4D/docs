"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),s=p(a),g=r,u=s["".concat(o,".").concat(g)]||s[g]||N[g]||i;return a?n.createElement(u,l(l({ref:t},k),{},{components:a})):n.createElement(u,l({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[s]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},l="Social Interactions",m={unversionedId:"benchmarks/social",id:"benchmarks/social",title:"Social Interactions",description:"Benchmark Repo//github.com/EGO4D/social-interactions",source:"@site/docs/benchmarks/social.md",sourceDirName:"benchmarks",slug:"/benchmarks/social",permalink:"/docs/benchmarks/social",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"AV Diarization",permalink:"/docs/benchmarks/av-diarization"},next:{title:"CLI Tool",permalink:"/docs/CLI"}},o={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Task Definition",id:"task-definition",level:2},{value:"Annotations",id:"annotations",level:2}],k={toc:p},s="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"social-interactions"},"Social Interactions"),(0,r.kt)("p",null,"Benchmark Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/social-interactions"},"https://github.com/EGO4D/social-interactions")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"An egocentric video provides a unique lens for studying social interactions because it captures utterances and nonverbal cues from each participant\u2019s unique view and enables embodied approaches to social understanding. Progress in egocentric social understanding could lead to more capable virtual assistants and social robots."),(0,r.kt)("h2",{id:"task-definition"},"Task Definition"),(0,r.kt)("p",null,"Our Social benchmark focuses on multimodal understanding of conversational interactions via attention and speech. Specifically, we focus on identifying communicative acts that are directed toward the camera-wearer, as distinguished from those directed to other social partners:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Looking at me (LAM): given a video in which the faces of the social partners have been localized and identified, classify whether each visible face is looking at the camera-wearer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Talking to me (TTM): given a video and audio segment with the same tracked faces and additional label that identifies speaker status, classify whether each visible face is talking to the camera wearer."))),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"Social annotations build on those from AV diarization. Given (1) face bounding boxes labeled with participant IDs and tracked across frames, and (2) associated active speaker annotations that identify in each frame whether the social partners whose faces are visible are speaking, annotators provide the ground truth labels for LAM and TTM as a binary label for each face in each frame. For LAM, annotators label the time segment (start and end time) of a visible person when the individual is looking at the camera wearer. For TTM, we use the vocal activity annotation from AVD, then identify the time segment when the speech is directed at the camera wearer."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Audio-Visual Diarization - av_<set>.json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"videos"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"source_clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"valid"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,r.kt)("em",{parentName:"li"},"(array)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"persons"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"track_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"track"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(null)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"suspect"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"unmapped_frames_count"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"unmapped_frames"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(integer)")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"missing_voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"transcriptions"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"transcription"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"social_segments_talking"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"social_segments_looking"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,r.kt)("em",{parentName:"li"},"(null)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")))))))))))))))))}N.isMDXComponent=!0}}]);