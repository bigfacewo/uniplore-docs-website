"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[9526],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),f=c(n),d=r,E=f["".concat(u,".").concat(d)]||f[d]||p[d]||l;return n?i.createElement(E,a(a({ref:e},s),{},{components:n})):i.createElement(E,a({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39988:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],o={},u=void 0,c={unversionedId:"tutorial-aistudio/visualize/Silhouette Plot",id:"tutorial-aistudio/visualize/Silhouette Plot",title:"Silhouette Plot",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/visualize/Silhouette Plot.md",sourceDirName:"tutorial-aistudio/visualize",slug:"/tutorial-aistudio/visualize/Silhouette Plot",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Silhouette Plot",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/visualize/Silhouette Plot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sieve Diagram",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Sieve Diagram"},next:{title:"Spiralogram",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Spiralogram"}},s={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:p};function d(t){var e=t.components,o=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,i.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u201c\u8f6e\u5ed3\u56fe\uff08Silhouette Plot\uff09\u201d"),"\u63a7\u4ef6\u7528\u4e8e\u5bf9\u5206\u7c7b\u591a\u53d8\u91cf\u6570\u636e\u8fdb\u884c\u5bf9\u5e94\u5206\u6790\u3002Correspondence Analysis\uff08CA\uff09\u6839\u636e\u8f93\u5165\u6570\u636e\u96c6\uff0c\u8ba1\u7b97\u5176\u5bf9\u5e94\u7684\u7ebf\u6027\u53d8\u6362\u3002\u548c PCA \u76f8\u4f3c\uff0cCA \u88ab\u7528\u6765\u8ba1\u7b97\u79bb\u6563\u6570\u636e\u800c\u975e\u8fde\u7eed\u6570\u636e\u7684\u7ebf\u6027\u53d8\u6362\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u201c\u8f6e\u5ed3\u56fe\uff08Silhouette Plot\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(67819).Z}," ",(0,l.kt)("img",{src:n(23560).Z,width:"365",height:"127"})," ")),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u7ed3\u679c\u201d"),"\u6309\u94ae\uff0c\u67e5\u770b\u6570\u636e\u96c6\u8be6\u60c5\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(4592).Z}," ",(0,l.kt)("img",{src:n(55208).Z,width:"1058",height:"758"})," ")),(0,l.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u9009\u9879"),(0,l.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,l.kt)("th",null,"\u6837\u4f8b\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u8ddd\u79bb"),(0,l.kt)("td",null,"\u8ddd\u79bb\u5ea6\u91cf\u65b9\u5f0f \u2003\u2003\u6b27\u5f0f\u8ddd\u79bb \u2003\u2003\u66fc\u54c8\u987f\u8ddd\u79bb"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u805a\u7c7b\u6807\u7b7e"),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u6309\u7c7b\u5206\u7ec4"),(0,l.kt)("td",null,"\u662f\u5426\u6839\u636e\u805a\u7c7b\u6807\u7b7e\u8fdb\u884c\u5206\u7ec4"),(0,l.kt)("td",null))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u63a5\u7740\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u8f6e\u5ed3\u56fe\uff08Silhouette Plot\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u8f6e\u5ed3\u56fe\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(84992).Z}," ",(0,l.kt)("img",{src:n(31202).Z,width:"250",height:"119"})," ")),(0,l.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201ciris\u201d\u6570\u636e\u96c6\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002\n",(0,l.kt)("a",{target:"_blank",href:n(6870).Z}," ",(0,l.kt)("img",{src:n(21191).Z,width:"1058",height:"758"})," ")))}d.isMDXComponent=!0},67819:function(t,e,n){e.Z=n.p+"assets/files/param-3210e706413b31bccee53db56d85100c.png"},4592:function(t,e,n){e.Z=n.p+"assets/files/visualization-1977de690eb6d137de7f1f4cd0af7c94.png"},6870:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-1977de690eb6d137de7f1f4cd0af7c94.png"},84992:function(t,e,n){e.Z=n.p+"assets/files/workflow-28d74c02710516016356c11f58bffc35.png"},23560:function(t,e){e.Z="data:image/png;base64,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"},55208:function(t,e,n){e.Z=n.p+"assets/images/visualization-1977de690eb6d137de7f1f4cd0af7c94.png"},21191:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-1977de690eb6d137de7f1f4cd0af7c94.png"},31202:function(t,e){e.Z="data:image/png;base64,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"}}]);