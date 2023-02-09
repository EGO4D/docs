"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},N="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),N=p(a),g=r,u=N["".concat(o,".").concat(g)]||N[g]||s[g]||i;return a?n.createElement(u,m(m({ref:t},k),{},{components:a})):n.createElement(u,m({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[N]="string"==typeof e?e:r,m[1]=l;for(var p=2;p<i;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},m="AV Diarization",l={unversionedId:"benchmarks/av-diarization",id:"benchmarks/av-diarization",title:"AV Diarization",description:"Benchmark Repo//github.com/EGO4D/audio-visual",source:"@site/docs/benchmarks/av-diarization.md",sourceDirName:"benchmarks",slug:"/benchmarks/av-diarization",permalink:"/docs/benchmarks/av-diarization",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hand & Object Interactions",permalink:"/docs/benchmarks/hands-and-objects"},next:{title:"Social Interactions",permalink:"/docs/benchmarks/social"}},o={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Task Definition",id:"task-definition",level:2},{value:"Annotation Schema",id:"annotation-schema",level:2}],k={toc:p},N="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"av-diarization"},"AV Diarization"),(0,r.kt)("p",null,"Benchmark Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/audio-visual"},"https://github.com/EGO4D/audio-visual")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"People communicate using spoken language, making the capture of conversational content in business meetings and social settings a problem of great scientific and practical interest. While diarization has been a standard problem in the speech recognition community, Ego4D brings in two new aspects (1) simultaneous capture of video and audio (2) the egocentric perspective of a participant in the conversation."),(0,r.kt)("h2",{id:"task-definition"},"Task Definition"),(0,r.kt)("p",null,"The Audio-Visual Diarization (AVD) benchmark is composed of four tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Localization and tracking of the participants in the field of view: A bounding box is annotated around each participant's faces.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Active speaker detection where each tracked speaker is assigned an anonymous label, including the camera-wearer who never appears in the visual field of view.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Diarization of each speaker\u2019s speech activity, where we provide time segments corresponding to each speaker's voice activity in a clip.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transcription of each speakers speech content (only English speakers are considered for this version)"))),(0,r.kt)("h2",{id:"annotation-schema"},"Annotation Schema"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Audio-Visual Diarization - av_<set>.json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"videos"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"source_clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"valid"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,r.kt)("em",{parentName:"li"},"(array)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"persons"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"track_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"track"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(null)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"suspect"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"unmapped_frames_count"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"unmapped_frames"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(integer)")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"missing_voice_segments"))," ",(0,r.kt)("em",{parentName:"li"},"(array)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"transcriptions"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"transcription"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"social_segments_talking"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"social_segments_looking"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,r.kt)("em",{parentName:"li"},"(null)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")))))))))))))))))}s.isMDXComponent=!0}}]);