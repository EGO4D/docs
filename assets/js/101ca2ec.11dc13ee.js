"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},l="Start Here",i={unversionedId:"start-here",id:"start-here",title:"Start Here",description:"The Ego4D v2.0 update is now publicly available.",source:"@site/ego4d/start-here.md",sourceDirName:".",slug:"/start-here",permalink:"/docs/ego4d/start-here",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome To EGO4D!",permalink:"/docs/ego4d/"},next:{title:"Annotation Guidelines",permalink:"/docs/ego4d/data/annotation-guidelines"}},d={},s=[{value:"EGO4D License Agreement",id:"license-agreement",level:2},{value:"Browse The Dataset",id:"browse-dataset",level:2},{value:"Download The CLI",id:"cli-download",level:2},{value:"Select Your Subset Of Interest",id:"select-subset",level:2},{value:"Download The Data",id:"download-data",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-here"},"Start Here"),(0,r.kt)("admonition",{title:"Ego4D v2.0 Update Available",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/updates"},"Ego4D v2.0 update")," is now publicly available. ")),(0,r.kt)("p",null,"Let's first walk through downloading the core dataset, what options are available and how we suggest you start with the data."),(0,r.kt)("p",null,"The rough flow for a typical researcher will be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#license-agreement"},"Review and accept the terms of our license agreement."),"  (It takes 48 hours to receive credentials - do this first.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#browse-dataset"},"Browse the dataset")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#cli-download"},"Download the CLI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#select-subset"},"Select your subset of interest")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#download-data"},"Download The Data"))),(0,r.kt)("h2",{id:"license-agreement"},"EGO4D License Agreement"),(0,r.kt)("p",null,"Obtaining the dataset or any annotations requires you first review our license agreement and accept the terms.  ",(0,r.kt)("a",{parentName:"p",href:"https://ego4ddataset.com/"},"Go here (ego4ddataset.com)")," to review and execute this agreement, and you will be emailed a set of AWS access credentials when your license agreement is approved, which will take ~48hrs. In the meantime, you can check out data overview & sample notebooks here to get familiar with the dataset, and can download the CLI & dataloaders to get setup in advance."),(0,r.kt)("p",null,"Note that licenses have the option to execute our license agreements as either an individual or on behalf of your institution. You will likely sign the license as an individual. Typically, only institutional signatories at a director or executive level can agree to license terms on behalf of an entire organization."),(0,r.kt)("p",null,"Also note that once approved your access credentials will expire in 14 days - you're expected to download the data locally, not to consume it from AWS.  You can easily renew your license once it expires though:  ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/FAQ#my-credentials-expired--how-do-i-renew"},"license renewal FAQ")),(0,r.kt)("h2",{id:"browse-dataset"},"Browse The Dataset"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/benchmarks/overview"},"benchmark")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/data/annotation-guidelines"},"annotation")," documentation for details of what's available."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/viz"},"visualization tool")," to browse the dataset.  "),(0,r.kt)("h2",{id:"cli-download"},"Download The CLI"),(0,r.kt)("p",null,"Instal via pip (conda support coming):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install ego4d\n")),(0,r.kt)("p",null,"Alternatively, or in addition for utils/examples/etc, download the CLI: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md"},"EGO4D CLI"))),(0,r.kt)("h2",{id:"select-subset"},"Select Your Subset Of Interest"),(0,r.kt)("p",null,"For most purposes, you'll want to select the baseline, benchmark, scenario, or data type of interest first, and then specify the subset accordingly rather than downloading the full (> 5TB) dataset.  Please refer to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md"},"EGO4D CLI"))," documentation for the dataset commands, the approximate sizing below, and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/benchmarks/overview"},"benchmark")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/ego4d/data/annotation-guidelines"},"annotation")," documentation for details of what's available."),(0,r.kt)("h2",{id:"download-data"},"Download The Data"),(0,r.kt)("p",null,"Run the CLI to download the dataset (likely to a network share if you're download the full scale videos) via python/pip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ego4d --output_directory="~/ego4d_data" --datasets full_scale annotations\n')),(0,r.kt)("p",null,"Alternatively, if you downloaded the repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'python -m ego4d.cli.cli --output_directory="~/ego4d_data" --datasets full_scale annotations\n')),(0,r.kt)("admonition",{title:"Visualization First",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This would download the full 5 TB videos + annotations.  Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--datasets viz")," and follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/blob/main/viz/narrations/README.md"},"visualization setup")," to explore the dataset before selecting which subset you're interested in.")),(0,r.kt)("p",null,"Note this is a video dataset and as such the downloads are large!  Approximate download size:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Dataset")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Size")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Full Primary Dataset")),(0,r.kt)("td",{parentName:"tr",align:null},"~7.1 TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entire Dataset")),(0,r.kt)("td",{parentName:"tr",align:null},"30+ TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data Types")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Size"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Scale Videos (canonical videos)"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 7 TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark Clips"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 1 TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Visualization Data"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 500 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Video Components"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 20 TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Features"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 220 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Benchmark Subset")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Size"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Narrations Only"),(0,r.kt)("td",{parentName:"tr",align:null},"~ 350 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forecasting Only"),(0,r.kt)("td",{parentName:"tr",align:null},"~")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hands & Objects Only"),(0,r.kt)("td",{parentName:"tr",align:null},"~")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Episodic Memory Only"),(0,r.kt)("td",{parentName:"tr",align:null},"~")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AV/Social Only"),(0,r.kt)("td",{parentName:"tr",align:null},"~")))),(0,r.kt)("admonition",{title:"Download Time",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Average broadband speeds are in the ~100 Mbps ballpark. For 7 TB,\nyou're looking at ~6-7 days to download.")))}c.isMDXComponent=!0}}]);