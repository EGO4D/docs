"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),N=p(n),g=r,u=N["".concat(o,".").concat(g)]||N[g]||s[g]||i;return n?a.createElement(u,l(l({ref:t},k),{},{components:n})):a.createElement(u,l({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=N;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},4200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return k},default:function(){return N}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],m={sidebar_position:6},o="Social Interactions",p={unversionedId:"benchmarks/social",id:"benchmarks/social",isDocsHomePage:!1,title:"Social Interactions",description:"Benchmark Repo//github.com/EGO4D/social-interactions",source:"@site/docs/benchmarks/social.md",sourceDirName:"benchmarks",slug:"/benchmarks/social",permalink:"/docs/benchmarks/social",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"AV Diarization",permalink:"/docs/benchmarks/av-diarization"},next:{title:"Visualization Tool",permalink:"/docs/viz"}},k=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Task Definition",id:"task-definition",children:[],level:2},{value:"Annotations",id:"annotations",children:[],level:2}],s={toc:k};function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"social-interactions"},"Social Interactions"),(0,i.kt)("p",null,"Benchmark Repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/social-interactions"},"https://github.com/EGO4D/social-interactions")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"An egocentric video provides a unique lens for studying social interactions because it captures utterances and nonverbal cues from each participant\u2019s unique view and enables embodied approaches to social understanding. Progress in egocentric social understanding could lead to more capable virtual assistants and social robots."),(0,i.kt)("h2",{id:"task-definition"},"Task Definition"),(0,i.kt)("p",null,"Our Social benchmark focuses on multimodal understanding of conversational interactions via attention and speech. Specifically, we focus on identifying communicative acts that are directed toward the camera-wearer, as distinguished from those directed to other social partners:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Looking at me (LAM): given a video in which the faces of the social partners have been localized and identified, classify whether each visible face is looking at the camera-wearer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Talking to me (TTM): given a video and audio segment with the same tracked faces and additional label that identifies speaker status, classify whether each visible face is talking to the camera wearer."))),(0,i.kt)("h2",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Social annotations build on those from AV diarization. Given (1) face bounding boxes labeled with participant IDs and tracked across frames, and (2) associated active speaker annotations that identify in each frame whether the social partners whose faces are visible are speaking, annotators provide the ground truth labels for LAM and TTM as a binary label for each face in each frame. For LAM, annotators label the time segment (start and end time) of a visible person when the individual is looking at the camera wearer. For TTM, we use the vocal activity annotation from AVD, then identify the time segment when the speech is directed at the camera wearer."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Audio-Visual Diarization - av_<set>.json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"videos"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"source_clip_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_start_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_end_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"valid"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,i.kt)("em",{parentName:"li"},"(array)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"persons"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"track_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"track"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(null)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"suspect"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"unmapped_frames_count"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"unmapped_frames"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(integer)")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"missing_voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"transcriptions"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"transcription"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"social_segments_talking"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,i.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"social_segments_looking"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,i.kt)("em",{parentName:"li"},"(null)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")))))))))))))))))}N.isMDXComponent=!0}}]);