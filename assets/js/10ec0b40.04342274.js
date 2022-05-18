"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[8460],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return A}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=c(r),A=a,f=d["".concat(s,".").concat(A)]||d[A]||p[A]||o;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function A(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37027:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return A},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={},s=void 0,c={unversionedId:"tutorial-aistudio/visualize/Correspondence Analysis",id:"tutorial-aistudio/visualize/Correspondence Analysis",title:"Correspondence Analysis",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/visualize/Correspondence Analysis.md",sourceDirName:"tutorial-aistudio/visualize",slug:"/tutorial-aistudio/visualize/Correspondence Analysis",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Correspondence Analysis",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/visualize/Correspondence Analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Correlogram",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Correlogram"},next:{title:"Data Info",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Data Info"}},l={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:p};function A(t){var e=t.components,u=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u201c\u5bf9\u5e94\u5206\u6790\uff08Correspondence Analysis\uff09\u201d"),"\u63a7\u4ef6\u7528\u4e8e\u5bf9\u5206\u7c7b\u591a\u53d8\u91cf\u6570\u636e\u8fdb\u884c\u5bf9\u5e94\u5206\u6790\u3002Correspondence Analysis\uff08CA\uff09\u6839\u636e\u8f93\u5165\u6570\u636e\u96c6\uff0c\u8ba1\u7b97\u5176\u5bf9\u5e94\u7684\u7ebf\u6027\u53d8\u6362\u3002\u548c PCA \u76f8\u4f3c\uff0cCA \u88ab\u7528\u6765\u8ba1\u7b97\u79bb\u6563\u6570\u636e\u800c\u975e\u8fde\u7eed\u6570\u636e\u7684\u7ebf\u6027\u53d8\u6362\u3002"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,o.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u65e0")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u201c\u5bf9\u5e94\u5206\u6790\uff08Correspondence Analysis\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{target:"_blank",href:r(63344).Z}," ",(0,o.kt)("img",{src:r(51043).Z,width:"361",height:"129"})," ")),(0,o.kt)("p",null,"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u7ed3\u679c\u201d"),"\u6309\u94ae\uff0c\u67e5\u770b\u6570\u636e\u96c6\u8be6\u60c5\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{target:"_blank",href:r(89179).Z}," ",(0,o.kt)("img",{src:r(79172).Z,width:"1322",height:"650"})," ")),(0,o.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u9009\u9879"),(0,o.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,o.kt)("th",null,"\u6837\u4f8b\u503c")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u79bb\u6563\u5c5e\u6027"),(0,o.kt)("td",null,"\u5217\u51fa\u6570\u636e\u96c6\u4e2d\u7684\u6240\u6709\u79bb\u6563\u5c5e\u6027"),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u5750\u6807\u8f74"),(0,o.kt)("td",null,"\u5750\u6807\u8f74"),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u60ef\u91cf\u8d21\u732e"),(0,o.kt)("td",null,"\u8bf4\u660e\u5bf9\u4e8e\u5206\u6790\u5404\u4e2a\u7ef4\u5ea6\u7684\u7ed3\u679c\u80fd\u591f\u89e3\u91ca\u5217\u8054\u8868\u4e2d\u4e24\u53d8\u91cf\u8054\u7cfb\u7684\u7a0b\u5ea6"),(0,o.kt)("td",null))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,o.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u518d\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"\u201c\u5bf9\u5e94\u5206\u6790\uff08Correspondence Analysis\uff09\u201d"),"\u63a7\u4ef6\u8fdb\u884c\u5206\u6790\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{target:"_blank",href:r(29646).Z}," ",(0,o.kt)("img",{src:r(29212).Z,width:"307",height:"116"})," ")),(0,o.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201ctitanic\u201d\u6570\u636e\u96c6\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u201c\u5bf9\u5e94\u5206\u6790\uff08Correspondence Analysis\uff09\u201d"),"\u63a7\u4ef6\u5c06\u591a\u4e2a\u53d8\u91cf\u7ed8\u5236\u5230\u4e8c\u7ef4\u56fe\u5f62\u4e0a\uff0c\u4ee5\u4fbf\u4e8e\u770b\u51fa\u53d8\u91cf\u503c\u4e4b\u95f4\u7684\u5173\u7cfb\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{target:"_blank",href:r(5099).Z}," ",(0,o.kt)("img",{src:r(27657).Z,width:"1347",height:"649"})," ")))}A.isMDXComponent=!0},63344:function(t,e,r){e.Z=r.p+"assets/files/param-91582d7aa0b1c68c9ba5c339649b3da5.png"},89179:function(t,e,r){e.Z=r.p+"assets/files/visualization-14e3cb895cfa8eba4a2295c434c05c3e.png"},5099:function(t,e,r){e.Z=r.p+"assets/files/workflow-result-ee3ebe0a6e2bade4251dcd09f6f36396.png"},29646:function(t,e,r){e.Z=r.p+"assets/files/workflow-f70b24da70c25131b02ceeb8218d30eb.png"},51043:function(t,e){e.Z="data:image/png;base64,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"},79172:function(t,e,r){e.Z=r.p+"assets/images/visualization-14e3cb895cfa8eba4a2295c434c05c3e.png"},27657:function(t,e,r){e.Z=r.p+"assets/images/workflow-result-ee3ebe0a6e2bade4251dcd09f6f36396.png"},29212:function(t,e){e.Z="data:image/png;base64,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"}}]);