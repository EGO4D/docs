"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:7},i="Features",l={unversionedId:"data/features",id:"data/features",title:"Features",description:"The features have been updated as of 2022-06-07. Please re-download them if you",source:"@site/docs/data/features.md",sourceDirName:"data",slug:"/data/features",permalink:"/docs/data/features",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"IMU",permalink:"/docs/data/imu"},next:{title:"Annotation Schemas",permalink:"/docs/data/annotations-schemas"}},d={},p=[{value:"Want to Add a Model?",id:"want-to-add-a-model",level:2},{value:"Description",id:"description",level:2},{value:"Example Window Stride",id:"example-window-stride",level:2},{value:"Implementation",id:"implementation",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("admonition",{title:"Features extraction bug",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The features have been updated as of 2022-06-07. Please re-download them if you\nhave used them before this date. There was a bug in the feature generation\npipeline which had caused the model to not be fed the video input correctly. You\ncan find the paths to the old features by reading the description below.")),(0,r.kt)("p",null,"Pre-extracted feature vectors are available for every video in the\ndataset. They can be accessed with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md"},"EGO4D\nCLI")),". Please consult the table below for the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"--dataset")," option."),(0,r.kt)("h2",{id:"want-to-add-a-model"},"Want to Add a Model?"),(0,r.kt)("p",null,"Refer to the features ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/tree/main/ego4d/features"},"README on the Ego4D\ngithub"),"."),(0,r.kt)("p",null,"If you need support in running the job to extract features, please open an issue\non the github repository."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Here is a table of the features pre-extracted from Ego4D. These\nfeatures are extracted from the canonical videos. Canonical videos are\nall 30FPS."),(0,r.kt)("p",null,"Window Size and Stride are in frames."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Dataset(s) Trained On"),(0,r.kt)("th",{parentName:"tr",align:null},"Model Arch"),(0,r.kt)("th",{parentName:"tr",align:null},"Window Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Stride"),(0,r.kt)("th",{parentName:"tr",align:null},"Model Weights Location"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slowfast8x8_r101_k400")),(0,r.kt)("td",{parentName:"tr",align:null},"Kinetics 400"),(0,r.kt)("td",{parentName:"tr",align:null},"SlowFast 8x8 (R101 backbone)"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"torchub path: facebookresearch/pytorchvideo/slowfast_r101"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"omnivore_video_swinl")),(0,r.kt)("td",{parentName:"tr",align:null},"Kinetics 400 / ImageNet-1K"),(0,r.kt)("td",{parentName:"tr",align:null},"Omnivore (swin L); video head"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/omnivore#model-zoo"},"https://github.com/facebookresearch/omnivore#model-zoo")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"omnivore_image_swinl")),(0,r.kt)("td",{parentName:"tr",align:null},"Kinetics 400 / ImageNet-1K"),(0,r.kt)("td",{parentName:"tr",align:null},"Omnivore (swin L); image head"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/omnivore#model-zoo"},"https://github.com/facebookresearch/omnivore#model-zoo")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"omnivore_video_swinl_fp16")),(0,r.kt)("td",{parentName:"tr",align:null},"Kinetics 400 / ImageNet-1K"),(0,r.kt)("td",{parentName:"tr",align:null},"Omnivore (swin L); video head"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/facebookresearch/omnivore#model-zoo"},"https://github.com/facebookresearch/omnivore#model-zoo")),(0,r.kt)("td",{parentName:"tr",align:null},"FP16 variant of ",(0,r.kt)("inlineCode",{parentName:"td"},"omnivore_video_swinl"))))),(0,r.kt)("p",null,"There is additionally ",(0,r.kt)("inlineCode",{parentName:"p"},"slowfast8x8_r101_k400_deprecated")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"omnivore_video_deprecated")," for the features released before 2022-06-07"),(0,r.kt)("p",null,"Features are extracted in a moving window fashion. At every extraction\npoint the model sees the next Window Size (",(0,r.kt)("inlineCode",{parentName:"p"},"W"),") frames (i.e. at frame\n",(0,r.kt)("inlineCode",{parentName:"p"},"i")," the model sees features ",(0,r.kt)("inlineCode",{parentName:"p"},"[i, i + W)")," frames). The window starts at\nframe 0, and then is offset by the stride until the end of the video\nis reached."),(0,r.kt)("p",null,"There is a boundary condition where the last window may extend past\nthe video. In this case, the extraction point is backed up such that a\nwindow with ",(0,r.kt)("inlineCode",{parentName:"p"},"W")," frames from the video is used. This occurs when the\nnumber of frames in the canonical video is not divisible by the stride."),(0,r.kt)("h2",{id:"example-window-stride"},"Example Window Stride"),(0,r.kt)("p",null,"Let's say a video has 39 frames. The frames for extraction will be (in frame numbers):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[0, 31]"),(0,r.kt)("li",{parentName:"ul"},"[7, 38]"," which is \u201cback-padded\u201d from ","[16, 47]"," to fit the last window")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Ego4d/tree/main/ego4d/features"},"README on the Ego4D github")," to run or use the code yourself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pytorchvideo.readthedocs.io/en/latest/api/data/data.html?highlight=ClipSampler#pytorchvideo.data.UniformClipSampler"},"UniformClipSampler")," from PytorchVideo is used")))}u.isMDXComponent=!0}}]);