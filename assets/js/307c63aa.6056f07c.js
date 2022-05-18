"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[2285],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=o,w=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return r?n.createElement(w,l(l({ref:t},c),{},{components:r})):n.createElement(w,l({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14719:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={},u=void 0,s={unversionedId:"tutorial-aistudio/time-series/VAR Model",id:"tutorial-aistudio/time-series/VAR Model",title:"VAR Model",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/time-series/VAR Model.md",sourceDirName:"tutorial-aistudio/time-series",slug:"/tutorial-aistudio/time-series/VAR Model",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/time-series/VAR Model",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/time-series/VAR Model.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Seasonal Adjustment",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/time-series/Seasonal Adjustment"},next:{title:"Box Plot",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/visualize/Box Plot"}},c={},d=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:d};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201cVAR\u6a21\u578b\u201d\uff08VAR Model\uff09"),"\u63a7\u4ef6\u6839\u636e\u8f93\u5165\u6570\u636e\u96c6\uff0c\u4ee5\u53ca\u914d\u7f6e\u53c2\u6570\u8fdb\u884c\u6784\u5efaVAR\u65f6\u5e8f\u9884\u6d4b\u6a21\u578b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tsd\uff1a\u65f6\u5e8f\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tsm\uff1a\u65f6\u5e8f\u9884\u6d4b\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"fore\uff1a\u9884\u6d4b\u7684\u65f6\u5e8f\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"fit\uff1a\u6a21\u578b\u5b9e\u9645\u62df\u5408\u7684\u503c\uff0c\u7b49\u4e8e\u539f\u59cb\u503c\u51cf\u53bb\u6b8b\u5dee"),(0,a.kt)("li",{parentName:"ul"},"resid\uff1a\u6a21\u578b\u5728\u6bcf\u4e00\u6b65\u7684\u9884\u6d4b\u8bef\u5dee")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201cVAR\u6a21\u578b\u201d\uff08VAR Model\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(16131).Z}," ",(0,a.kt)("img",{src:r(59586).Z,width:"363",height:"807"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6a21\u578b\u540d\u79f0"),(0,a.kt)("td",null,"\u9ed8\u8ba4\u4e3a\u6839\u636e\u53c2\u6570\u914d\u7f6e\u81ea\u52a8\u751f\u6210\uff0c\u4e5f\u53ef\u7528\u6237\u81ea\u5b9a\u4e49"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6700\u5927\u81ea\u56de\u5f52\u79e9\u5e8f"),(0,a.kt)("td",{rowspan:"3"},(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Vector_autoregression"},"\u53c2\u6570\u4ecb\u7ecd")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u4f18\u5316AR\u65b9\u6848"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6dfb\u52a0\u8d8b\u52bf\u5411\u91cf"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u9884\u6d4b\u671f\u6570"),(0,a.kt)("td",null,"\u6a21\u578b\u9884\u6d4b\u591a\u5c11\u671f\u6570\u636e"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u7f6e\u4fe1\u533a\u95f4"),(0,a.kt)("td",null,"\u6307\u5b9a\u9884\u6d4b\u7ed3\u679c\u7684\u7f6e\u4fe1\u533a\u95f4"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u8fde\u63a5",(0,a.kt)("strong",{parentName:"p"},"\u201cVAR\u6a21\u578b\u201d\uff08VAR Model\uff09"),"\u63a7\u4ef6\u6784\u5efa\u65f6\u5e8f\u6a21\u578b\uff0c\u4e4b\u540e\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u9884\u6d4b\u7ed3\u679c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(63073).Z}," ",(0,a.kt)("img",{src:r(5003).Z,width:"362",height:"99"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d airpassengers \u6570\u636e\u96c6\uff0c\u5176\u4f59\u63a7\u4ef6\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(99743).Z}," ",(0,a.kt)("img",{src:r(55506).Z,width:"1467",height:"815"})," ")))}p.isMDXComponent=!0},16131:function(e,t,r){t.Z=r.p+"assets/files/param-d1fc87ae7dd22b7b0cd7a6fac831a192.png"},99743:function(e,t,r){t.Z=r.p+"assets/files/workflow-result-b8bf750c0fb71d8db56d0f77372a5151.png"},63073:function(e,t,r){t.Z=r.p+"assets/files/workflow-0af40eaef0a1ef8ef322665d74f4e5fe.png"},59586:function(e,t,r){t.Z=r.p+"assets/images/param-d1fc87ae7dd22b7b0cd7a6fac831a192.png"},55506:function(e,t,r){t.Z=r.p+"assets/images/workflow-result-b8bf750c0fb71d8db56d0f77372a5151.png"},5003:function(e,t){t.Z="data:image/png;base64,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"}}]);