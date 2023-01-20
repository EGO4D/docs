"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var o=r(7462),n=r(7294),a=r(3905);const s="discourseCarousel_ykZE",i="postContainer_b8DS",c="post_mMT_",l="postHeader__6qt",d="postBody_yafY",u={5:"Challenges",8:"Ego4D Feedback",10:"Q&A",11:"Announcements"},p={5:"#0088CC",8:"#3AB54A",10:"#8C6238",11:"#0E76BD"};function m(e){let{post:t,users:r}=e;return n.createElement("a",{className:c,href:`https://discuss.ego4d-data.org/t/${t.slug}/${t.id}`,target:"_blank"},n.createElement("div",{className:l,style:{background:p[t.category_id]||"#000"}},n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement("span",null,u[t.category_id]||"Uncategorized"," "),n.createElement("span",null,new Date(t.created_at).toLocaleDateString("en-us",{month:"short",day:"numeric"})))),n.createElement("div",{className:d},t.title))}function f(){const[e,t]=(0,n.useState)();(0,n.useEffect)((()=>{fetch("https://discuss.ego4d-data.org/latest.json").then((e=>e.json())).then((e=>{t(e)}))}),[]);let r=[];if(e){r=(e&&e.topic_list.topics.sort(((e,t)=>e.created_at<t.created_at?1:-1))).slice(0,-1).map((t=>n.createElement(m,{post:t,users:e.users,key:t.id})))}return n.createElement("section",{className:s},n.createElement("h3",{style:{color:"var(--ifm-color-secondary-contrast-foreground)"}},"Latest Posts from the Forum:"),n.createElement("div",{style:{width:"100%",padding:"3% 2% 5% 2%",overflowX:"auto",overflowY:"hidden",margin:"auto"}},n.createElement("div",{className:i},r)))}const h={sidebar_position:1,slug:"/"},g="Welcome To EGO4D!",y={unversionedId:"intro",id:"intro",title:"Welcome To EGO4D!",description:"The full Ego4D dataset is now accessible from China without the use of a VPN or proxy server! Get your licenses and try the world's largest egocentric video dataset!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Annotation Guidelines",permalink:"/docs/data/annotation-guidelines"}},v={},b=[],w={toc:b};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-ego4d"},"Welcome To EGO4D!"),(0,a.kt)("admonition",{title:"Ego4D Now Accessible from China without VPN!",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The full Ego4D dataset is now accessible from China without the use of a VPN or proxy server! Get your licenses and try the world's largest egocentric video dataset!")),(0,a.kt)("p",null,"EGO4D is the world's largest egocentric (first person) video ML dataset and benchmark suite, with 3,600 hrs (and counting) of densely narrated video and a wide range of ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/annotation-guidelines"},"annotations")," across five new ",(0,a.kt)("a",{parentName:"p",href:"/docs/benchmarks/overview"},"benchmark tasks"),".  It covers hundreds of scenarios (household, outdoor, workplace, leisure, etc.) of daily life activity captured in-the-wild by 926 unique camera wearers from 74 worldwide locations and 9 different countries.  Portions of the video are accompanied by audio, 3D meshes of the environment, eye gaze, stereo, and/or synchronized videos from multiple egocentric cameras at the same event.  The approach to data collection was designed to uphold rigorous privacy and ethics standards with consenting participants and robust de-identification procedures where relevant."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/start-here"},"Start Here")," for instructions on how to access the dataset by accepting the terms of our license agreement."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=9V_QfuXhgas&list=PLBinSqdH1M9miMiHwYJvZvBcLmLNcwOmx"},"Watch Here")," for a youtube introduction to the dataset, tooling and challenges."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.07058"},"Read the paper here")," for a more complete introduction."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/benchmarks/overview"},"Read about the benchmarks here")," for details on the specific tasks and annotations."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/viz"},"Explore the data before downloading here")," (you will first need to accept the license agreement)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discuss.ego4d-data.org/"},"Vist our forum")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact"},"contact us")," to ask questions, make suggestions or discuss Ego4D or related research."),(0,a.kt)(f,{mdxType:"DiscourseCarousel"}))}k.isMDXComponent=!0}}]);