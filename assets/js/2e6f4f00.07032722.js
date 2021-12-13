"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[824],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3814:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:2},s="Start Here",d={unversionedId:"start-here",id:"start-here",isDocsHomePage:!1,title:"Start Here",description:"Let's first walk through downloading the core dataset, what options are available and how we suggest you start with the data.",source:"@site/docs/start-here.md",sourceDirName:".",slug:"/start-here",permalink:"/docs/start-here",editUrl:"https://https://ego4d-data.org/docs/start-here.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome To EGO4D!",permalink:"/docs/intro"},next:{title:"Benchmarks Overview",permalink:"/docs/benchmarks/overview"}},c=[{value:"EGO4D License Agreement",id:"ego4d-license-agreement",children:[],level:2},{value:"Download The CLI",id:"download-the-cli",children:[],level:2},{value:"Select Your Subset Of Interest",id:"select-your-subset-of-interest",children:[],level:2},{value:"Download The Data",id:"download-the-data",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-here"},"Start Here"),(0,o.kt)("p",null,"Let's first walk through downloading the core dataset, what options are available and how we suggest you start with the data.  "),(0,o.kt)("p",null,"The rough flow for a typical researcher will be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#EGO4D-License-Agreement"},"Review and accept the terms of our license agreement."),"  (It's takes 48 to receive credentials - do this first.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#Download-The-CLI"},"Download the CLI.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#Select-Your-Subset-Of-Interest"},"Select your subset of interest")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#Download-The-Data"},"Download The Data"))),(0,o.kt)("h2",{id:"ego4d-license-agreement"},"EGO4D License Agreement"),(0,o.kt)("p",null,"Obtaining the dataset or any annotations requires you first review our license agreement and accept the terms.  ",(0,o.kt)("a",{parentName:"p",href:"https://ego4ddataset.com/"},"Go here (ego4ddataset.com)")," to review and execute this agreement, and you will be emailed a set of AWS access credentials when your license agreement is approved, which will take ~ 48 hrs.  (In the meantime, you can check out data overiew & sample notebooks here to get familiar with the dataset, and can download the CLI & dataloaders to get setup in advance.)"),(0,o.kt)("p",null,"Note that licensees have the option to execute our license agreements as either an individual or on behalf of your institution. Please carefully consider which approach is most appropriate in your context and engage the cognizant stakeholders at your institution as needed. Our license agreement contains important terms and conditions and should be reviewed carefully before execution. "),(0,o.kt)("p",null,"Additionally, please note that EGO4D is led by an international consortium of 13 universities in partnership with Facebook AI. Each consortium member owns copyrights to the specific data they have collected as part of the initiative. Accordingly, researchers seeking access to EGO4D must individually execute 13 individual licenses with each university partner. Fortunately, all these licenses are essentially identical, simplifying the license reviewing and execution requirements. If you would like a copy of the license to review prior to signing, ",(0,o.kt)("a",{parentName:"p",href:"https://ego4ddataset.com/"},"go here"),"."),(0,o.kt)("p",null,"Also note that once approved your access credentials will expire in 14 days - you're expected to download the data locally, not to consume it from AWS. "),(0,o.kt)("p",null,"Meta AI licenses annotations on all EGO4D data under ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/"},"Creative Commons Attribution 4.0 International (CC BY 4.0)"),". "),(0,o.kt)("h2",{id:"download-the-cli"},"Download The CLI"),(0,o.kt)("p",null,"Download the CLI from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md"},"EGO4D CLI"))),(0,o.kt)("h2",{id:"select-your-subset-of-interest"},"Select Your Subset Of Interest"),(0,o.kt)("p",null,"TODO: You likely won't want the full dataset!  "),(0,o.kt)("p",null,"The EGO4D CLI, for example, enables researchers to access data matching their baseline, benchmark, scenario, or data type of interest. "),(0,o.kt)("h2",{id:"download-the-data"},"Download The Data"),(0,o.kt)("p",null,"Run the CLI to download the dataset (likely to a network share if you're download the full scale videos):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'python -m ego4d.cli.cli --output_directory="~/ego4d_data" --datasets full_scale annotations\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Standard Dataset")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This would download the full 5 TB videos + annotations.  Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--standard")," to get started with just the annotations and visualization data to explore the dataset before selecting which subset you're interested in."))),(0,o.kt)("p",null,"Note this is a video dataset and as such the downloads are large!  Approximate download size:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Dataset")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Size")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Full Dataset")),(0,o.kt)("td",{parentName:"tr",align:null},"~ 5.5 TB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Data Types")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Size"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Full Scale Videos"),(0,o.kt)("td",{parentName:"tr",align:null},"~ 5 TB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Annotations"),(0,o.kt)("td",{parentName:"tr",align:null},"~ 2 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Visualization Data"),(0,o.kt)("td",{parentName:"tr",align:null},"~ 500 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Benchmark Subset")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Size"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Narrations Only"),(0,o.kt)("td",{parentName:"tr",align:null},"~ 350 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Forecasting Only"),(0,o.kt)("td",{parentName:"tr",align:null},"~")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hands & Objects Only"),(0,o.kt)("td",{parentName:"tr",align:null},"~")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Episodic Memory Only"),(0,o.kt)("td",{parentName:"tr",align:null},"~")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AV/Social Only"),(0,o.kt)("td",{parentName:"tr",align:null},"~")))),(0,o.kt)("p",null,"Note: Average broadband speeds are in the ~100 Mbps ballpark.  For 5 TB, you're looking at ~ 5 days to download."))}u.isMDXComponent=!0}}]);