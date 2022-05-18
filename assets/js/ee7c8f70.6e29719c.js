"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[5297],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),A=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=A(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=A(r),d=a,c=s["".concat(u,".").concat(d)]||s[d]||f[d]||i;return r?n.createElement(c,l(l({ref:e},p),{},{components:r})):n.createElement(c,l({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var A=2;A<i;A++)l[A]=r[A];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},86448:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return A},toc:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={},u=void 0,A={unversionedId:"tutorial-aistudio/evaluate/Lift Curve",id:"tutorial-aistudio/evaluate/Lift Curve",title:"Lift Curve",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/evaluate/Lift Curve.md",sourceDirName:"tutorial-aistudio/evaluate",slug:"/tutorial-aistudio/evaluate/Lift Curve",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Lift Curve",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/evaluate/Lift Curve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Confusion Matrix",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Confusion Matrix"},next:{title:"Predictions",permalink:"/uniplore-docs-website/docs/tutorial-aistudio/evaluate/Predictions"}},p={},f=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],s={toc:f};function d(t){var e=t.components,o=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cLift\u66f2\u7ebf\u201d\uff08Lift Curve\uff09"),"\u63a7\u4ef6\u6839\u636e\u968f\u673a\u5206\u7c7b\u5668\u6765\u8861\u91cf\u6240\u9009\u5206\u7c7b\u5668\u7684\u6027\u80fd\u3002\u8be5\u63a7\u4ef6\u663e\u793a\u4e86\u9884\u6d4b\u4e3a\u771f\u7684\u5b9e\u4f8b\u6570\u91cf\u4e0e\u786e\u5b9e\u4e3a\u771f\u7684\u5b9e\u4f8b\u6570\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4ece\u800c\u53ef\u4ee5\u786e\u5b9a\u6700\u4f73\u7684\u5206\u7c7b\u5668\u53ca\u5176\u9608\u503c\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"evr\uff1a\u5206\u7c7b\u5668\u5bf9\u6570\u636e\u7684\u6d4b\u8bd5\u7ed3\u679c"))),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e0")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u201cLift\u66f2\u7ebf\u201d\uff08Lift Curve\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(20339).Z}," ",(0,i.kt)("img",{src:r(67303).Z,width:"360",height:"133"})," ")),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u7ed3\u679c\u201d"),"\u6309\u94ae\uff0c\u67e5\u770b\u66f2\u7ebf\uff1a\n",(0,i.kt)("a",{target:"_blank",href:r(61885).Z}," ",(0,i.kt)("img",{src:r(29472).Z,width:"1104",height:"690"})," ")),(0,i.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u9009\u9879"),(0,i.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,i.kt)("th",null,"\u6837\u4f8b\u503c")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u76ee\u6807\u7c7b"),(0,i.kt)("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u7684\u7c7b\u662f\u6309\u5b57\u6bcd\u7684\u987a\u5e8f\u9009\u62e9\u7b2c\u4e00\u4e2a"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u5206\u7c7b\u5668"),(0,i.kt)("td",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u9700\u8981\u7ed8\u5236\u7684\u66f2\u7ebf\uff0c\u70b9\u51fb\u4e00\u4e2a\u5206\u7c7b\u5668\u53ef\u4ee5\u9009\u62e9\u6216\u53d6\u6d88\u9009\u62e9"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u663e\u793a\u5347\u529b\u51f8\u5305"),(0,i.kt)("td",null,"\u4e3a\u6240\u6709\u5206\u7c7b\u5668\u7ed8\u5236\u51f8\u8d77\u66f2\u7ebf\uff0c\u66f2\u7ebf\u663e\u793a\u4e86\u6bcf\u4e2a\u671f\u671b\u7684\u771f\u9633\u7387/\u9633\u7387\u7684\u6700\u4f73\u5206\u7c7b\u5668"),(0,i.kt)("td",null))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,i.kt)("p",null,"\u5728\u4e0b\u56fe\u6240\u793a\u7684\u6848\u4f8b\u4e2d\uff0c\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201c\u52a0\u8f7d\u6587\u4ef6\u201d\uff08File\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u201cK\u8fd1\u90bb\u201d\uff08KNN\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\u201d\uff08Tree\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u903b\u8f91\u56de\u5f52\u201d\uff08Logistic Regression\uff09"),"\u7b49\u6a21\u578b\u5728",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u63a7\u4ef6\u4e2d\u8fdb\u884c\u6d4b\u8bd5\u548c\u8bc4\u4f30\uff0c\u6700\u540e\u5c06\u8bc4\u4f30\u7ed3\u679c\u5728",(0,i.kt)("strong",{parentName:"p"},"\u201cLift\u66f2\u7ebf\u201d\uff08Lift Curve\uff09"),"\u63a7\u4ef6\u4e2d\u8fdb\u884c\u5c55\u793a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(55790).Z}," ",(0,i.kt)("img",{src:r(82173).Z,width:"669",height:"377"})," ")),(0,i.kt)("p",null,"\u6848\u4f8b\u4e2d\u52a0\u8f7d titanic \u6570\u636e\u96c6\uff0c\u9488\u5bf9",(0,i.kt)("strong",{parentName:"p"},"\u201cK\u8fd1\u90bb\u201d\uff08KNN\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u51b3\u7b56\u6811\u201d\uff08Tree\uff09"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u201c\u903b\u8f91\u56de\u5f52\u201d\uff08Logistic Regression\uff09"),"\u7b97\u6cd5\u8fdb\u884c\u6a21\u578b\u6d4b\u8bd5\u548c\u8bc4\u4f30\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u663e\u793a\u6bcf\u4e2a\u5206\u7c7b\u5668\u7684\u8bc4\u4f30\u7ed3\u679c\u3002\u7136\u540e\u6839\u636e",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u7684\u7ed3\u679c\u7ed8\u5236\u5347\u529b\u66f2\u7ebf\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u8bd5\u56fe\u770b\u5230 titanic \u6570\u636e\u96c6\u4e0a\u201c\u5e78\u5b58\u8005\u201d\u7684\u9884\u6d4b\u8d28\u91cf\u3002\u672c\u4f8b\u5728",(0,i.kt)("strong",{parentName:"p"},"\u201c\u8bc4\u5206\u548c\u6d4b\u8bd5\u201d\uff08Test & Score\uff09"),"\u63a7\u4ef6\u4e2d\u6bd4\u8f83\u4e86\u4e09\u4e2a\u5206\u7c7b\u5668\uff0c\u5e76\u5c06\u7ed3\u679c\u9001\u53d1\u5230",(0,i.kt)("strong",{parentName:"p"},"\u201cLift\u66f2\u7ebf\u201d\uff08Lift Curve\uff09"),"\u63a7\u4ef6\u4ee5\u67e5\u770b\u5176\u968f\u673a\u6a21\u578b\u7684\u6027\u80fd\uff0c\u4ece\u56fe\u4e2d\u53ef\u770b\u5230\u51b3\u7b56\u6811\u662f\u4e09\u8005\u4e2d\u6700\u597d\u7684\u3002\u56e0\u6b64\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6700\u4f18\u5206\u7c7b\u7684\u9608\u503c\u3002\u6848\u4f8b\u4e2d\u63a7\u4ef6\u7684\u914d\u7f6e\u4ee5\u53ca\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{target:"_blank",href:r(34243).Z}," ",(0,i.kt)("img",{src:r(40439).Z,width:"1104",height:"690"})," ")))}d.isMDXComponent=!0},20339:function(t,e,r){e.Z=r.p+"assets/files/param-a9b6f4afe06734c85adb6785751ba083.png"},61885:function(t,e,r){e.Z=r.p+"assets/files/visualization-e8b1ada8a19b1311200951f82f6dfec9.png"},34243:function(t,e,r){e.Z=r.p+"assets/files/workflow-result-e8b1ada8a19b1311200951f82f6dfec9.png"},55790:function(t,e,r){e.Z=r.p+"assets/files/workflow-f5a1e0ef95eaf808fbacf440306d719e.png"},67303:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACFCAYAAAB2SGI9AAAOgUlEQVR4nO3df2zTd37H8VcXpKCTjqrInCLFtBNofFWrf5hexzlEuugq8VU2xVfdml60Y70bYaXnHG68IxpCNx0ttx6lMpMjU3vtDjiOss13dD9wtIuMxuaTQhjHLpYmBX27Ma3F0SHF0gmmncJU5P1hO3YcOzjwTfhAn49/Gn/z/X6+H6fi5Tfvz+cbHisWi0UBAIzzGw96AgCAxghoADAUAQ0AhiKgAcBQBDQAGIqABgBDEdAAYCgCGgAMRUADgKEIaAAwFAENAIYioAHAUAQ0ABiKgAYAQxHQAGAoAhoADEVAA4ChCGgAMBQBDQCGWvOgJwAAprp8+fKyzt+2bZur9yegjVNQerhbmR0Tivd5lnFdTknruLzZuIIdi8fL73IU8rs8VeARdvnyZb388svq7Oxs6fyZmRmdPn3a1ZBe/YC+Pa3k17+i9zdElToWlLdyfCajI38W07kL16Rv/50mXvWt+tQevJyS1oCmj07o4HOVQ0lZJ72aGA1qUVzfSCvck9duJyT/onEqYZ1XftyW90CDuyUsDYwuMZ3eqKLWiEbqz+mNzs+nMBZW977Mst5lJMWHBR4OnZ2dunDhQkvnPv/8867ff0UCuvQH31Z0UTVX0t7u0dp17VpbOXA7p+S3wjox26PIsf3a0N5+T/e99VFW6ZNnlb6Y0dRHkuTV1t5+Rb4XUmDdPb6ZVVIKOp9SjqNQ7fGOl5SyutVt5ZWqD+KOoOKppKzhtCZGN5YP1lXSuUnFem1NNPj/4B9y5AxVrplUl9OlSWtSXQvuE1RwqG6e5+sGGk7JGSpdkUtYGtDC18efrPxtoFzN38sPCPgUWv0Kut2nwR9NaLD2WOG6pq9Kge99V6Ed8zW1buXOKHYyLe+uv9HgkhXXbU3/MKxXDmdVkFdbXxzU/q9ukP43r6l/y+vWryUZG9Cl0BoZl6SMBqxYk/NiGrCmF3/o+UNyRiUpVzmgkBOf/3buYkwal7qtkQWj2UeX20JZwuiArAVVdv3rbln7qq8iu9y5LfCoM6MHPZtXRpL9mbULDv9f/pLOjE/d9Q/0rX8+olcOZ6UX3tQ//mm/Nhsbxo14FBx1FKy8vJFWuGdEvgZtgMJYWN1/m1Owtlqtbz/0WCpFsa1oylam7m8yCyra8r0qDYpY+cOh8t9WQtzTF5fTV3+UvjfghgcQ0KU+a6zcx8zXhExmX6nSiqQm5D1ZqSql2IClmJr1Lqd1dvSMCk+HlHq9X5s/09p9K7FT346p9FRDb7+n22OHdOJnPkWzIc1+8ys6MhvSqQsRBSodmHLA/eLVU7rw7YDadUvXxpI68hfnlP2Pgrz+fu38k/0a/HyTT4xcUtZA44o5U37PDb4jqzLf2hZFYlIajS34OeUSljKSfDckdUhSQdcdybe9NnQjSs23NqotDiUsHW/2oyy7a/95vNl7oA+Nh8+xY8caHt+7d++K3fOBV9Cbek/p1BNpfeP1swoMxRUKrNOGpz6rx185pfimpMKJS+p//ZSCm6QNTzUYYOaapq5KvgO2/E3DefmSb6cV/fE/ySkv4Oa/3qMjB36iqasRBcrBUriSUUY+7f+dgNp1W7nEHg2cadfgvu9rsFPKn0/qO1/bo9sfnFLomQZ9dX9IjlPpOJdbHVa1fytpiYXAktIHTDlkR6cVze5WvsdSMpWSRm3ZvRlN5wuS3yOp+YJhMw1DuNeW1Kx6rr4XKmjg/jzwgF63KaDAranS15ufVeAL5eruiYCe/e8zkiTv04H5UFyk0h7xfM7VeQWGIwrW7K7xft5Wj7J6/2JOIb9fUkGT5zPS0/sVeFrSR2klRqfUf+zn2r+jXDH723Xt9DcU++mUBp8JqPnSZ7m6r1lsKwVzRnY2rng2rbAVlr2g/1wNwUoVPVm6qULZqMKHr+ugE5fGwuo+P6lCX1Ce3KRi8ilVv2B447qme716qdn0aubVaJGwaSXdoIJ2tfcNrKKVrJSbeeABfd/a2+WTdOvXc64OG9jiXXjgKVv9L35H2cwvND3kl+/GpDLjUs9hWz5JhauXlJWkvb+ts/WD5Wf1P1LDgK6EWyTlyPFL1UVDW9HsQXVJpd0azkYlLUvWfIum1LuWVG6V1C4gBhWv9Kafs2Xvy2jyRlBd+WlpePeiSvz6lYy046A8kry9sfmFSvvo4vk2rZqH6yr/BnIttE0AVD38Ab3Jp4CkEx9kNP3VQa3c7ul1CnypX/ogrUtXB/W5axll1K/4l8pB/sltSVLoL3/eYMdJe8NNJLmEpQEnqgknLk8uKcuKSbIVzTrlnRkqhW+PlHJCCjmOQrmkLMta1KeXpJH5BUJVA7OjS3bviDJX0srvyyiSii+chGIa2Wcrmi1VtZUFy2WH6aKdHI01Cn0AjT38Ad0eUPDAVp04fESH/nyzjg33yNPW6ESPvDskjU/rP28H5WmXKotmrVr3xaAGdVbpf81qw1RGejGuwBPl0TdvlU8ZZaf+S6Ev+pdoZ1T5hxyVbl9QOt9V049e2DaIpCbkrSz01fatRx1trIT8/MJnufWxvfIp4VFwV0QjAyPK9EY1sejDI7J4f/VdFMbCekMHF7YqqKAB161gQOeV/asTmq0pHdc916/+ZSTBZ58oVafvv5vU5t9fJ63fKfuZxef5/jCq6PSARt7do+4PNqtnh62Ad530q2vK/ru08+03ZXd4tdnvk86fUOwNrwZf2KDZfzijxJVlvKX2rep51aMTPzuhsxMehX7UU62Mn/6yQi8cVzjxLe0pDGln32atuz2r6QvT8n5zv+wGD4pUeRTs89T1ciNKOfFqcOaSsg7XP1GY0+SoJI3oJ7lgeedGeaGx5Z9zrOne66Wq3czHean22UYqaDyiWn1CcGZmpuXHwlu1ggE9rfS700rXHLGPfnlZAd3evVPv/dE1HfpBTOFrPXrznZ1NzvQq+PZP5dtxRidOp/Uvf51UVpLntwJ69rmgvOUq1/e1qKK/OqLYDw4pfKVHg699V9/3/q72tBAs5Rkp8PwfyPNuTJc8Ef3xF2rrZI/swym995tJJf/+kMI/lvTUVtnb++er7GaqwVwXyqrZ69wb1cSBrror/aW2R/k8a6B83mjNCOWtfJWWSHdiY12l27iCXqrazX+ckf3kwYUHqaDxiNm2bZveeuutls/v7Ox0PaAfKxaLRVdHxH0q7+gov7rrfuGavdSRlKNQR/VBl5fy1QXI0hh1e8HrHlSpZx+d0EG9oe7zdk3lXhpDqZQ0MNB0n/NdtRDowKcdAf3A1T7qLbXeE67d7bH4d55U90fXj1Wz3/r3rjfdY1194jC/4AND0oJflgRg5RDQAGAo/kUVADAUAQ0AhiKgAcBQBDQAGIqABgBDEdAAYCgCGgAMRUADgKEIaAAwFAENAIYioAHAUAQ0ABiKgAYAQxHQAGAoAhoADEVAA4ChCGgAMBQBDQCGIqABwFBrbt68+aDnAABogH80FgAMRYsDAAxFQAOAoQhoADAUAQ0AhiKgAcBQBDQAGIqABgBDEdAAYCgCGgAMRUADgKEIaAAwFAENAIYioAHAUAQ0ABiKgAYAQxHQAGAoAhoADEVAA4ChCGgAMBQBDQCGIqABwFAENAAYioAGAEMR0ABgKAIaAAxFQAOAoQhoADAUAQ0AhiKgAcBQBDQAGIqABgBDEdAAYKg1bg948+ZNFQoF3blzx+2hAcBYbW1t8ng8evzxx10b0/WALhQK6uzs1Nq1a90eGgCMNTc3p5mZGVcD2vUWx507dwhnAJ86a9eudb1zQA8aAAxFQAOAoQhoADAUAQ0AhiKgAcBQBDQAGIqABgBDuf6gCtCanJLWpLqckPxNT0nKGoi1OJ6taDauYEf55Y20wj0Z2bXHJEkFpYe7ld/lKNTgxrmEpYHRFm43nJIz1HTmgCsIaKywUiCOjDf+bsxqFMARpZyQ/P6QHCe08Fu5pKyLXXcJx4LSh6vh3DB0xy1V77ww3COp2vBu8EGSS8q6uMTtAZc8ViwWi24O+OGHH2rLli1uDolHTGEsrDdky7cvL+/RaWV0UPE+z+ITb6QV7hlRpsVxK8GaS1ia3O4o5G9ULVNBY+W4nX9U0Fgl1UraPjqheF9eyX15beyL6+BYWJaVWRx6HUHFnWB1hLGwuj/evWQwFsbCpYAdLVfIwyk5y8xRKmiYggoaK2uZVXCJrWh2t/I9A2q1A10xH665pKyTXk2MBuW52xx6o6XzRAWN++N6/hVd5jiO20PiUfDLc8W9r50rzjY9YbZ47rUtxcTU8q+dTe8tbnmn9sKpYmLL3uK5Xy5/mlPv1M9hqpjYkiguPJSoux9Q4nb+0eLA6hkfUbc1suQpkV0LX9dWtJmlrh3eXf6ioPTwgJRKKd9jyZIUSU3Ie7L5QmWp5VLqgfuHnOa7Sir8oWW3TYB7QUBj9dS0EhYrL95VXpbbEr6UI2d7Tbui0ZVjYXV/XLluUplxKTM+qZTjKFQZu34bXlkuYel46SslreYtlSV3myzxloH7QUBj9Syngq5dIMy1cG2lgq5bWGydX6H5QC/fNmHp+JPRu+82AVYIAY3Vs5wKehnXLqigK2oecrGPpmS3PMnqbpNIylHcn1u026S2JQKsJAIaq6MjqPiSuyM8Co46zb/dagVdCebhVM1DLgWlz2c00mOp0Qj2UdXsNrEVzTpyGszV0xeX01f6QLCsjBY9vQi4jIDGyrrnbXZ1wddqBd3o6cNmY6qmB72M1kglqIGVxj5oAHCJ2/nHb7MDAEMR0ABgKAIaAAxFQAOAoQhoADAUAQ0AhiKgAcBQrgd0W1ub5ubm3B4WAIw2NzentrY2V8d0/UnC9evXa2ZmRnfu3HF7aAAwVltbm9avX+/qmK4/SfjJJ5+4ORwAPFTWrHGv7l2RFgcAfBq5nX+uV9AAAHewiwMADEVAA4ChCGgAMBQBDQCGIqABwFAENAAYioAGAEMR0ABgqP8HIr73XKHL2d8AAAAASUVORK5CYII="},29472:function(t,e,r){e.Z=r.p+"assets/images/visualization-e8b1ada8a19b1311200951f82f6dfec9.png"},40439:function(t,e,r){e.Z=r.p+"assets/images/workflow-result-e8b1ada8a19b1311200951f82f6dfec9.png"},82173:function(t,e,r){e.Z=r.p+"assets/images/workflow-f5a1e0ef95eaf808fbacf440306d719e.png"}}]);