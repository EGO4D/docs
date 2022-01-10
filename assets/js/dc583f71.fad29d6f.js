"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:6},s="Social Interactions",l={unversionedId:"benchmarks/Social",id:"benchmarks/Social",isDocsHomePage:!1,title:"Social Interactions",description:"Benchmark Repo//github.com/EGO4D/social",source:"@site/docs/benchmarks/Social.md",sourceDirName:"benchmarks",slug:"/benchmarks/Social",permalink:"/docs/benchmarks/Social",editUrl:"https://https://ego4d-data.org/docs/benchmarks/Social.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"AV Diarization",permalink:"/docs/benchmarks/AV-diarization"},next:{title:"Ego4D Data Overview",permalink:"/docs/data-overview"}},d=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Task Definition",id:"task-definition",children:[],level:2},{value:"Annotations",id:"annotations",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"social-interactions"},"Social Interactions"),(0,i.kt)("p",null,"Benchmark Repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/social"},"https://github.com/EGO4D/social")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"An egocentric video provides a unique lens for studying social interactions because it captures utterances and nonverbal cues from each participant\u2019s unique view and enables embodied approaches to social understanding. Progress in egocentric social understanding could lead to more capable virtual assistants and social robots. "),(0,i.kt)("h2",{id:"task-definition"},"Task Definition"),(0,i.kt)("p",null,"Our Social benchmark focuses on multimodal understanding of conversational interactions via attention and speech. Specifically, we focus on identifying communicative acts that are directed toward the camera-wearer, as distinguished from those directed to other social partners: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Looking at me (LAM): given a video in which the faces of the social partners have been localized and identified, classify whether each visible face is looking at the camera-wearer. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Talking to me (TTM): given a video and audio segment with the same tracked faces and additional label that identifies speaker status, classify whether each visible face is talking to the camera wearer. "))),(0,i.kt)("h2",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Social annotations build on those from AV diarization. Given (1) face bounding boxes labeled with participant IDs and tracked across frames, and (2) associated active speaker annotations that identify in each frame whether the social partners whose faces are visible are speaking, annotators provide the ground truth labels for LAM and TTM as a binary label for each face in each frame. For LAM, annotators label the time segment (start and end time) of a visible person when the individual is looking at the camera wearer. For TTM, we use the vocal activity annotation from AVD, then identify the time segment when the speech is directed at the camera wearer."))}p.isMDXComponent=!0}}]);