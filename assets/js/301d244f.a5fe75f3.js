"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[815],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),N=p(n),g=r,u=N["".concat(o,".").concat(g)]||N[g]||s[g]||i;return n?a.createElement(u,l(l({ref:t},k),{},{components:n})):a.createElement(u,l({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=N;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return k},default:function(){return N}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],m={sidebar_position:5},o="AV Diarization",p={unversionedId:"benchmarks/av-diarization",id:"benchmarks/av-diarization",isDocsHomePage:!1,title:"AV Diarization",description:"Benchmark Repo//github.com/EGO4D/audio-visual",source:"@site/docs/benchmarks/av-diarization.md",sourceDirName:"benchmarks",slug:"/benchmarks/av-diarization",permalink:"/docs/benchmarks/av-diarization",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hand & Object Interactions",permalink:"/docs/benchmarks/hands-and-objects"},next:{title:"Social Interactions",permalink:"/docs/benchmarks/social"}},k=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Task Definition",id:"task-definition",children:[],level:2},{value:"Annotation Schema",id:"annotation-schema",children:[],level:2}],s={toc:k};function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"av-diarization"},"AV Diarization"),(0,i.kt)("p",null,"Benchmark Repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/audio-visual"},"https://github.com/EGO4D/audio-visual")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"People communicate using spoken language, making the capture of conversational content in business meetings and social settings a problem of great scientific and practical interest. While diarization has been a standard problem in the speech recognition community, Ego4D brings in two new aspects (1) simultaneous capture of video and audio (2) the egocentric perspective of a participant in the conversation."),(0,i.kt)("h2",{id:"task-definition"},"Task Definition"),(0,i.kt)("p",null,"The Audio-Visual Diarization (AVD) benchmark is composed of four tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Localization and tracking of the participants in the field of view: A bounding box is annotated around each participant's faces.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Active speaker detection where each tracked speaker is assigned an anonymous label, including the camera-wearer who never appears in the visual field of view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Diarization of each speaker\u2019s speech activity, where we provide time segments corresponding to each speaker's voice activity in a clip.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Transcription of each speakers speech content (only English speakers are considered for this version)"))),(0,i.kt)("h2",{id:"annotation-schema"},"Annotation Schema"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Audio-Visual Diarization - av_<set>.json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"videos"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"source_clip_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_start_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_end_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"valid"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"persons"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_wearer"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tracking_paths"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"track_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"track"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(null)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"suspect"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"unmapped_frames_count"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"unmapped_frames"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(integer)")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"missing_voice_segments"))," ",(0,i.kt)("em",{parentName:"li"},"(array)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"transcriptions"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"transcription"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time_sec"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person_id"))," ",(0,i.kt)("em",{parentName:"li"},"(string)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"social_segments_talking"))," ",(0,i.kt)("em",{parentName:"li"},"(array)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Items")," ",(0,i.kt)("em",{parentName:"li"},"(object)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_time"))," ",(0,i.kt)("em",{parentName:"li"},"(number)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_start_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"video_end_frame"))," ",(0,i.kt)("em",{parentName:"li"},"(integer)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"person"))," ",(0,i.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"target"))," ",(0,i.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_at_me"))," ",(0,i.kt)("em",{parentName:"li"},"(boolean)")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"social_segments_looking"))))))))))))))}N.isMDXComponent=!0}}]);