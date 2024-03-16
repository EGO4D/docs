"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="FHO Overview",s={unversionedId:"tutorials/FHO_Overview",id:"tutorials/FHO_Overview",title:"FHO Overview",description:"Introduction",source:"@site/docs/tutorials/FHO_Overview.md",sourceDirName:"tutorials",slug:"/tutorials/FHO_Overview",permalink:"/docs/tutorials/FHO_Overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Social Interactions",permalink:"/docs/benchmarks/social"},next:{title:"CLI Tool",permalink:"/docs/CLI"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"The Data",id:"the-data",level:2},{value:"How FHO was Annotated",id:"how-fho-was-annotated",level:3},{value:"Main JSON file",id:"main-json-file",level:3},{value:"Taxonomy",id:"taxonomy",level:3},{value:"Statistics",id:"statistics",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fho-overview"},"FHO Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The purpose of this document is to give a high-level overview of the Forecasting Hands and Object (FHO) annotations. This serves as documentation for the task and will cover: the purpose of the annotations, how FHO was annotated, the annotation data and related information (such as taxonomy), changes and additions to the data and finally the related benchmarks/challenges constructed from the annotation data."),(0,o.kt)("p",null,"Forecasting Hands and Object are annotated human/object interactions on top of the Ego4D dataset. These annotations describe what interaction occurred (if any), when the interaction occurred (relative to time), where the interaction occurred (via bounding boxes) and the result of the interaction (state change transition). The main objective of FHO data is to support the study of algorithms able to understand hands-object interactions and predict human intent in both the present and future ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.07058"},"1"),"."),(0,o.kt)("h2",{id:"the-data"},"The Data"),(0,o.kt)("p",null,"We refer to V1 as the data originally released with the ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.07058"},"EGO4D paper"),", while V2 refers to an update of the dataset which was announced on the forum."),(0,o.kt)("h3",{id:"how-fho-was-annotated"},"How FHO was Annotated"),(0,o.kt)("p",null,"There are two (three in V1) annotation stages for the FHO annotation pipeline. You can read a more detailed description of this in the annotation guidelines. At a high-level these steps are:\nFor a clip where we think a human/object interaction occurs: ask annotators to mark critical frames. Annotators may reject the clip if there is no interaction or if the object of change is not visible\nAnnotate bounding boxes on these critical frames\nIn V1, this is split into two separate annotation tasks. In V2, this was redesigned to be one annotation task due to quality issues occurring in the V1 design."),(0,o.kt)("p",null,'The open question above is: where are human/object interactions? This is answered by sampling the videos using the narrations. Narrations are covered for each video and a subset of them are prefixed with "#C" if a camera wearer is performing an action. This subset of narrations may or may not correspond to a human object interaction. For example, the narration could be "#C C cuts the carrot stem" or "#C walks across the street" in the former case there is a human/object interaction and in the latter there is no human/object interaction (this clip would be rejected by annotators).'),(0,o.kt)("p",null,"FHO is not annotated for every narration starting with #C across the database due to constraints on time and budget. Instead, we sample a subset of the videos, these are sampled uniformly (randomly) across each university in 5 minute intervals over a specific set of scenarios."),(0,o.kt)("h3",{id:"main-json-file"},"Main JSON file"),(0,o.kt)("p",null,'As of V2 of the dataset, there is a main JSON file containing the above annotations with associated narrations. From this main JSON file, we derive a variety of different benchmark tasks. You can see a description of them below (under "Derived Benchmark Tasks and Challenges") or in the Ego4D paper.'),(0,o.kt)("p",null,"The test has their narrations and annotations redacted."),(0,o.kt)("h3",{id:"taxonomy"},"Taxonomy"),(0,o.kt)("p",null,"There are multiple taxonomies for FHO and each of its benchmark tasks. At the top-level we have the taxonomy the annotators used, from here we refined the taxonomy by merging some nouns/verbs together, and finally for some derived benchmark tasks the taxonomy is further filtered or clustered."),(0,o.kt)("p",null,'You can find the taxonomy the annotators used and the taxonomy mapping in the "fho_main_taxonomy.json" file.'),(0,o.kt)("p",null,'As mentioned above, when exporting the main JSON file, we perform some additional clustering of nouns and verbs. Annotators have the option to annotate a noun or verb as "OTHER" and have a textual description. Due to this, we have a language model that attempts to map from this textual description to the noun or verb. The original noun and verb the annotator annotated is in the field prefixed with underscores.'),(0,o.kt)("h3",{id:"statistics"},"Statistics"),(0,o.kt)("p",null,"As it stands, we have in the train & val splits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"# nouns = 508"),' (not including nouns not in taxonomy; "unstructured" nouns)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"# verbs = 119"),' (not including verbs not in taxonomy; "unstructured" verbs)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"# unique object instances")," = 348,267",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"NOTE: this does consider tracking the same object over multiple annotation points / the entire video"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"# ground truth bounding boxes")," = 1,975,137")))}u.isMDXComponent=!0}}]);