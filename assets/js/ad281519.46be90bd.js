"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[9863],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=s(n),f=a,k=d["".concat(o,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81251:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],u={},o=void 0,s={unversionedId:"tutorial-aistudio/associate/Frequent Itemsets",id:"tutorial-aistudio/associate/Frequent Itemsets",title:"Frequent Itemsets",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/associate/Frequent Itemsets.md",sourceDirName:"tutorial-aistudio/associate",slug:"/tutorial-aistudio/associate/Frequent Itemsets",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/associate/Frequent Itemsets",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/associate/Frequent Itemsets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Association Rules",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/associate/Association Rules"},next:{title:"Corpus",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/io/Corpus"}},c={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u9891\u7e41\u9879\u96c6\u8868",id:"\u9891\u7e41\u9879\u96c6\u8868",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:p};function f(t){var e=t.components,u=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u201c\u9891\u7e41\u9879\u96c6\u201d\uff08Frequent Itemsets\uff09")," \u63a7\u4ef6\u57fa\u4e8e\u652f\u6301\u5ea6\u5ea6\u91cf\u89c4\u5219\u627e\u51fa\u6570\u636e\u96c6\u4e2d\u7684\u9891\u7e41\u9879\u96c6\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u7b26\u5408\u5224\u5b9a\u6761\u4ef6\u7684\u6570\u636e\u793a\u4f8b")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u201c\u9891\u7e41\u9879\u96c6\u201d\uff08Frequent Itemsets\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(9745).Z}," ",(0,l.kt)("img",{src:n(30690).Z,width:"365",height:"375"})," ")),(0,l.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u9009\u9879"),(0,l.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,l.kt)("th",null,"\u6837\u4f8b\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u67e5\u627e\u9879\u96c6"),(0,l.kt)("td",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u9879\u96c6\u641c\u7d22\u7684\u6761\u4ef6\u67e5\u627e\u9879\u96c6\uff1a",(0,l.kt)("br",null),"\u2003\u2003\u6700\u5c0f\u652f\u6301\u5ea6\uff1a\u6240\u8981\u751f\u6210\u7684\u9879\u96c6\u5728\u6570\u636e\u96c6\u4e2d\u7684\u6700\u5c0f\u5360\u6bd4\u3002\u5bf9\u4e8e\u5927\u578b\u6570\u636e\u96c6\u800c\u8a00\uff0c\u4e00\u822c\u8be5\u503c\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u8f83\u5c0f\u7684\u6570\u76ee\uff0c\u59822%~0.01%\u3002",(0,l.kt)("br",null),"\u2003\u2003\u6700\u5927\u9879\u96c6\u6570\uff1a\u8bbe\u7f6e\u9879\u96c6\u6570\u7684\u4e0a\u9650\u3002"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u8fc7\u6ee4\u9879\u96c6"),(0,l.kt)("td",null,"\u8fc7\u6ee4\u9879\u96c6\uff1a\u4e3a\u7528\u6237\u63d0\u4f9b\u7528\u6765\u8fc7\u6ee4\u9879\u96c6\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u64cd\u4f5c\u3002\u9700\u8981\u5339\u914d\u591a\u4e2a\u8bcd\u65f6\uff0c\u53ef\u4ee5\u7528\u9017\u53f7\u5c06\u5404\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5206\u9694\u5f00\u3002",(0,l.kt)("br",null),"\u2003\u2003\u5305\u542b\uff1a\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u8fc7\u6ee4\u9879\u96c6\u3002",(0,l.kt)("br",null),"\u2003\u2003\u6700\u5c0f\u5c42\u7ea7\uff1a\u9879\u96c6\u4e2d\u5fc5\u987b\u51fa\u73b0\u7684\u6700\u5c0f\u9879\u6570\u3002\u5982\u679c\u4e3a1\uff0c\u5c06\u663e\u793a\u6240\u6709\u9879\u96c6\u3002",(0,l.kt)("br",null),"\u2003\u2003\u6700\u5927\u5c42\u7ea7\uff1a\u9879\u96c6\u4e2d\u51fa\u73b0\u7684\u6700\u5927\u9879\u6570\u3002\u5373\u5982\u679c\u60f3\u8981\u67e5\u627e\u5177\u6709\u5c11\u4e8e 5 \u4e2a\u9879\u7684\u9879\u96c6\uff0c\u53ef\u5c06\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a 5\u3002"),(0,l.kt)("td",null))),(0,l.kt)("h4",{id:"\u9891\u7e41\u9879\u96c6\u8868"},"\u9891\u7e41\u9879\u96c6\u8868"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u53c2\u6570\u540e\uff0c\u70b9\u51fb\u201c\u67e5\u627e\u9879\u96c6\u201d\u6309\u94ae\uff0c\u5373\u53ef\u6839\u636e\u5f53\u524d\u6307\u5b9a\u8bbe\u7f6e\u67e5\u627e\u6ee1\u8db3\u8fc7\u6761\u4ef6\u7684\u9879\u96c6\u6811\u3002\n",(0,l.kt)("a",{target:"_blank",href:n(62831).Z}," ",(0,l.kt)("img",{src:n(37891).Z,width:"1348",height:"656"})," ")),(0,l.kt)("p",null,"\u8be5\u8868\u5305\u542b\u4ee5\u4e0b\u5217\uff1a"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u5217\u540d"),(0,l.kt)("th",{width:"650"},"\u8bf4\u660e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u9879\u96c6"),(0,l.kt)("td",null,"\u5173\u8054\u9879\u96c6\u4fe1\u606f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u652f\u6301\u5ea6"),(0,l.kt)("td",null,"\u6240\u751f\u6210\u7684\u9879\u96c6\u5305\u542b\u7684\u5b9e\u4f8b\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"%"),(0,l.kt)("td",null,"\u6240\u751f\u6210\u7684\u9879\u96c6\u5728\u6570\u636e\u96c6\u4e2d\u7684\u5360\u6bd4"))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,l.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u6587\u4ef6\u52a0\u8f7d\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u6570\u636e\u96c6\u5185\u5bb9\uff0c\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u201c\u9891\u7e41\u9879\u96c6\u201d\uff08Frequent Itemsets\uff09"),"\u67e5\u627e\u6ee1\u8db3\u6761\u4ef6\u7684\u9879\u96c6\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(41524).Z}," ",(0,l.kt)("img",{src:n(1676).Z,width:"336",height:"257"})," ")),(0,l.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d titanic \u793a\u4f8b\u6570\u636e\u96c6\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{target:"_blank",href:n(75210).Z}," ",(0,l.kt)("img",{src:n(24505).Z,width:"1348",height:"1221"})," ")))}f.isMDXComponent=!0},62831:function(t,e,n){e.Z=n.p+"assets/files/interaction-4061fb3d0820b4596b3a82ed1bd7c456.png"},9745:function(t,e,n){e.Z=n.p+"assets/files/param-5a55616470d736cfcf638adf71f5760d.png"},75210:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-cb6f7da75296f27cf0afbe6fe697e774.png"},41524:function(t,e,n){e.Z=n.p+"assets/files/workflow-37232cda5a0e90d99dad6ae23d813c88.png"},37891:function(t,e,n){e.Z=n.p+"assets/images/interaction-4061fb3d0820b4596b3a82ed1bd7c456.png"},30690:function(t,e,n){e.Z=n.p+"assets/images/param-5a55616470d736cfcf638adf71f5760d.png"},24505:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-cb6f7da75296f27cf0afbe6fe697e774.png"},1676:function(t,e,n){e.Z=n.p+"assets/images/workflow-37232cda5a0e90d99dad6ae23d813c88.png"}}]);