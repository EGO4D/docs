"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[910],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(h,o(o({ref:n},d),{},{components:r})):t.createElement(h,o({ref:n},d))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9988:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={sidebar_position:1},s="Benchmarks Overview",l={unversionedId:"benchmarks/overview",id:"benchmarks/overview",isDocsHomePage:!1,title:"Benchmarks Overview",description:"Episodic Memory",source:"@site/docs/benchmarks/overview.md",sourceDirName:"benchmarks",slug:"/benchmarks/overview",permalink:"/docs/benchmarks/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unprocessed Data",permalink:"/docs/data/unprocessed_data"},next:{title:"Episodic Memory",permalink:"/docs/benchmarks/episodic-memory"}},d=[{value:"Episodic Memory",id:"episodic-memory",children:[],level:2},{value:"Hands and Objects",id:"hands-and-objects",children:[],level:2},{value:"Forecasting",id:"forecasting",children:[],level:2},{value:"Audio-Visual Diarization",id:"audio-visual-diarization",children:[],level:2},{value:"Social Interactions",id:"social-interactions",children:[],level:2}],u={toc:d};function p(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks-overview"},"Benchmarks Overview"),(0,a.kt)("h2",{id:"episodic-memory"},(0,a.kt)("a",{parentName:"h2",href:"/docs/benchmarks/episodic-memory"},"Episodic Memory")),(0,a.kt)("p",null,"The Episodic Memory task aims to make past video queryable and requires localizing where the answer can be seen within the user\u2019s past video."),(0,a.kt)("h2",{id:"hands-and-objects"},(0,a.kt)("a",{parentName:"h2",href:"/docs/benchmarks/hands-and-objects"},"Hands and Objects")),(0,a.kt)("p",null,"Hands & Objects aims to understand the camera-wearers present activity in terms of interactions with objects."),(0,a.kt)("h2",{id:"forecasting"},(0,a.kt)("a",{parentName:"h2",href:"/docs/benchmarks/forecasting"},"Forecasting")),(0,a.kt)("p",null,"Forecasting movements and interactions requires comprehending the camera wearer\u2019s intention."),(0,a.kt)("h2",{id:"audio-visual-diarization"},(0,a.kt)("a",{parentName:"h2",href:"/docs/benchmarks/av-diarization"},"Audio-Visual Diarization")),(0,a.kt)("p",null,"The Audio-Visual Diarization tasks involve localizing and tracking of the participants, detecting each speaker's activity, and transcribing all speech content."),(0,a.kt)("h2",{id:"social-interactions"},(0,a.kt)("a",{parentName:"h2",href:"/docs/benchmarks/social"},"Social Interactions")),(0,a.kt)("p",null,"The Social benchmark focuses on multimodal understanding of conversational interactions via attention and speech."))}p.isMDXComponent=!0}}]);