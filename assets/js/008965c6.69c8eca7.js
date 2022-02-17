"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[536],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="Forecasting",p={unversionedId:"benchmarks/forecasting",id:"benchmarks/forecasting",isDocsHomePage:!1,title:"Forecasting",description:"Benchmark Repo//github.com/EGO4D/forecasting",source:"@site/docs/benchmarks/forecasting.md",sourceDirName:"benchmarks",slug:"/benchmarks/forecasting",permalink:"/docs/benchmarks/forecasting",editUrl:"https://https://ego4d-data.org/docs/benchmarks/forecasting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Episodic Memory",permalink:"/docs/benchmarks/episodic-memory"},next:{title:"Hand & Object Interactions",permalink:"/docs/benchmarks/hands-and-objects"}},u=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Task Definition",id:"task-definition",children:[],level:2},{value:"Annotations",id:"annotations",children:[],level:2}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forecasting"},"Forecasting"),(0,a.kt)("p",null,"Benchmark Repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/forecasting"},"https://github.com/EGO4D/forecasting")),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Forecasting movements and interactions requires comprehending the camera wearer\u2019s intention. It has immediate applications in AR and human-robot interaction, such as anticipatively turning on appliances or moving objects for the human\u2019s convenience."),(0,a.kt)("h2",{id:"task-definition"},"Task Definition"),(0,a.kt)("p",null,"The Forecasting benchmark includes four tasks: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locomotion prediction: predict a set of possible future ground plane trajectories of the camera wearer. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Hand movement prediction: predict the hand positions of the camera wearer in future frames.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Short-term object interaction anticipation: detect a set of possible future interacted objects in the most recent frame of the clip. To each object, assign a verb indicating the possible future interaction and a \u201ctime to contact\u201d estimate of when the interaction is going to begin. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Long-term action anticipation: predict the camera wearer\u2019s future sequence of actions."))),(0,a.kt)("h2",{id:"annotations"},"Annotations"),(0,a.kt)("p",null,"Using the narrations, we identify the occurrence of each object interaction, assigning a verb and a target object class. The verb and noun taxonomies are seeded from the narrations and then hand-refined. For each action, we identify a contact frame and a precondition frame in which we annotate bounding boxes around active objects. The same objects as well as hands are annotated in three frames preceding the pre-condition frame by 0.5s, 1s and 1.5s. We obtain ground truth ego-trajectories of the camera wearer using structure from motion."))}m.isMDXComponent=!0}}]);