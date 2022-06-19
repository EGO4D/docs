"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[540],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={title:"Visualization Tool",sidebar_position:4},l="Visualization Tool",c={unversionedId:"viz",id:"viz",isDocsHomePage:!1,title:"Visualization Tool",description:"The dataset visualization tool is publicly available at//visualize.ego4d-data.org. You will need an approved license for access.",source:"@site/docs/viz.md",sourceDirName:".",slug:"/viz",permalink:"/docs/viz",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Visualization Tool",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/FAQ"},next:{title:"Privacy and Ethics",permalink:"/docs/privacy"}},u=[{value:"Filtering",id:"filtering",children:[],level:2},{value:"Interactive Annotations",id:"interactive-annotations",children:[],level:2},{value:"Visualization Modules",id:"visualization-modules",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"visualization-tool"},"Visualization Tool"),(0,o.kt)("p",null,"The dataset visualization tool is publicly available at: ",(0,o.kt)("a",{parentName:"p",href:"https://visualize.ego4d-data.org"},"https://visualize.ego4d-data.org"),". You will need an approved license for access."),(0,o.kt)("h2",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filterbox Example",src:n(2188).Z})),(0,o.kt)("p",null,"One of the first things you'll likely want to do is filter by benchmark.",(0,o.kt)("br",null),"\nFilter queries use a simple syntax of ",(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},(0,o.kt)("strong",null,"property"))," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},(0,o.kt)("strong",null,"operator"))," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},(0,o.kt)("strong",null,"value"))," expressions chained together with ",(0,o.kt)("strong",null,"AND"),"s, ",(0,o.kt)("strong",null,"OR"),"s, and ",(0,o.kt)("strong",null,"()"),"s. Anything with a space or () must be surrounded by double quotes.",(0,o.kt)("br",null),"\ne.g."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"benchmarks")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},"include")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},"moments")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"video_uid")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},"==")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},"a37f501d-5cc1-4cc2-8ac2-1ec4e66a86d2")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"benchmarks")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},"include")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},"fho_hands")," AND ",(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"modalities")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},"include")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},"imu")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"duration")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},">")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},"5000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("span",{style:{color:"rgb(92,151,239)"}},"moments.activities")," ",(0,o.kt)("span",{style:{color:"rgb(158,158,158)"}},"include")," ",(0,o.kt)("span",{style:{color:"rgb(199,65,101)"}},'"cut_open_a_package_(e.g._with_scissors)"'))),(0,o.kt)("p",null,"Autocomplete helps you type these up. Once your query is entered, click anywhere outside the autocomplete dropdown to end it (instead of hitting enter)."),(0,o.kt)("h2",{id:"interactive-annotations"},"Interactive Annotations"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,o.kt)("img",{alt:"Interactive Annotations",src:n(9677).Z,width:"30%"}),(0,o.kt)("img",{alt:"Interactive Annotations",src:n(9878).Z,width:"30%"}),(0,o.kt)("img",{alt:"Interactive Annotations",src:n(8360).Z,width:"30%"})),(0,o.kt)("p",null,"Once you click into a video, you'll see it with all its annotations. Many annotations are interactive.",(0,o.kt)("br",null),"\nThese include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Video Frames"),(0,o.kt)("li",{parentName:"ol"},"Video Times"),(0,o.kt)("li",{parentName:"ol"},"Response Tracks"),(0,o.kt)("li",{parentName:"ol"},"Visual Crops")),(0,o.kt)("p",null,"Any annotation that shows an underline on hover is clickable and will usually take you to that moment in the video."),(0,o.kt)("p",null,"You'll also notice many annotations have custom labels based on their context, e.g. scod object state changes show their pre/pnr/post times before expansion."),(0,o.kt)("h2",{id:"visualization-modules"},"Visualization Modules"),(0,o.kt)("p",null,"Each benchmark has modules to visualize its data types.",(0,o.kt)("br",null),"\nThese include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"time-segments"},"Time Segments"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"}},(0,o.kt)("img",{alt:"Interactive Annotations",src:n(7107).Z,width:"45%"}),(0,o.kt)("img",{alt:"Interactive Annotations",src:n(4320).Z,width:"45%",style:{objectFit:"cover"}})),"These show interactive start/end segments. Click a block to jump to the start, shift+click it to jump to the end. The black line indicates the streaming video's timestamp. A greedy algorithm assigns segments to tracks to show all segments without overlaps on a track and a minimal number of tracks. Colors are the same per label, but can be reused across multiple labels.",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"labeled-timestamps"},"Labeled Timestamps"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"}},(0,o.kt)("img",{alt:"Interactive Annotations",src:n(6247).Z,width:"50%"})),"Some annotations like narrations are labeled times across the video. This module shows any timestamp labels near the current video time.",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"bounding-boxes"},"Bounding Boxes"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"}},(0,o.kt)("img",{alt:"Interactive Annotations",src:n(2294).Z,width:"80%"})),"Benchmarks with bounding boxes, like visual queries, are visualized directly on the video. Bounding boxes that track an object across frames (e.g. response tracks) are interpolated across them. The FHO hands benchmark uses points, not areas, to represent hands, so these are shown with fixed-size circles instead of bounding boxes.")))}d.isMDXComponent=!0},9677:function(e,t,n){t.Z=n.p+"assets/images/Interactive_Annotations_1-4fb05b2e26ddd3757cde13c8015e7d4c.png"},9878:function(e,t,n){t.Z=n.p+"assets/images/Interactive_Annotations_2-98e687cba27c9f80a0589072c1561bd9.png"},8360:function(e,t,n){t.Z=n.p+"assets/images/Interactive_Annotations_3-e6c594ae30470c61c3f257a76c72ed6c.png"},2294:function(e,t,n){t.Z=n.p+"assets/images/Visualization_Modules_Labeled_Bounding_Boxes_1-8cbf76c35f918d65ea37a82caa6596e7.png"},6247:function(e,t,n){t.Z=n.p+"assets/images/Visualization_Modules_Labeled_Timestamps_1-3a859c773004641925b4e375589baff1.png"},7107:function(e,t,n){t.Z=n.p+"assets/images/Visualization_Modules_Time_Segments_1-6cff39180e240e983afdc50d80afe691.png"},4320:function(e,t,n){t.Z=n.p+"assets/images/Visualization_Modules_Time_Segments_2-fbccd719e301f0061979279165972b59.png"},2188:function(e,t,n){t.Z=n.p+"assets/images/Filtering_Example_1-843ad64b45d31644ed250eaea20010b2.png"}}]);