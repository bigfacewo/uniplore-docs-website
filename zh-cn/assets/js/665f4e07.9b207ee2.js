"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[1979],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,k=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(k,o(o({ref:e},p),{},{components:r})):n.createElement(k,o({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50260:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={},u=void 0,c={unversionedId:"tutorial-aistudio/model/Tree",id:"tutorial-aistudio/model/Tree",title:"Tree",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/model/Tree.md",sourceDirName:"tutorial-aistudio/model",slug:"/tutorial-aistudio/model/Tree",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/model/Tree",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/model/Tree.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SVM",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/model/SVM"},next:{title:"BIRCH",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/clustering/BIRCH"}},p={},s=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:s};function f(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\uff08Tree\uff09\u201d"),"\u63a7\u4ef6\u4e3b\u8981\u4f7f\u7528\u5c42\u6b21\u805a\u7c7b\u7b97\u6cd5\u6765\u5212\u5206\u6570\u636e\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"),(0,l.kt)("li",{parentName:"ul"},"pre: \u9884\u5904\u7406\u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lrn: \u5728\u4ea4\u4e92\u9875\u9762\u4e2d\u914d\u7f6e\u53c2\u6570\u540e\u7684\u51b3\u7b56\u6811\u5b66\u4e60\u7b97\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"mod: \u5df2\u8bad\u7ec3\u7684\u6a21\u578b\uff08\u4ec5\u5f53\u8f93\u5165\u7aefdata\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u6709\u8f93\u51fa\u4fe1\u606f\uff09")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\uff08Tree\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(98202).Z}," ",(0,l.kt)("img",{src:r(16957).Z,width:"364",height:"359"})," ")),(0,l.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u9009\u9879"),(0,l.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,l.kt)("th",null,"\u6837\u4f8b\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u6a21\u578b\u540d\u79f0"),(0,l.kt)("td",null,"\u8bbe\u7f6e\u6a21\u578b\u540d\u79f0\uff0c\u7528\u4e8e\u5728\u5176\u4ed6\u7ec4\u4ef6\u4e2d\u533a\u5206\u4e0d\u540c\u7684\u6a21\u578b"),(0,l.kt)("td",null,"Tree")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u53f6\u5b50\u8282\u70b9\u4e2d\u7684\u6700\u5c0f\u5b9e\u4f8b\u6570"),(0,l.kt)("td",null,"\u5982\u679c\u9009\u4e2d\uff0c\u7b97\u6cd5\u4e0d\u4f1a\u5c06\u5c0f\u4e8e\u6307\u5b9a\u6570\u91cf\u7684\u8bad\u7ec3\u5b9e\u4f8b\u653e\u5165\u4efb\u4f55\u5206\u652f"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u5206\u5272\u5b50\u96c6\u4e0d\u5c0f\u4e8e"),(0,l.kt)("td",null,"\u7981\u6b62\u7b97\u6cd5\u7528\u5c0f\u4e8e\u7ed9\u5b9a\u6570\u91cf\u7684\u5b9e\u4f8b\u6765\u5206\u5272\u8282\u70b9"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u9650\u5236\u6700\u5927\u7684\u6811\u6df1\u5ea6"),(0,l.kt)("td",null,"\u5c06\u5206\u7c7b\u6811\u7684\u6df1\u5ea6\u9650\u5236\u4e3a\u6307\u5b9a\u7684\u8282\u70b9\u7ea7\u6570"),(0,l.kt)("td",null))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u8fde\u63a5",(0,l.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\uff08Tree\uff09\u201d"),"\u63a7\u4ef6\u8fdb\u884c\u805a\u7c7b\uff0c\u4e4b\u540e\u628a",(0,l.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u4ee5\u53ca",(0,l.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\uff08Tree\uff09\u201d"),"\u63a7\u4ef6\u4e0e",(0,l.kt)("strong",{parentName:"p"},"\u201c\u9884\u6d4b\uff08Predictions\uff09\u201d"),"\u63a7\u4ef6\u8fde\u63a5\u8d77\u6765\u67e5\u770b\u9884\u6d4b\u7684\u7ed3\u679c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(91252).Z}," ",(0,l.kt)("img",{src:r(92177).Z,width:"404",height:"175"})," ")),(0,l.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201ciris\u201d\u6570\u636e\u96c6\uff0c\u5176\u4f59\u53c2\u6570\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(34557).Z}," ",(0,l.kt)("img",{src:r(489).Z,width:"1703",height:"721"})," ")))}f.isMDXComponent=!0},98202:function(t,e,r){e.Z=r.p+"assets/files/param-b46bf9a472bd7aee757269b1d37b64eb.png"},34557:function(t,e,r){e.Z=r.p+"assets/files/workflow-result-3fa8f6bfd26a39c072c0c2fa09399878.png"},91252:function(t,e,r){e.Z=r.p+"assets/files/workflow-a8cb254054fbcf811c0f84b1ef649680.png"},16957:function(t,e,r){e.Z=r.p+"assets/images/param-b46bf9a472bd7aee757269b1d37b64eb.png"},489:function(t,e,r){e.Z=r.p+"assets/images/workflow-result-3fa8f6bfd26a39c072c0c2fa09399878.png"},92177:function(t,e,r){e.Z=r.p+"assets/images/workflow-a8cb254054fbcf811c0f84b1ef649680.png"}}]);