"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[288],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3581:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:10},c="FAQ",l={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"FAQ",description:"Note that many questions may have already been answered on the forum or github issues for the primary github repo or for the benchmark specific repos.",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Ego4D Challenge 2022",permalink:"/docs/challenge"},next:{title:"Contact Us",permalink:"/docs/contact"}},d=[{value:"Why are there multiple minutes of blank frames in some of the videos?",id:"why-are-there-multiple-minutes-of-blank-frames-in-some-of-the-videos",children:[],level:2},{value:"My credentials expired.  How do I renew?",id:"my-credentials-expired--how-do-i-renew",children:[],level:2},{value:"Are there dataloaders available for the dataset.",id:"are-there-dataloaders-available-for-the-dataset",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"Note that many questions may have already been answered on the ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.ego4d-data.org/"},"forum")," or github issues for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/issues?q=is%3Aissue"},"primary github repo")," or for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/videos"},"benchmark specific repos"),"."),(0,a.kt)("h2",{id:"why-are-there-multiple-minutes-of-blank-frames-in-some-of-the-videos"},"Why are there multiple minutes of blank frames in some of the videos?"),(0,a.kt)("p",null,"Those sections of the video have been redacted.  The decision was made to keep the frames in the video to keep the timing & sequence consistent with the raw video, but the component had to be removed for privacy/deid/etc concerns.  Please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/videos"},"video documentation")," for more info."),(0,a.kt)("h2",{id:"my-credentials-expired--how-do-i-renew"},"My credentials expired.  How do I renew?"),(0,a.kt)("p",null,"Go back to ",(0,a.kt)("a",{parentName:"p",href:"https://ego4ddataset.com/"},"https://ego4ddataset.com/")," and re-enter the same info you originally regstered with and you'll receive an updated set of credentials immediately."),(0,a.kt)("h2",{id:"are-there-dataloaders-available-for-the-dataset"},"Are there dataloaders available for the dataset."),(0,a.kt)("p",null,"Two answers: Yes & coming soon. For each of the benchmarks, there is a dataloader available that was used to generate the benchmark results and that should cover most purposes.  There's also a set of common dataloaders coming, which will be available sometime in May."))}p.isMDXComponent=!0}}]);