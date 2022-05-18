"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[3243],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6227:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},u=void 0,c={unversionedId:"tutorial-aistudio/model/AutoML Training",id:"tutorial-aistudio/model/AutoML Training",title:"AutoML Training",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/model/AutoML Training.md",sourceDirName:"tutorial-aistudio/model",slug:"/tutorial-aistudio/model/AutoML Training",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/model/AutoML Training",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/model/AutoML Training.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AdaBoost",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/model/AdaBoost"},next:{title:"CN2 Rule Induction",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/model/CN2 Rule Induction"}},s={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:p};function f(t){var e=t.components,l=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff08AutoML Training\uff09\u201d"),"\u63a7\u4ef6\u6839\u636e\u6570\u636e\u96c6\u4ee5\u53ca\u7528\u6237\u7684\u914d\u7f6e\u8fdb\u884c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff0c\u81ea\u52a8\u6784\u5efa\u5408\u9002\u7684\u7b97\u6cd5\u6a21\u578b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"mod: \u5df2\u8bad\u7ec3\u7684\u6a21\u578b\uff08\u4ec5\u5f53\u8f93\u5165\u7aefdata\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u6709\u8f93\u51fa\u4fe1\u606f\uff09",(0,a.kt)("hr",null))))),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff08AutoML Training\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(33096).Z}," ",(0,a.kt)("img",{src:n(21289).Z,width:"364",height:"862"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6a21\u578b\u540d\u79f0"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u6a21\u578b\u540d\u79f0\uff0c\u7528\u4e8e\u5728\u5176\u4ed6\u7ec4\u4ef6\u4e2d\u533a\u5206\u4e0d\u540c\u7684\u6a21\u578b"),(0,a.kt)("td",null,"AutoML")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u57fa\u672c\u914d\u7f6e"),(0,a.kt)("td",null,"\u8fed\u4ee3\u6b21\u6570\uff1a\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\u4f18\u5316\u8fc7\u7a0b\u7684\u8fed\u4ee3\u6b21\u6570 ",(0,a.kt)("br",null),"\u6bcf\u4ee3\u4fdd\u7559\u6a21\u578b\u6570\uff1a\u6bcf\u6b21\u8fed\u4ee3\u4ea7\u751f\u7684\u6a21\u578b\u4e2d\u9700\u8981\u4fdd\u7559\u7684\u6a21\u578b\u6570",(0,a.kt)("br",null),"\u5355\u4e2a\u4ea7\u751f\u540e\u4ee3\u6570\uff1a\u6bcf\u4e2a\u9057\u4f20\u7f16\u7a0b\u751f\u6210\u4e2d\u4ea7\u751f\u7684\u540e\u4ee3\u6570",(0,a.kt)("br",null),"\u7ec8\u6b62\u68c0\u6d4b\u8fed\u4ee3\u6570\uff1a\u5982\u679c\u751f\u6210\u7684\u6a21\u578b\u6ca1\u6709\u4f18\u5316\u6539\u8fdb\uff0c\u591a\u5c11\u4ee3\u4e4b\u540e\u5e94\u8be5\u7ec8\u6b62",(0,a.kt)("br",null),"\u542f\u7528\u968f\u673a\u79cd\u5b50\uff1a\u5f00\u542f\u540e\u6bcf\u6b21\u6267\u884c\u7ed3\u679c\u90fd\u76f8\u540c",(0,a.kt)("br",null),"\u4efb\u52a1\u7c7b\u578b\uff1a\u6839\u636e\u6570\u636e\u96c6\u81ea\u52a8\u5212\u5206\u4efb\u52a1\u7c7b\u578b\u662f\u5c5e\u4e8e\u56de\u5f52\u8fd8\u662f\u5206\u7c7b"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6a21\u578b\u6307\u6807\u9009\u62e9"),(0,a.kt)("td",null,"\u7528\u4e8e\u6bd4\u8f83\u751f\u6210\u7684\u673a\u5668\u6a21\u578b\u7684\u6548\u679c"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u8fde\u63a5",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff08AutoML Training\uff09\u201d"),"\u63a7\u4ef6\u6784\u5efa\u6a21\u578b\uff0c\u4e4b\u540e\u628a",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u4ee5\u53ca",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff08AutoML Training\uff09\u201d"),"\u63a7\u4ef6\u4e0e",(0,a.kt)("strong",{parentName:"p"},"\u201c\u9884\u6d4b\uff08Predictions\uff09\u201d"),"\u63a7\u4ef6\u8fde\u63a5\u8d77\u6765\u67e5\u770b\u9884\u6d4b\u7684\u7ed3\u679c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:n(15005).Z}," ",(0,a.kt)("img",{src:n(94555).Z,width:"404",height:"194"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201ciris\u201d\u6570\u636e\u96c6\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u5316\u673a\u5668\u5b66\u4e60\uff08AutoML Training\uff09\u201d"),"\u63a7\u4ef6\u9ed8\u8ba4\u53c2\u6570\u8fd0\u884c\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002\n",(0,a.kt)("a",{target:"_blank",href:n(67238).Z}," ",(0,a.kt)("img",{src:n(25101).Z,width:"1703",height:"854"})," ")))}f.isMDXComponent=!0},33096:function(t,e,n){e.Z=n.p+"assets/files/param-5b53ad2bd7fef726d91f89fca464f247.png"},67238:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-4ee3fa5f6dbee4d6165b09fd9d834483.png"},15005:function(t,e,n){e.Z=n.p+"assets/files/workflow-1c2ab89433d38619de9b783ccd981404.png"},21289:function(t,e,n){e.Z=n.p+"assets/images/param-5b53ad2bd7fef726d91f89fca464f247.png"},25101:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-4ee3fa5f6dbee4d6165b09fd9d834483.png"},94555:function(t,e,n){e.Z=n.p+"assets/images/workflow-1c2ab89433d38619de9b783ccd981404.png"}}]);