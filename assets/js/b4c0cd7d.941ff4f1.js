"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[742],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9321:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:6},s="IMU",c={unversionedId:"data/imu",id:"data/imu",isDocsHomePage:!1,title:"IMU",description:"The IMU data is normalized to a flat CSV file per",source:"@site/docs/data/imu.md",sourceDirName:"data",slug:"/data/imu",permalink:"/docs/data/imu",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Gaze",permalink:"/docs/data/gaze"},next:{title:"Features",permalink:"/docs/data/features"}},m=[{value:"Sample",id:"sample",children:[],level:2},{value:"Technical Details",id:"technical-details",children:[],level:2},{value:"Artifacts / Known Issues",id:"artifacts--known-issues",children:[],level:2},{value:"Download",id:"download",children:[],level:2}],p={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"imu"},"IMU"),(0,o.kt)("p",null,"The IMU data is normalized to a flat CSV file per\n",(0,o.kt)("a",{parentName:"p",href:"/docs/data/videos"},"video"),". IMU has been normalized into a single format,\nwith associated timestamps to the canonical videos and video\ncomponents."),(0,o.kt)("p",null,"Unprocessed IMU data is available. Some IMU data is\navailable on video components and can be parsed with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gopro/gpmf-parser"},"gpmf-parser"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"IMU data is not attached to (all) the video\ncomponent containers, due to many video components having metadata\nstripped from them"))),(0,o.kt)("h2",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"component_idx,component_timestamp_ms,canonical_timestamp_ms,gyro_x,gyro_y,gyro_z,accl_x,accl_y,accl_z\n0,0.0,0.0,0.025559105431309903,0.25026624068157616,0.11182108626198084,-2.278177458033573,-1.0311750599520384,-1.0311750599520384\n0,4.975124378109452,4.975124378109452,0.01597444089456869,0.27689030883919064,0.10862619808306707,-2.2709832134292567,-0.8609112709832134,-0.8609112709832134\n0,9.950248756218905,9.950248756218905,-0.014909478168264113,0.29073482428115016,0.0926517571884984,-2.3669064748201443,-0.4268585131894485,-0.4268585131894485\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canonical_timestamp_ms")," may be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," in some instances, due to the\ncanonical videos trimming to the ",(0,o.kt)("a",{parentName:"p",href:"../videos/#canonical-videos"},"video stream\nregion"),"."),(0,o.kt)("h2",{id:"technical-details"},"Technical Details"),(0,o.kt)("p",null,"Since each canonical video has their video stream region trimmed, to\nnormalize the IMU data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"IMU timestamps relative to the video stream are found (via a simple offset)"),(0,o.kt)("li",{parentName:"ol"},"Timestamps are then offset with respect to where each video\ncomponent starts in the canonical videos")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An assumption is made about the first IMU timestamp, specifically it being aligned to the original container's ",(0,o.kt)("inlineCode",{parentName:"p"},"t=0")," point"))),(0,o.kt)("h2",{id:"artifacts--known-issues"},"Artifacts / Known Issues"),(0,o.kt)("p",null,"Please read to understand the limitations"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Some videos with IMU do not have all components covered, i.e. there are more video components than associated IMU components."),(0,o.kt)("li",{parentName:"ol"},"Missing acceleration values for some files"),(0,o.kt)("li",{parentName:"ol"},"IMU timestamps can be significantly large or small",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Due to some unknown artifact when extracting the IMU data"))),(0,o.kt)("li",{parentName:"ol"},"IMU timestamp can be non-monotonic",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Either due to the above, or:"),(0,o.kt)("li",{parentName:"ul"},"This is simply due to the packets of the data from the original extracted IMU data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In this case, the resulting canonical timestamps will be appropriately computed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You should sort the data by the canonical timestamp")))))),(0,o.kt)("li",{parentName:"ol"},"No callibration of the IMU was taken place, there is likely measurement bias present for IMU data.")),(0,o.kt)("p",null,"You can query the above issues from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/data/metadata"},"top level metadata file"),"."),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3 -m ego4d.cli.cli --output_directory=<dir> --dataset=imu\n")))}d.isMDXComponent=!0}}]);