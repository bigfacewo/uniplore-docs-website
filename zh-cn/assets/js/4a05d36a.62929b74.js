"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[4202],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,k=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(k,o(o({ref:e},p),{},{components:r})):n.createElement(k,o({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47650:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={},u=void 0,c={unversionedId:"tutorial-aistudio/preprocess/Merge Data",id:"tutorial-aistudio/preprocess/Merge Data",title:"Merge Data",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/preprocess/Merge Data.md",sourceDirName:"tutorial-aistudio/preprocess",slug:"/tutorial-aistudio/preprocess/Merge Data",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Merge Data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/preprocess/Merge Data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Impute",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Impute"},next:{title:"Outliers",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/preprocess/Outliers"}},p={},s=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:s};function f(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u201c\u5408\u5e76\u6570\u636e\u201d\uff08Merge Data\uff09"),"\u63a7\u4ef6\u7528\u4e8e\u6839\u636e\u7528\u6237\u6240\u9009\u5c5e\u6027\u5408\u5e76\u4e24\u4e2a\u6570\u636e\u96c6\uff0c\u9996\u5148\uff0c\u83b7\u53d6\u6765\u81ea\u4e00\u4e2a\u6570\u636e\u96c6\u7684\u5408\u5e76\u5c5e\u6027\u5e76\u4ece\u53e6\u4e00\u4e2a\u5408\u5e76\u5c5e\u6027\u4e2d\u641c\u7d22\u5339\u914d\u503c\u3002\u5982\u679c\u6839\u636e\u5408\u5e76\u5c5e\u6027\u4ece\u53e6\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u627e\u5230\u591a\u4e2a\u5b9e\u4f8b\uff0c\u5219\u4ece\u53ef\u7528\u7684\u5408\u5e76\u5c5e\u6027\u4e2d\u5220\u9664\u8be5\u5c5e\u6027\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"),(0,l.kt)("li",{parentName:"ul"},"data: \u53e6\u4e00\u4e2a\u6570\u636e\u96c6"))),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u5408\u5e76\u540e\u7684\u6570\u636e\u96c6")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u201c\u5408\u5e76\u6570\u636e\u201d\uff08Merge Data\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(79325).Z}," ",(0,l.kt)("img",{src:r(6291).Z,width:"367",height:"488"})," ")),(0,l.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u9009\u9879"),(0,l.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,l.kt)("th",null,"\u6837\u4f8b\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u6570\u636e\u96c6"),(0,l.kt)("td",null,"\u4e00\u4e2a\u6570\u636e\u96c6\u4fe1\u606f"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u9644\u52a0\u6570\u636e\u96c6"),(0,l.kt)("td",null,"\u53e6\u4e00\u4e2a\u6570\u636e\u96c6\u4fe1\u606f"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u5408\u5e76\u65b9\u5f0f"),(0,l.kt)("td",null,"\u5408\u5e76\u65b9\u5f0f\uff1a",(0,l.kt)("br",null),"\u2003\u2003\u4ece\u9644\u52a0\u6570\u636e\u96c6\u9644\u52a0\u5217\uff1a\u8f93\u51fa\u6570\u636e\u96c6\u7684\u6240\u6709\u5b9e\u4f8b\uff0c\u4e14\u5b9e\u4f8b\u540e\u8ffd\u52a0\u4e0e\u53e6\u4e00\u4e2a\u6570\u636e\u96c6\u76f8\u5339\u914d\u7684\u4fe1\u606f\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5339\u914d\u4fe1\u606f\uff0c\u8ffd\u52a0\u672a\u77e5\u503c\u3002",(0,l.kt)("br",null),"\u2003\u2003\u5339\u914d\u884c\uff1a\u4e0ea\u7c7b\u4f3c\uff0c\u4f46\u6ca1\u6709\u5339\u914d\u7684\u5b9e\u4f8b\u5c06\u4e0d\u8f93\u51fa\u3002",(0,l.kt)("br",null),"\u2003\u2003\u8fde\u63a5\u8868\uff0c\u5408\u5e76\u884c\uff1a\u8f93\u51fa\u6765\u81ea\u4e24\u4e2a\u8f93\u5165\u7684\u6240\u6709\u5b9e\u4f8b\uff0c\u5373\u4f7f\u53ef\u80fd\u627e\u4e0d\u5230\u5339\u914d\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5339\u914d\uff0c\u5206\u914d\u672a\u77e5\u503c\u3002"),(0,l.kt)("td",null))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528\u4e24\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u4e0d\u540c\u7684\u4e24\u4e2a\u6570\u636e\u96c6\uff0c\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u52a0\u8f7d\u6570\u636e\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u5408\u5e76\u6570\u636e\u201d\uff08Merge Data\uff09"),"\u63a7\u4ef6\u5bf9\u4e24\u4e2a\u6570\u636e\u96c6\u8fdb\u884c\u5408\u5e76\uff0c\u4e4b\u540e\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u96c6\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(50316).Z}," ",(0,l.kt)("img",{src:r(11964).Z,width:"369",height:"338"})," ")),(0,l.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d car \u4ee5\u53ca wine \u6570\u636e\u96c6\uff0c\u4f7f\u7528\u201c\u8fde\u63a5\u8868\uff0c\u5408\u5e76\u884c\u201d\u7684\u65b9\u6cd5\u5408\u5e76\u6570\u636e\u96c6\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:r(19256).Z}," ",(0,l.kt)("img",{src:r(24313).Z,width:"1477",height:"1736"})," ")))}f.isMDXComponent=!0},79325:function(t,e,r){e.Z=r.p+"assets/files/param-d2cb7d2eb4753d5d91162a8b85a01d0f.png"},19256:function(t,e,r){e.Z=r.p+"assets/files/workflow-result-03a9b03c2f0d709b958ccf8d23c65b34.png"},50316:function(t,e,r){e.Z=r.p+"assets/files/workflow-d036e29e9c4686ca2e61e2aa48f56faf.png"},6291:function(t,e,r){e.Z=r.p+"assets/images/param-d2cb7d2eb4753d5d91162a8b85a01d0f.png"},24313:function(t,e,r){e.Z=r.p+"assets/images/workflow-result-03a9b03c2f0d709b958ccf8d23c65b34.png"},11964:function(t,e,r){e.Z=r.p+"assets/images/workflow-d036e29e9c4686ca2e61e2aa48f56faf.png"}}]);