"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},N="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=m(e,["components","mdxType","originalType","parentName"]),N=o(a),g=r,u=N["".concat(p,".").concat(g)]||N[g]||s[g]||i;return a?n.createElement(u,l(l({ref:t},k),{},{components:a})):n.createElement(u,l({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[N]="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Hand & Object Interactions",m={unversionedId:"benchmarks/hands-and-objects",id:"benchmarks/hands-and-objects",title:"Hand & Object Interactions",description:"Benchmark Repo//github.com/EGO4D/hands-and-objects",source:"@site/docs/benchmarks/hands-and-objects.md",sourceDirName:"benchmarks",slug:"/benchmarks/hands-and-objects",permalink:"/docs/benchmarks/hands-and-objects",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Forecasting",permalink:"/docs/benchmarks/forecasting"},next:{title:"AV Diarization",permalink:"/docs/benchmarks/av-diarization"}},p={},o=[{value:"Motivation",id:"motivation",level:2},{value:"Task Definition",id:"task-definition",level:2},{value:"Annotations",id:"annotations",level:2}],k={toc:o},N="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hand--object-interactions"},"Hand & Object Interactions"),(0,r.kt)("p",null,"Benchmark Repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/hands-and-objects"},"https://github.com/EGO4D/hands-and-objects")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"While Episodic Memory aims to make past video queryable, Hands & Objects aims to understand the camera-wearers present activity \u2013 in terms of interactions with objects. Specifically, the Hands & Objects benchmark captures how the camera-wearer changes the state of an object by using or manipulating it \u2013 which we call an object state change. Though cutting a piece of lumber in half can be achieved through many methods (e.g., various tools, force, speeds, grasps, end effectors), all should be recognized as the same state change."),(0,r.kt)("h2",{id:"task-definition"},"Task Definition"),(0,r.kt)("p",null,"Object state changes can be viewed along temporal, spatial, and semantic axes, leading to these three tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Point-of-no-return temporal localization: given a short video clip of a state change, the goal is to estimate the keyframe that contains the point-of\u2013no-return (PNR) (the time at which a state change begins)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"State change object detection: given three temporal frames (pre, post, PNR), the goal is to regress the bounding box of the object undergoing a state change")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Object state change classification: Given a short video clip, the goal is to classify whether an object state change has taken place or not"))),(0,r.kt)("h2",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"We select the data to annotate based on activities that are likely to involve hand-object interactions (e.g., knitting, carpentry, baking, etc.). We start by labeling each narrated hand-object interaction. For each, we label three moments in time (pre, PNR, post) and the bounding boxes for the hands, tools, and objects in each of the three frames. We also annotate the state change types (remove, burn, etc.), action verbs, and nouns for the objects."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Point-of-no-Return Temporal Localization - fho_hands_<set>.json schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"manifest"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_id"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frames"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_clip_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_clip_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_clip_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"action_clip_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_45"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_30"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_15"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"post_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pnr_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"contact_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boxes"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"left_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"right_hand"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))))))))))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"State Change Object Detection - fho_scod_<set>.json schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_parent_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_parent_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_parent_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_parent_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pre_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"object_type"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"structured_noun"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"instance_number"))," ",(0,r.kt)("em",{parentName:"li"},"(","['integer', 'null']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pnr_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"object_type"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"structured_noun"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"instance_number"))," ",(0,r.kt)("em",{parentName:"li"},"(","['integer', 'null']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"post_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_frame_number"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(array)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"object_type"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"structured_noun"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"instance_number"))," ",(0,r.kt)("em",{parentName:"li"},"(","['integer', 'null']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bbox"))," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"x"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"y"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"width"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"height"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")))))))))))))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Object State Change Classification (Point of No Return) - fho_oscc-pnr_<set>.json schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"split"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clips"))," ",(0,r.kt)("em",{parentName:"li"},"(array)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items")," ",(0,r.kt)("em",{parentName:"li"},"(object)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(","['null', 'string']",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"unique_id"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"video_uid"))," ",(0,r.kt)("em",{parentName:"li"},"(string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent_start_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent_end_sec"))," ",(0,r.kt)("em",{parentName:"li"},"(number)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent_start_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent_end_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"state_change"))," ",(0,r.kt)("em",{parentName:"li"},"(boolean)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"clip_pnr_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"parent_pnr_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(integer)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pnr_frame"))," ",(0,r.kt)("em",{parentName:"li"},"(null)")))))))}s.isMDXComponent=!0}}]);