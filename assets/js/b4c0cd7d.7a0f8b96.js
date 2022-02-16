"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[742],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="IMU",s={unversionedId:"data/imu",id:"data/imu",isDocsHomePage:!1,title:"IMU",description:"The IMU data is normalized to a flat CSV file per",source:"@site/docs/data/imu.md",sourceDirName:"data",slug:"/data/imu",permalink:"/docs/data/imu",editUrl:"https://https://ego4d-data.org/docs/data/imu.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/docs/data/metadata"},next:{title:"Annotations",permalink:"/docs/data/annotations"}},d=[{value:"Sample",id:"sample",children:[],level:2},{value:"Technical Details",id:"technical-details",children:[],level:2},{value:"Download",id:"download",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"imu"},"IMU"),(0,o.kt)("p",null,"The IMU data is normalized to a flat CSV file per\n",(0,o.kt)("a",{parentName:"p",href:"/docs/data/videos"},"video"),". IMU has been normalized into a single format,\nwith associated timestamps to the canonical videos and video\ncomponents."),(0,o.kt)("p",null,"Unprocessed IMU data is not currently available. Some IMU data is\navailable on video components and can be parsed with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gopro/gpmf-parser"},"gpmf-parser"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"IMU data is not attached to (all) the video\ncomponent containers, due to many video components having metadata\nstripped from them"))),(0,o.kt)("h2",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"component_idx,component_timestamp_ms,canonical_timestamp_ms,gyro_x,gyro_y,gyro_z,accl_x,accl_y,accl_z\n0,0.0,0.0,0.025559105431309903,0.25026624068157616,0.11182108626198084,-2.278177458033573,-1.0311750599520384,-1.0311750599520384\n0,4.975124378109452,4.975124378109452,0.01597444089456869,0.27689030883919064,0.10862619808306707,-2.2709832134292567,-0.8609112709832134,-0.8609112709832134\n0,9.950248756218905,9.950248756218905,-0.014909478168264113,0.29073482428115016,0.0926517571884984,-2.3669064748201443,-0.4268585131894485,-0.4268585131894485\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canonical_timestamp_ms")," may be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," in some instances, due to the\ncanonical videos trimming to the ",(0,o.kt)("a",{parentName:"p",href:"../videos/#canonical-videos"},"video stream\nregion"),"."),(0,o.kt)("h2",{id:"technical-details"},"Technical Details"),(0,o.kt)("p",null,"Since each canonical video has their video stream region trimmed, to\nnormalize the IMU data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"IMU timestamps relative to the video stream are found (via a simple offset)"),(0,o.kt)("li",{parentName:"ol"},"Timestamps are then offset with respect to where each video\ncomponent starts in the canonical videos")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3 -m ego4d.cli.cli --output_directory=<dir> --dataset=imu\n")))}m.isMDXComponent=!0}}]);