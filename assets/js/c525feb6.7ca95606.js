"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[209],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return a?o.createElement(m,s(s({ref:t},p),{},{components:a})):o.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:18},s="Updates",i={unversionedId:"updates",id:"updates",title:"Updates",description:"DATASET RELEASE: Ego4D v2.1 has been released due to the additional of Goal-Step annotations and grouped",source:"@site/docs/updates.md",sourceDirName:".",slug:"/updates",permalink:"/docs/updates",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Ego4D Challenge 2023",permalink:"/docs/challenge"},next:{title:"FAQ",permalink:"/docs/FAQ"}},d={},l=[{value:"v2.1 Update",id:"v21-update",level:2},{value:"Ego4D Goal-Step &amp; Grouped Videos",id:"ego4d-goal-step--grouped-videos",level:3},{value:"v2.0 Update",id:"v20-update",level:2},{value:"FHO Annotation Updates",id:"fho-annotation-updates",level:3},{value:"NLQ Annotation Updates",id:"nlq-annotation-updates",level:3},{value:"Erroneous Videos Removed From Dataset &amp; Benchmarks",id:"erroneous-videos-removed-from-dataset--benchmarks",level:3},{value:"Additional annotations formats (fho_main.json)",id:"additional-annotations-formats-fho_mainjson",level:3},{value:"VQ Annotation Updates",id:"vq-annotation-updates",level:3},{value:"PACO (Parts and Attributes of Common Objects) Dataset",id:"paco-parts-and-attributes-of-common-objects-dataset",level:3},{value:"EgoTracks",id:"egotracks",level:3},{value:"Prior Incremental Updates",id:"prior-incremental-updates",level:2},{value:"Downsampled Videos",id:"downsampled-videos",level:3},{value:"Feature Updates",id:"feature-updates",level:3},{value:"Further Details",id:"further-details",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"updates"},"Updates"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"DATASET RELEASE:")," Ego4D ",(0,n.kt)("strong",{parentName:"p"},"v2.1")," has been released due to the additional of Goal-Step annotations and grouped\nvideos. Please see below for more details.")),(0,n.kt)("p",null,"Ego4D was recently updated to version v2 (Feb '23) - focused on additional Forecasting, Hands & Objects (243 hrs vs 120 hrs) and Natural Language Queries (27k vs 17.3k queries) annotations, a number of corrections and usability enhancements, and two new related dataset enhancements (PACO object and EgoTracks tracking path annotations). Details below."),(0,n.kt)("p",null,"CVPR challenges for this year will be based on the updated dataset for FHO & NLQ benchmarks."),(0,n.kt)("p",null,"As always, we would love any questions or feedback on current or future changes, observed issues with the dataset and requests for future updates/utilities/dataloaders/examples/etc.  Please join us on the Ego4D Forum: ",(0,n.kt)("a",{parentName:"p",href:"https://discuss.ego4d-data.org/"},"https://discuss.ego4d-data.org/")),(0,n.kt)("h2",{id:"v21-update"},"v2.1 Update"),(0,n.kt)("h3",{id:"ego4d-goal-step--grouped-videos"},"Ego4D Goal-Step & Grouped Videos"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://openreview.net/pdf?id=3BxYAaovKr"},"Goal-Step")," is now available for download via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/CLI"},"CLI")," downloader. This release includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Annotation files"),(0,n.kt)("li",{parentName:"ul"},'"Grouped" videos',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Grouped videos are multiple videos combined together to form a\ngroup. They are composed of previously existing data."),(0,n.kt)("li",{parentName:"ul"},"The videos were noticed to be connected due to annotating\nthe dataset for Goal-Step.")))),(0,n.kt)("p",null,"To download Goal-Step relevant annotations and videos (including the grouped\nvideos), please filter the data on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/CLI"},"CLI")," tool via the flag\n",(0,n.kt)("inlineCode",{parentName:"p"},"--benchmarks goalstep"),". To download the videos use ",(0,n.kt)("inlineCode",{parentName:"p"},"--datasets full_scale"),", to\ndownload just the annotations use ",(0,n.kt)("inlineCode",{parentName:"p"},"--dataset annotations"),", and finally to\ndownload both the videos and annotations use ",(0,n.kt)("inlineCode",{parentName:"p"},"--dataset annotations full_scale"),"."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 -m \n")),(0,n.kt)("p",null,"As of writing, the PyPi package has been updated for Ego4D. As such, you will\nhave to clone the repository and run the script as shown above. To setup the\nrepository, please follow the following instructions on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d"},"GitHub\nREADME"),"."),(0,n.kt)("h2",{id:"v20-update"},"v2.0 Update"),(0,n.kt)("admonition",{title:"FHO hands & SCOD train/val pending",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Note that the FHO hands & SCOD (state change object detection) v2 train & val jsons are currently not available.")),(0,n.kt)("h3",{id:"fho-annotation-updates"},"FHO Annotation Updates"),(0,n.kt)("p",null,"Forecasting, Hands & Objects has roughly double the annotations compared to v1 (243 hours of annotated clips vs 120 hrs in v1), split in the same 75/25 proportion in train/val.  Benchmark task jsons have been updated accordingly for train/val, though the unannotated test json's remain the same (and can be submitted to the same eval.ai challenges as with v1). "),(0,n.kt)("h3",{id:"nlq-annotation-updates"},"NLQ Annotation Updates"),(0,n.kt)("p",null,"Natural Language Queries has been updated to include additional query and video coverage. For train and val, there are now 27k validated queries vs 17.3k in v1."),(0,n.kt)("p",null,"In addition to a a number of queries were 0s (i.e. point in time with start=end) and those intervals have been annotated to correct that. (See: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/episodic-memory/issues/14"},"https://github.com/EGO4D/episodic-memory/issues/14")," & special thanks to @",(0,n.kt)("a",{parentName:"p",href:"https://github.com/md-mohaiminul"},"md-mohaiminul")," for the flag there.)   "),(0,n.kt)("h3",{id:"erroneous-videos-removed-from-dataset--benchmarks"},"Erroneous Videos Removed From Dataset & Benchmarks"),(0,n.kt)("p",null,"A small number of videos were removed outright from the dataset - 1 video with frozen frames, 1 with varying resolution, and several videos too short to be practically useful.  A small number (< 5) of stereo videos were in benchmark splits (including test in some cases) and were removed (but remain in the dataset appropriately flagged in metadata).  "),(0,n.kt)("p",null,"Specific uids removed are provided in the changelog and the ego4d.json metadata has been updated appropriately."),(0,n.kt)("h3",{id:"additional-annotations-formats-fho_mainjson"},"Additional annotations formats (fho_main.json)"),(0,n.kt)("p",null,"There have been several requests for additional annotation formats, particularly for a unified json across the FHO tasks, which is now available. Please see the schemas page for additional details: ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/annotations-schemas"},"annotation schemas")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/FHO_Overview"},"FHO Overview")," for details."),(0,n.kt)("h3",{id:"vq-annotation-updates"},"VQ Annotation Updates"),(0,n.kt)("p",null,"Some bounding boxes were incorrectly rotated for VQ2D annotations and have been corrected.  This is the only set of corrections which is expected to have a significant impact on results and we will share updated baseline numbers with the release.  Note that this was corrected in the v1.0.5 version of the dataset for the prior '22 VQ challenge and was the existing annotations for that challenge."),(0,n.kt)("h3",{id:"paco-parts-and-attributes-of-common-objects-dataset"},"PACO (Parts and Attributes of Common Objects) Dataset"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2301.01795"},"PACO (Parts and Attributes of Common Objects) Dataset")),(0,n.kt)("p",null,"Object models are gradually progressing from predicting just category labels to providing detailed descriptions of object instances. This motivates the need for large datasets which go beyond traditional object masks and provide richer annotations such as part masks and attributes. Hence, we introduce PACO: Parts and Attributes of Common Objects. It spans 75 object categories, 456 object-part categories and 55 attributes across image (LVIS) and video (Ego4D) datasets. We provide 641K part masks annotated across 260K object boxes, with roughly half of them exhaustively annotated with attributes as well. We design evaluation metrics and provide benchmark results for three tasks on the dataset: part mask segmentation, object and part attribute prediction and zero-shot instance detection. Dataset, models, and code are open-sourced: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/paco"},"https://github.com/facebookresearch/paco")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PACO",src:a(1428).Z,width:"3121",height:"2048"})),(0,n.kt)("h3",{id:"egotracks"},"EgoTracks"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/data/egotracks"},"EgoTracks Documentation")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2301.03213"},"EgoTracks: A Long-term Egocentric Visual Object Tracking Dataset")),(0,n.kt)("p",null,'Visual object tracking is a key component to many egocentric vision problems. However, the full spectrum of challenges of egocentric tracking faced by an embodied AI is underrepresented in many existing datasets; these tend to focus on relatively short, third-person videos. Egocentric video has several distinguishing characteristics from those commonly found in past datasets: frequent large camera motions and hand interactions with objects commonly lead to occlusions or objects exiting the frame, and object appearance can change rapidly due to widely different points of view, scale, or object states. Embodied tracking is also naturally long-term, and being able to consistently (re-)associate objects to their appearances and disappearances over as long as a lifetime is critical. Previous datasets under-emphasize this re-detection problem, and their "framed" nature has led to adoption of various spatiotemporal priors that we find do not necessarily generalize to egocentric video. We thus introduce EgoTracks, a new dataset for long-term egocentric visual object tracking. Sourced from the Ego4D dataset, this new dataset presents a significant challenge to recent state-of-the-art single-object tracking models, which we find score poorly on traditional tracking metrics for our new dataset, compared to popular benchmarks. We further show improvements that can be made to a STARK tracker to significantly increase its performance on egocentric data, resulting in a baseline model we call EgoSTARK. We publicly release our annotations and benchmark, hoping our dataset leads to further advancements in tracking.'),(0,n.kt)("h2",{id:"prior-incremental-updates"},"Prior Incremental Updates"),(0,n.kt)("h3",{id:"downsampled-videos"},"Downsampled Videos"),(0,n.kt)("p",null,"Downsampled videos have been added - download as dataset ",(0,n.kt)("inlineCode",{parentName:"p"},"video_540ss")," via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/blob/main/ego4d/cli/README.md"},"CLI"),".  Videos have been scaled to 540px on the short side - more details available via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/videos"},"docs")),(0,n.kt)("h3",{id:"feature-updates"},"Feature Updates"),(0,n.kt)("p",null,"An error in feature generation that added some noise was corrected.  Full detail will be provided shortly, and the features have already been updated."),(0,n.kt)("p",null,"Omnivore FP16 features were added: ",(0,n.kt)("a",{parentName:"p",href:"https://ego4d-data.org/docs/data/features/"},"Features")),(0,n.kt)("p",null,"Additional features will be released shortly as well.  (EgoVLP & Narration Embeddings)"),(0,n.kt)("h2",{id:"further-details"},"Further Details"),(0,n.kt)("p",null,"Upon release, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/blob/main/CHANGELOG"},"CHANGELOG")," has more detailed specifics on the update as well.  And we'll post on the ",(0,n.kt)("a",{parentName:"p",href:"https://discuss.ego4d-data.org/"},"Ego4D forum")," with details and follow up discussion there."))}u.isMDXComponent=!0},1428:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/paco_challenge_sample-cdb71e1478f5bebbbb8b892620ade5d1.png"}}]);