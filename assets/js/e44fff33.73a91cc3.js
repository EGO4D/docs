"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:11},i="Unprocessed Data",l={unversionedId:"data/unprocessed_data",id:"data/unprocessed_data",title:"Unprocessed Data",description:"1. Usage of raw data is not recommended unless you know what you're",source:"@site/docs/data/unprocessed_data.md",sourceDirName:"data",slug:"/data/unprocessed_data",permalink:"/docs/data/unprocessed_data",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"EgoTracks",permalink:"/docs/data/egotracks"},next:{title:"Benchmarks Overview",permalink:"/docs/benchmarks/overview"}},d={},p=[],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unprocessed-data"},"Unprocessed Data"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Usage of raw data is ",(0,r.kt)("em",{parentName:"li"},"not recommended")," unless you know what you're\ndoing, or can be used to obtain component types such as binaural audio\nor 3rd person video data"),(0,r.kt)("li",{parentName:"ol"},"There are some missing raw components. Please create an issue on GitHub if you are wanting this data."))),(0,r.kt)("p",null,'All data has been processed to some extent. The data available here is\nsimply what each member of the consortium has provided in their "raw"\nform (as raw as you can get). Most video components have been\ncompressed. ',(0,r.kt)("a",{parentName:"p",href:"/docs/data/metadata"},"Top level metadata")," specifies the commands\nused for compression and other potential issues with them."),(0,r.kt)("p",null,"You can download the data with the CLI specifying the string\n",(0,r.kt)("inlineCode",{parentName:"p"},"--datasets components/<type>"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>"),"is one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"<type>")),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Quantity (# components)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"videos")),(0,r.kt)("td",{parentName:"tr",align:null},"Video components"),(0,r.kt)("td",{parentName:"tr",align:null},"20TB"),(0,r.kt)("td",{parentName:"tr",align:null},"24246 (8 missing)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"imu")),(0,r.kt)("td",{parentName:"tr",align:null},"IMU"),(0,r.kt)("td",{parentName:"tr",align:null},"114.8GB"),(0,r.kt)("td",{parentName:"tr",align:null},"6396 (498 missing)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gaze")),(0,r.kt)("td",{parentName:"tr",align:null},"Gaze (CSV)"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5GB"),(0,r.kt)("td",{parentName:"tr",align:null},"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"burned_in_gaze")),(0,r.kt)("td",{parentName:"tr",align:null},"Videos with a 2D point overlayed on them specifying the Gaze"),(0,r.kt)("td",{parentName:"tr",align:null},"175GB"),(0,r.kt)("td",{parentName:"tr",align:null},"38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"binaural_audio")),(0,r.kt)("td",{parentName:"tr",align:null},"Binaural audio assocaiated to videos"),(0,r.kt)("td",{parentName:"tr",align:null},"20GB"),(0,r.kt)("td",{parentName:"tr",align:null},"29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3rd_person_video")),(0,r.kt)("td",{parentName:"tr",align:null},"3rd Person Videos"),(0,r.kt)("td",{parentName:"tr",align:null},"155.6GB"),(0,r.kt)("td",{parentName:"tr",align:null},"37")))),(0,r.kt)("p",null,"For some components there are some deficiencies to them. So please\nread the appropriate section in the document before using it."))}m.isMDXComponent=!0}}]);