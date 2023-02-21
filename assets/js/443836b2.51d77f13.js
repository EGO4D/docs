"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9535:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"CLI Tool",sidebar_position:5},i="Ego4D Dataset Download CLI",o={unversionedId:"CLI",id:"CLI",title:"CLI Tool",description:"The Ego4D CLI can be installed via pip and provides access to the Ego4D datasets.",source:"@site/docs/CLI.md",sourceDirName:".",slug:"/CLI",permalink:"/docs/CLI",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CLI Tool",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Social Interactions",permalink:"/docs/benchmarks/social"},next:{title:"Visualization Tool",permalink:"/docs/viz"}},d={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Detailed Flags",id:"detailed-flags",level:3},{value:"Datasets",id:"datasets",level:3},{value:"Manifests",id:"manifests",level:3},{value:"Universities",id:"universities",level:3}],p={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ego4d-dataset-download-cli"},"Ego4D Dataset Download CLI"),(0,r.kt)("p",null,"The Ego4D CLI can be installed via pip and provides access to the Ego4D datasets."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install via pip (conda support coming):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install ego4d\n")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The CLI requires an AWS license is properly setup as per ",(0,r.kt)("a",{parentName:"p",href:"/docs/start-here"},"start here")),(0,r.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"In your python environment, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ego4d")," command line directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ego4d --output_directory="~/ego4d_data" --datasets full_scale annotations --metadata\n')),(0,r.kt)("p",null,"(Alternatively, use traditional python module syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},'python -m ego4d.cli.cli --output_directory="~/ego4d_data" --datasets full_scale annotations --metadata'),")"),(0,r.kt)("p",null,"This will download all the full scale Ego4D v1 video files and annotations to a directory on\nyour local computer at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/ego4d_data/v1/full_scale")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"~/ego4d_data/v1/annotations"),", as well the master metadata file at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/ego4d_data/v1/ego4d.json"),". "),(0,r.kt)("p",null,"Note that if you want to use the AWS credentials stored in a different ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named profile"),' than "ego4d", or the system default (default), you can change the ',(0,r.kt)("inlineCode",{parentName:"p"},"aws_profile_name")," flag to the name of the profile that you want to use."),(0,r.kt)("h3",{id:"detailed-flags"},"Detailed Flags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dataset")),(0,r.kt)("td",{parentName:"tr",align:null},"[Required]"," A list of identifiers to download: ","[annotations, full_scale, clips]","  Each dataset will be stored in folders in the output directory with the name of the dataset (e.g. output_dir/v1/full_scale/) and manifest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output_directory")),(0,r.kt)("td",{parentName:"tr",align:null},"[Required]","A local path where the downloaded files and metadata will be stored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," Download the primary ",(0,r.kt)("inlineCode",{parentName:"td"},"ego4d.json")," metadata at the top level (Default: True)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--benchmarks")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," A list of benchmarks to filter dataset downloads by - e.g. Narrations/EM/FHO/AV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-y")," ",(0,r.kt)("inlineCode",{parentName:"td"},"--yes")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," If this flag is set, then the CLI will not show a prompt asking the user to confirm the download. This is so that the tool can be used as part of shell scripts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--aws_profile_name")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," Defaults to \u201cdefault\u201d. Specifies the AWS profile name from ~/.aws/credentials to use for the download")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--video_uids")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," List of video or clip UIDs to be downloaded. If not specified, all relevant UIDs will be downloaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--video_uid_file")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," Path to a whitespace delimited file that contains a list of UIDs. Mutually exclusive with the ",(0,r.kt)("inlineCode",{parentName:"td"},"video_uids")," flag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--universities")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," List of university IDs. If specified, only UIDs from the S3 buckets belonging to the listed universities will be downloaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--version")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," A version identifier - e.g. \u201cv1\u201d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--no-metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," Bypass the ",(0,r.kt)("inlineCode",{parentName:"td"},"ego4d.json")," metadata download")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--config")),(0,r.kt)("td",{parentName:"tr",align:null},"[Optional]"," Local path to a config JSON file. If specified, the flags will be read from this file instead of the command line")))),(0,r.kt)("h3",{id:"datasets"},"Datasets"),(0,r.kt)("p",null,"The following datasets are available (not exhaustive):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"The full set of annotations for the majority of benchmarks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"full_scale"),(0,r.kt)("td",{parentName:"tr",align:null},"The full scale version of all videos.  (Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"benchmarks")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"video_uids")," filters to reduce the 5TB download size.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clips"),(0,r.kt)("td",{parentName:"tr",align:null},"Clips available for benchmark training tasks.  (Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"benchmarks")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"video_uids")," filters to reduce the download size.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video_540ss"),(0,r.kt)("td",{parentName:"tr",align:null},"The downscaled version of all videos - rescaled to 540px on the short side.  (Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"benchmarks")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"video_uids")," filters to reduce the 5TB download size.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations_540ss"),(0,r.kt)("td",{parentName:"tr",align:null},"The annotations corresponding to the downscaled ",(0,r.kt)("inlineCode",{parentName:"td"},"video_540ss")," videos - primarily differing only in spatial annotations (e.g. bounding boxes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3d"),(0,r.kt)("td",{parentName:"tr",align:null},"Annotations for the 3D VQ benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3d_scans"),(0,r.kt)("td",{parentName:"tr",align:null},"3D location scans for the 3D VQ benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3d_scan_keypoints"),(0,r.kt)("td",{parentName:"tr",align:null},"3D location scan keypoints for the 3D VQ benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"imu"),(0,r.kt)("td",{parentName:"tr",align:null},"IMU data for the subset of videos available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slowfast8x8_r101_k400"),(0,r.kt)("td",{parentName:"tr",align:null},"Precomputed ",(0,r.kt)("a",{parentName:"td",href:"https://ego4d-data.org/docs/data/features/"},"action features")," for the Slowfast 8x8 (R101) model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"omnivore_video_swinl"),(0,r.kt)("td",{parentName:"tr",align:null},"Precomputed ",(0,r.kt)("a",{parentName:"td",href:"https://ego4d-data.org/docs/data/features/"},"action features")," for the Omnivore Video model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"omnivore_image_swinl"),(0,r.kt)("td",{parentName:"tr",align:null},"Precomputed ",(0,r.kt)("a",{parentName:"td",href:"https://ego4d-data.org/docs/data/features/"},"action features")," for the Omnivore Image model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fut_loc"),(0,r.kt)("td",{parentName:"tr",align:null},"Images and annotations for the future locomotion benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"av_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the AV/Social benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lta_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the Long Term Anticipation benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moments_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the Moments benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nlq_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the NLQ benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sta_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the Short Term Anticipation benchmark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vq2d_models"),(0,r.kt)("td",{parentName:"tr",align:null},"Model checkpoints for the 2D VQ benchmark.")))),(0,r.kt)("h3",{id:"manifests"},"Manifests"),(0,r.kt)("p",null,"Each dataset contains a manifest.csv file that lists it's contents as well as additional metadata that's available.  In particular, for ",(0,r.kt)("inlineCode",{parentName:"p"},"full_scale")," there is metadata for each video available.  While the top level metadata ",(0,r.kt)("inlineCode",{parentName:"p"},"ego4d.json")," is generally easier to consume and contains more information, you can consume most simple metadata from the manifest itself for each dataset."),(0,r.kt)("h3",{id:"universities"},"Universities"),(0,r.kt)("p",null,"The following university IDs can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"University"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bristol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmu_africa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frl_track_1_public")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"georgiatech")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iiith")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indiana")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kaust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minnesota")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uniandes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unict")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"utokyo")))))}u.isMDXComponent=!0}}]);