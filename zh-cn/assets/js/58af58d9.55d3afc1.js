"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[5114],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),f=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=f(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=f(r),d=a,w=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return r?i.createElement(w,o(o({ref:t},l),{},{components:r})):i.createElement(w,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var f=2;f<n;f++)o[f]=r[f];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70627:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return u}});var i=r(87462),a=r(63366),n=(r(67294),r(3905)),o=["components"],s={},c=void 0,f={unversionedId:"tutorial-aistudio/preprocess/Distance Matrix",id:"tutorial-aistudio/preprocess/Distance Matrix",title:"Distance Matrix",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/preprocess/Distance Matrix.md",sourceDirName:"tutorial-aistudio/preprocess",slug:"/tutorial-aistudio/preprocess/Distance Matrix",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Distance Matrix",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/preprocess/Distance Matrix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Sampler",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Data Sampler"},next:{title:"Distance Transformation",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Distance Transformation"}},l={},u=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u201c\u8ddd\u79bb\u77e9\u9635\u201d\uff08Distance Matrix\uff09"),"\u63a7\u4ef6\u4ee5\u7c7b\u4f3c\u70ed\u529b\u56fe\u7684\u65b9\u5f0f\u5411\u7528\u6237\u5c55\u793a\u4e86\u8ddd\u79bb\u77e9\u9635\u3002\u63a7\u4ef6\u5c55\u793a\u4e86\u4e00\u4e2a\u5305\u542b\u8ddd\u79bb\u7684\u4e8c\u7ef4\u8ddd\u79bb\u77e9\u9635\uff0c\u77e9\u9635\u5927\u5c0f\u7531\u8f93\u5165\u6570\u636e\u96c6\u4e2d\u5143\u7d20\u6570\u91cf\u5b9a\u4e49\u3002"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dis\uff1a\u8ddd\u79bb\u77e9\u9635"))),(0,n.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dis\uff1a\u8ddd\u79bb\u77e9\u9635"),(0,n.kt)("li",{parentName:"ul"},"data\uff1a\u7531\u8ddd\u79bb\u77e9\u9635\u4e2d\u7684\u8ddd\u79bb\u6784\u6210\u7684\u6570\u636e\u96c6")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u201c\u8ddd\u79bb\u77e9\u9635\u201d\uff08Distance Matrix\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{target:"_blank",href:r(58340).Z}," ",(0,n.kt)("img",{src:r(71263).Z,width:"363",height:"142"})," ")),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d"),"\u6309\u94ae\uff0c\u53ef\u67e5\u770b\u8ddd\u79bb\u77e9\u9635\uff1a\n",(0,n.kt)("a",{target:"_blank",href:r(15161).Z}," ",(0,n.kt)("img",{src:r(32261).Z,width:"882",height:"776"})," ")),(0,n.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u7136\u540e\u8fde\u63a5",(0,n.kt)("strong",{parentName:"p"},"\u201c\u8ddd\u79bb\u8f6c\u6362\u201d\uff08Distances\uff09"),"\u63a7\u4ef6\u4ee5\u8ba1\u7b97\u8ddd\u79bb\u77e9\u9635\uff0c\u4e4b\u540e\u8fde\u63a5",(0,n.kt)("strong",{parentName:"p"},"\u201c\u8ddd\u79bb\u53d8\u6362\u201d\uff08Distance Matrix\uff09"),"\u63a7\u4ef6\u67e5\u770b\u8ddd\u79bb\u77e9\u9635\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{target:"_blank",href:r(32578).Z}," ",(0,n.kt)("img",{src:r(46871).Z,width:"376",height:"122"})," ")),(0,n.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d iris \u6570\u636e\u96c6\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{target:"_blank",href:r(19733).Z}," ",(0,n.kt)("img",{src:r(62561).Z,width:"1248",height:"779"})," ")))}d.isMDXComponent=!0},15161:function(e,t,r){t.Z=r.p+"assets/files/interaction-8b4c5a8a6222d8e24dc082700e4f4a05.png"},58340:function(e,t,r){t.Z=r.p+"assets/files/param-aca7e77e8fe0ddb6a48a06dce0b0140c.png"},19733:function(e,t,r){t.Z=r.p+"assets/files/workflow-result-04d465317dd4967e837c18aae45e2384.png"},32578:function(e,t,r){t.Z=r.p+"assets/files/workflow-de245b776fcad01e0cfb1660e3a7bf8e.png"},32261:function(e,t,r){t.Z=r.p+"assets/images/interaction-8b4c5a8a6222d8e24dc082700e4f4a05.png"},71263:function(e,t){t.Z="data:image/png;base64,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"},62561:function(e,t,r){t.Z=r.p+"assets/images/workflow-result-04d465317dd4967e837c18aae45e2384.png"},46871:function(e,t){t.Z="data:image/png;base64,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"}}]);