"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[9728],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(n),f=a,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63085:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},u=void 0,c={unversionedId:"tutorial-aistudio/feature-engineering/Feature Constructor",id:"tutorial-aistudio/feature-engineering/Feature Constructor",title:"Feature Constructor",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/feature-engineering/Feature Constructor.md",sourceDirName:"tutorial-aistudio/feature-engineering",slug:"/tutorial-aistudio/feature-engineering/Feature Constructor",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Feature Constructor",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/feature-engineering/Feature Constructor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discretize",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Discretize"},next:{title:"Feature Synthesis",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/feature-engineering/Feature Synthesis"}},s={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],d={toc:p};function f(t){var e=t.components,o=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201c\u7279\u5f81\u6784\u5efa\u201d\uff08Feature Constructor\uff09"),"\u63a7\u4ef6\u53ef\u8ba1\u7b97\u5206\u7c7b\u6216\u56de\u5f52\u6570\u636e\u96c6\u4e2d\u7279\u5f81\u5c5e\u6027\u7684\u6392\u540d\u4fe1\u606f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6"))),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"data\uff1a\u5904\u7406\u540e\u7684\u6570\u636e\u96c6")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u201c\u7279\u5f81\u6784\u5efa\u201d\uff08Feature Constructor\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(97861).Z}," ",(0,i.kt)("img",{src:n(72983).Z,width:"365",height:"571"})," ")),(0,i.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fde\u7eed\u7279\u5f81\u53c2\u6570\u9009\u9879"),"\n\u5bf9\u4e8e\u8fde\u7eed\u578b\u7279\u5f81\u800c\u8a00\uff0c\u53ea\u80fd\u901a\u8fc7\u6784\u9020\u4e00\u4e2aPython\u8868\u8fbe\u5f0f\u6765\u8ba1\u7b97\u7279\u5f81\u503c\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(29991).Z}," ",(0,i.kt)("img",{src:n(54497).Z,width:"365",height:"669"})," ")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u9009\u9879"),(0,i.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,i.kt)("th",null,"\u6837\u4f8b\u503c")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u65b0\u5efa\u5c5e\u6027"),(0,i.kt)("td",null,"\u65b0\u5efa\u4e00\u4e2a\u8fde\u7eed\u578b\u3001\u79bb\u6563\u578b\u3001\u5b57\u7b26\u4e32\u578b\u7684\u7279\u5f81\uff0c\u4e5f\u53ef\u4ee5\u590d\u5236\u4e00\u4e2a\u5df2\u521b\u5efa\u7684\u5c5e\u6027"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u5c5e\u6027\u540d"),(0,i.kt)("td",null,"\u65b0\u5efa\u5c5e\u6027\u7684\u540d\u79f0"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u8868\u8fbe\u5f0f"),(0,i.kt)("td",null,"Python\u8868\u8fbe\u5f0f\uff0c\u652f\u6301\u6570\u5b66\u56db\u5219\u8fd0\u7b97\uff08+\uff0c-\uff0c*\uff0c/\uff0c\\//\uff09\u3001\u53d6\u4f59\u8fd0\u7b97\uff08%\uff09\u3001\u6307\u6570\u8fd0\u7b97\u4ee5\u53ca\u503c\u7684\u6bd4\u8f83\uff08<, >, <=, >=, ==, !=\uff09",(0,i.kt)("br",null),"\u4f8b\u5982\uff1a value1 if \u6761\u4ef61 else value2 if \u6761\u4ef62 else value3"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u8868\u8fbe\u5f0f\u9009\u9879"),(0,i.kt)("td",null,"\u9009\u62e9\u53ef\u4ee5\u64cd\u4f5c\u7684\u5c5e\u6027\u4ee5\u53ca\u53ef\u4ee5\u4f7f\u7528\u7684\u51fd\u6570\u6765\u6784\u5efa\u8868\u8fbe\u5f0f",(0,i.kt)("br",null),"\u9009\u62e9\u51fd\u6570\u540e\uff0c\u4e0b\u65b9\u5c06\u663e\u793a\u51fd\u6570\u7528\u6cd5\uff0c\u51fd\u6570\u8bf4\u660e\u4ee5\u53ca\u51fd\u6570\u793a\u4f8b"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u8868\u8fbe\u5f0f\u5217\u8868"),(0,i.kt)("td",null,"\u5df2\u7ecf\u6784\u5efa\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u9009\u62e9\u67e5\u770b\uff0c\u4e5f\u53ef\u70b9\u51fb\u53f3\u4fa7\u7684\u201c\u5220\u9664\u201d\u6309\u94ae\u5220\u9664\u8be5\u5c5e\u6027\u53ca\u76f8\u5e94\u7684\u8868\u8fbe\u5f0f"),(0,i.kt)("td",null))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u79bb\u6563\u7279\u5f81\u53c2\u6570\u9009\u9879"),"\n\u5bf9\u4e8e\u79bb\u6563\u578b\u7279\u5f81\u800c\u8a00\uff0c\u8fd8\u9700\u5bf9\u66f4\u591a\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002\u70b9\u51fb\u201c\u65b0\u5efa\u5c5e\u6027\u201d\u6309\u94ae\uff0c\u5e76\u9009\u62e9\u521b\u5efa\u79bb\u6563\u578b\u7279\u5f81\uff0c\u51fa\u73b0\u5982\u4e0b\u56fe\u6240\u793a\u7684\u4ea4\u4e92\u9875\u9762\u3002\u7528\u6237\u9664\u4e86\u9700\u8981\u5bf9\u4e0a\u56fe\u4e2d\u663e\u793a\u7684\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e\u4e4b\u5916\uff0c\u8fd8\u9700\u5217\u51fa\u79bb\u6563\u7279\u5f81\u7684\u6240\u6709\u53d6\u503c\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(14615).Z}," ",(0,i.kt)("img",{src:n(36467).Z,width:"355",height:"671"})," ")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u9009\u9879"),(0,i.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,i.kt)("th",null,"\u6837\u4f8b\u503c")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u79bb\u6563\u503c"),(0,i.kt)("td",null,"\u79bb\u6563\u7279\u5f81\u7684\u53d6\u503c\u5217\u8868\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u5404\u4e2a\u53d6\u503c\uff0c\u53d6\u503c\u4e2a\u6570\u9700\u4e0ePython\u8868\u8fbe\u5f0f\u7684\u903b\u8f91\u6761\u4ef6\u5206\u652f\u6570\u4fdd\u6301\u4e00\u81f4\u4ee5\u4fbf\u5728\u4e0d\u540c\u60c5\u5f62\u4e0b\u5c06\u4e0d\u540c\u53d6\u503c\u5206\u914d\u7ed9\u8be5\u79bb\u6563\u7279\u5f81\u3002"),(0,i.kt)("td",null))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u79bb\u6563\u578b\uff0cPython\u8868\u8fbe\u5f0f\u4e2d\u7684value\u503c\u5bf9\u5e94\u53d6\u503c\u5217\u8868\u4e2d\u7684\u5e8f\u53f7(0\uff0c1)\uff0c\u800c\u975e\u53d6\u503c(A, B)\u3002"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/python/python_basic_operators.htm"},"Python\u6570\u5b66\u51fd\u6570\u5e93\u8868")))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,i.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u52a0\u8f7d\u6570\u636e\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201c\u7279\u5f81\u6784\u5efa\u201d\uff08Feature Constructor\uff09"),"\u63a7\u4ef6\u6784\u9020\u65b0\u7684\u5c5e\u6027\uff0c\u4e4b\u540e\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u5904\u7406\u540e\u7684\u6570\u636e\u96c6\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(70045).Z}," ",(0,i.kt)("img",{src:n(17189).Z,width:"394",height:"242"})," ")),(0,i.kt)("p",null,"\u6848\u4f8b\u4e2d\u91c7\u7528 iris \u6570\u636e\u96c6\uff0c\u6784\u9020\u4e86\u4e00\u4e2a\u8fde\u7eed\u578b\u7279\u5f81\u3010sepal_length_flag\u3011\u548c\u4e00\u4e2a\u79bb\u6563\u578b\u7279\u5f81\u3010ceil_sepal_length\u3011\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:n(97196).Z}," ",(0,i.kt)("img",{src:n(55321).Z,width:"1280",height:"980"})," ")))}f.isMDXComponent=!0},14615:function(t,e,n){e.Z=n.p+"assets/files/category-0cf5dcce5b75fcdc4a8966d3b751d326.png"},29991:function(t,e,n){e.Z=n.p+"assets/files/numeric-cf15b14b777f769f58cf8f11b177025d.png"},97861:function(t,e,n){e.Z=n.p+"assets/files/param-f95c331ce889d36afa3ec6a5a082f4c2.png"},97196:function(t,e,n){e.Z=n.p+"assets/files/workflow-result-5de27bf7b27278cbddc8cca1dbe696ca.png"},70045:function(t,e,n){e.Z=n.p+"assets/files/workflow-d112ce1f79ee1f78a37fb8b8bd3cb44d.png"},36467:function(t,e,n){e.Z=n.p+"assets/images/category-0cf5dcce5b75fcdc4a8966d3b751d326.png"},54497:function(t,e,n){e.Z=n.p+"assets/images/numeric-cf15b14b777f769f58cf8f11b177025d.png"},72983:function(t,e,n){e.Z=n.p+"assets/images/param-f95c331ce889d36afa3ec6a5a082f4c2.png"},55321:function(t,e,n){e.Z=n.p+"assets/images/workflow-result-5de27bf7b27278cbddc8cca1dbe696ca.png"},17189:function(t,e,n){e.Z=n.p+"assets/images/workflow-d112ce1f79ee1f78a37fb8b8bd3cb44d.png"}}]);