"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[2096],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return g}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),E=l(i),g=n,f=E["".concat(u,".").concat(g)]||E[g]||p[g]||a;return i?r.createElement(f,s(s({ref:t},c),{},{components:i})):r.createElement(f,s({ref:t},c))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=E;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<a;l++)s[l]=i[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}E.displayName="MDXCreateElement"},90725:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=i(87462),n=i(63366),a=(i(67294),i(3905)),s=["components"],o={},u=void 0,l={unversionedId:"tutorial-aistudio/visualize/Periodogram",id:"tutorial-aistudio/visualize/Periodogram",title:"Periodogram",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/visualize/Periodogram.md",sourceDirName:"tutorial-aistudio/visualize",slug:"/tutorial-aistudio/visualize/Periodogram",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/visualize/Periodogram",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/visualize/Periodogram.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Line Chart",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/visualize/Line Chart"},next:{title:"Polynomial Regression",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/visualize/Polynomial Regression"}},c={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],E={toc:p};function g(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},E,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u5468\u671f\u6027\uff08Periodogram\uff09\u201d"),"\u63a7\u4ef6\u901a\u8fc7\u7ebf\u6027\u56fe\u8868\u7684\u65b9\u5f0f\u53ef\u89c6\u5316\u65f6\u5e8f\u6570\u636e\uff0c\u540c\u65f6\u53ef\u4ee5\u63a5\u6536\u65f6\u5e8f\u6a21\u578b\u9884\u6d4b\u7ed3\u679c\uff0c\u5c55\u793a\u9884\u6d4b\u4fe1\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tsd\uff1a\u65f6\u5e8f\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u5468\u671f\u6027\uff08Periodogram\uff09\u201d"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:i(82356).Z}," ",(0,a.kt)("img",{src:i(23623).Z,width:"359",height:"126"})," ")),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u7ed3\u679c\u201d"),"\u6309\u94ae\uff0c\u67e5\u770b\u6570\u636e\u96c6\u8be6\u60c5\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:i(66137).Z}," ",(0,a.kt)("img",{src:i(40818).Z,width:"1102",height:"700"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5468\u671f\u5c5e\u6027"),(0,a.kt)("td",null,"\u9009\u62e9\u9700\u8981\u8fdb\u884c\u7ed8\u5236\u56fe\u8868\u7684\u5c5e\u6027"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\uff08File\uff09\u201d"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u8f6c\u6362\u65f6\u95f4\u5e8f\u5217\uff08As Timeseries\uff09\u201d"),"\u63a7\u4ef6\u628a\u8f93\u5165\u6570\u636e\u96c6\u8f6c\u6362\u4e3a\u65f6\u5e8f\u6570\u636e\u96c6\uff0c\u63a5\u7740\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u5468\u671f\u6027\uff08Periodogram\uff09\u201d"),"\u63a7\u4ef6\u5c55\u793a\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:i(70619).Z}," ",(0,a.kt)("img",{src:i(56535).Z,width:"422",height:"127"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d\u201cairpassenger\u201d\u6570\u636e\u96c6\uff0c\u8fd0\u884c",(0,a.kt)("strong",{parentName:"p"},"\u201c\u8f6c\u6362\u65f6\u95f4\u5e8f\u5217\uff08As Timeseries\uff09\u201d"),"\u63a7\u4ef6\u4e2d\uff0c\u6392\u5e8f\u65b9\u6848\u9009\u62e9\u6392\u5e8f\u5c5e\u6027\uff0c\u8bbe\u7f6e\u6392\u5e8f\u5c5e\u6027\u4e3a\u3010Month\u3011\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a:\n",(0,a.kt)("a",{target:"_blank",href:i(98484).Z},(0,a.kt)("img",{src:i(35943).Z,width:"1456",height:"703"}))))}g.isMDXComponent=!0},82356:function(e,t,i){t.Z=i.p+"assets/files/param-be63ba39454ff7dd5d91c86e165b9691.png"},66137:function(e,t,i){t.Z=i.p+"assets/files/visualization-a55b7a7508a3d0cd89012ae9db74329a.png"},98484:function(e,t,i){t.Z=i.p+"assets/files/workflow-result-5a6ee895d8ddfa2239860987d7ee25b9.png"},70619:function(e,t,i){t.Z=i.p+"assets/files/workflow-924583dbeb42d2e80e76d74b0e5103af.png"},23623:function(e,t){t.Z="data:image/png;base64,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"},40818:function(e,t,i){t.Z=i.p+"assets/images/visualization-a55b7a7508a3d0cd89012ae9db74329a.png"},35943:function(e,t,i){t.Z=i.p+"assets/images/workflow-result-5a6ee895d8ddfa2239860987d7ee25b9.png"},56535:function(e,t){t.Z="data:image/png;base64,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"}}]);