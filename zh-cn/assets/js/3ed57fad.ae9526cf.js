"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[1193],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),c=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,p=b["".concat(o,".").concat(d)]||b[d]||f[d]||a;return r?i.createElement(p,u(u({ref:t},s),{},{components:r})):i.createElement(p,u({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var c=2;c<a;c++)u[c]=r[c];return i.createElement.apply(null,u)}return i.createElement.apply(null,r)}b.displayName="MDXCreateElement"},29645:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),u=["components"],l={},o=void 0,c={unversionedId:"tutorial-aistudio/feature-engineering/Select Best N Attributes",id:"tutorial-aistudio/feature-engineering/Select Best N Attributes",title:"Select Best N Attributes",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/feature-engineering/Select Best N Attributes.md",sourceDirName:"tutorial-aistudio/feature-engineering",slug:"/tutorial-aistudio/feature-engineering/Select Best N Attributes",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Select Best N Attributes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/feature-engineering/Select Best N Attributes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Rank"},next:{title:"Select Columns",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Select Columns"}},s={},f=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],b={toc:f};function d(e){var t=e.components,l=(0,n.Z)(e,u);return(0,a.kt)("wrapper",(0,i.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u7279\u5f81\u9009\u62e9\u201d\uff08Select Best N Attributes\uff09"),"\u63a7\u4ef6\u80fd\u591f\u6839\u636e\u6570\u636e\u81ea\u52a8\u5206\u6790\u51fa\u4e0e\u3010target\u3011\u5c5e\u6027\u76f8\u5173\u8054\u7684\u4e00\u822c\u5c5e\u6027\uff0c\u6839\u636e\u5173\u8054\u7a0b\u5ea6\u7b5b\u9009\u51fa\u6307\u5b9a\u4e2a\u6570\u7684\u5c5e\u6027\u7528\u4e8e\u5206\u6790\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u5904\u7406\u540e\u7684\u6570\u636e\u96c6")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u7279\u5f81\u9009\u62e9\u201d\uff08Select Best N Attributes\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(39677).Z}," ",(0,a.kt)("img",{src:r(61717).Z,width:"366",height:"152"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u7279\u5f81\u6570"),(0,a.kt)("td",null,"\u9700\u8981\u4fdd\u7559\u7684\u5c5e\u6027\u4e2a\u6570"),(0,a.kt)("td",null,"3"))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u52a0\u8f7d\u6570\u636e\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u201c\u81ea\u52a8\u7279\u5f81\u9009\u62e9\u201d\uff08Select Best N Attributes\uff09"),"\u63a7\u4ef6\u81ea\u52a8\u9009\u62e9\u5c5e\u6027\uff0c\u4e4b\u540e\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u96c6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(28407).Z}," ",(0,a.kt)("img",{src:r(98643).Z,width:"403",height:"246"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d iris \u6570\u636e\u96c6\uff0c\u5176\u4f59\u63a7\u4ef6\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(55801).Z}," ",(0,a.kt)("img",{src:r(28718).Z,width:"1106",height:"1133"})," ")))}d.isMDXComponent=!0},39677:function(e,t,r){t.Z=r.p+"assets/files/param-abd091c4ddc77a59b2ffaa11f3a19291.png"},55801:function(e,t,r){t.Z=r.p+"assets/files/workflow-result-76225226cd98bc3a788b7f7ffb5a6efd.png"},28407:function(e,t,r){t.Z=r.p+"assets/files/workflow-aa2f4c3674590fa72c65a20afe623c14.png"},61717:function(e,t){t.Z="data:image/png;base64,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"},28718:function(e,t,r){t.Z=r.p+"assets/images/workflow-result-76225226cd98bc3a788b7f7ffb5a6efd.png"},98643:function(e,t,r){t.Z=r.p+"assets/images/workflow-aa2f4c3674590fa72c65a20afe623c14.png"}}]);