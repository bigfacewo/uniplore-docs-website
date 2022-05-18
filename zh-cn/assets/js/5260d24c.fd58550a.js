"use strict";(self.webpackChunkuniplore_website_doc=self.webpackChunkuniplore_website_doc||[]).push([[9250],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),f=s(r),d=l,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function d(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27246:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(87462),l=r(63366),a=(r(67294),r(3905)),i=["components"],o={},u=void 0,s={unversionedId:"tutorial-aistudio/io/SQL Table",id:"tutorial-aistudio/io/SQL Table",title:"SQL Table",description:"\u7ec4\u4ef6\u4ecb\u7ecd",source:"@site/docs/tutorial-aistudio/io/SQL Table.md",sourceDirName:"tutorial-aistudio/io",slug:"/tutorial-aistudio/io/SQL Table",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/io/SQL Table",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-aistudio/io/SQL Table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Random Data",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/io/Random Data"},next:{title:"Save Data",permalink:"/uniplore-docs-website/zh-cn/docs/tutorial-aistudio/io/Save Data"}},c={},p=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:3},{value:"\u9875\u9762\u4ecb\u7ecd",id:"\u9875\u9762\u4ecb\u7ecd",level:3},{value:"\u53c2\u6570\u9009\u9879",id:"\u53c2\u6570\u9009\u9879",level:4},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}],f={toc:p};function d(t){var e=t.components,o=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4ecb\u7ecd"},"\u7ec4\u4ef6\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u63a7\u4ef6\u652f\u6301\u4ece\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u6570\u636e\uff08\u76ee\u524d\u652f\u6301 Microsoft SQL Server, PostgreSQL, MySQL, Oracle, MongoDB\uff09\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0"))),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u6570\u636e\u96c6")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9875\u9762\u4ecb\u7ecd"},"\u9875\u9762\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u9875\u9762\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(70490).Z}," ",(0,a.kt)("img",{src:r(90127).Z,width:"368",height:"481"})," ")),(0,a.kt)("h4",{id:"\u53c2\u6570\u9009\u9879"},"\u53c2\u6570\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u9009\u9879"),(0,a.kt)("th",{width:"650"},"\u8bf4\u660e"),(0,a.kt)("th",null,"\u6837\u4f8b\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u7c7b\u578b"),(0,a.kt)("td",null,"\u8fde\u63a5\u6570\u636e\u5e93\u7684\u7c7b\u578b\uff08Microsoft SQL Server, PostgreSQL, MySQL, Oracle, MongoDB\uff09"),(0,a.kt)("td",null,"PostgreSQL")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6570\u636e\u5e93\u5730\u5740"),(0,a.kt)("td",null,"\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740"),(0,a.kt)("td",null,"127.0.0.1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u7aef\u53e3"),(0,a.kt)("td",null,"\u8fde\u63a5\u7aef\u53e3\u53f7"),(0,a.kt)("td",null,"5432")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u6570\u636e\u5e93\u540d"),(0,a.kt)("td",null,"\u6570\u636e\u5e93\u540d"),(0,a.kt)("td",null,"test")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u7528\u6237\u540d"),(0,a.kt)("td",null,"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d"),(0,a.kt)("td",null,"postgres")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5bc6\u7801"),(0,a.kt)("td",null,"\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801"),(0,a.kt)("td",null,"123456"))),(0,a.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u201c\u8fde\u63a5\u201d\u6309\u94ae\uff0c\u5c06\u4f1a\u5f39\u51fa",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u63a7\u4ef6\u7684\u4ea4\u4e92\u9875\u9762\uff08\u5982\u4e0b\u56fe\u6240\u793a\uff09\u3002\u5728\u4ea4\u4e92\u9875\u9762\u4e2d\u9009\u62e9\u6240\u9700\u7684\u8868\u540d\u5373\u53ef\u52a0\u8f7d\u8be5\u8868\u4e2d\u7684\u6570\u636e\uff0c\u8fdb\u884c\u8fdb\u4e00\u6b65\u5904\u7406\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(43837).Z}," ",(0,a.kt)("img",{src:r(55722).Z,width:"804",height:"610"})," ")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u63a7\u4ef6\u4e00\u822c\u4f5c\u4e3a\u4e00\u4e2a\u5de5\u4f5c\u6d41\u7684\u5f00\u7aef\uff0c\u52a0\u8f7d\u6570\u636e\u8fdb\u884c\u76f8\u5173\u5904\u7406\u3002\u5982\u4e0b\u56fe\u6240\u793a\u7684\u5de5\u4f5c\u6d41\u4e2d \uff0c\u4f7f",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u63a7\u4ef6\u52a0\u8f7d\u6570\u636e\uff0c\u8fde\u63a5",(0,a.kt)("strong",{parentName:"p"},"\u201c\u67e5\u770b\u6570\u636e\u201d\uff08Data Table\uff09"),"\u63a7\u4ef6\u67e5\u770b\u6570\u636e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(32965).Z}," ",(0,a.kt)("img",{src:r(95754).Z,width:"304",height:"120"})," ")),(0,a.kt)("p",null,"\u6848\u4f8b\u4e2d\u914d\u7f6e",(0,a.kt)("strong",{parentName:"p"},"\u201c\u6570\u636e\u5e93\u52a0\u8f7d\u201d\uff08SQL Table\uff09"),"\u8fde\u63a5mysql\u6570\u636e\u5e93\u52a0\u8f7d\u6570\u636e\u5e93\u4e2d iris \u6570\u636e\u96c6\uff0c\u6848\u4f8b\u4e2d\u63a7\u4ef6\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{target:"_blank",href:r(52362).Z}," ",(0,a.kt)("img",{src:r(83211).Z,width:"1105",height:"1314"})," ")))}d.isMDXComponent=!0},43837:function(t,e,r){e.Z=r.p+"assets/files/interaction-66765f6c87d786231d0107656967962f.png"},70490:function(t,e,r){e.Z=r.p+"assets/files/param-0b64d42000ff6501babe47f95a98b0fb.png"},52362:function(t,e,r){e.Z=r.p+"assets/files/workflow-result-bd32ad496ebc0aa954383526ac98a5bb.png"},32965:function(t,e,r){e.Z=r.p+"assets/files/workflow-3b09b08ec7d250801bc80b6649c63b42.png"},55722:function(t,e,r){e.Z=r.p+"assets/images/interaction-66765f6c87d786231d0107656967962f.png"},90127:function(t,e,r){e.Z=r.p+"assets/images/param-0b64d42000ff6501babe47f95a98b0fb.png"},83211:function(t,e,r){e.Z=r.p+"assets/images/workflow-result-bd32ad496ebc0aa954383526ac98a5bb.png"},95754:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAB4CAYAAAB1h65GAAAUUUlEQVR4nO3dXWwTV5sH8L+/JrYTJ4RA8tZthWFBpSXpkpW8XbWqiGErIlUrrt6VWho1pKma7BZaqYjSj2yIQtELF6uWVoVKwYDYtBevVGm7RZiL4uQiSK0vgvCGwtIGwxucOMVJnDiOY3vsvTAzGTtO/O3xxM9PspLY45njeY6fOWfOyYxseno6AkIIkSC52AUghJBMUQIjhEgWJTBCiGRRAiOESBYlMEKIZFECI4RIFiUwQohkUQIjhEgWJTBCiGRRAiOESBYlMEKIZCnFLgAhUhWJlO6/EctkMrGLAKCACYyCTaQqvu6Wcl3mcPsgvm4Xuq7nPIFRsJcrlmCT9HBxE/4U1udSrtvCuiuTyUSr2zlLYBTslRVLsElq4uswy7IAgHA4jHA4HPNaqRLWY7lcDrk8ejpdoVAsq+/5lHUCo2AnVyzBJskJ6zPLsgiHwwgGgwiFQmBZln+Oq9uljKvLCoUCCoUCSqUSKpWKf04mkyESieS1XmeVwCjYqSuGYJPURCIRhEIhhEIhBAIBLC4uIhAIwO/3IxgMIhKJIBwOl2y8uM8tl8shk8mgUqmgVqvBMAzKysrAMAwikQiUSqU0WmAU7JUVU7DJ6rieQjgcRigUgt/vh8/ng1qtxtNPP43Kykq+9Uyivazp6WmMjY3h0aNH0Gq1KC8vh1arhVqtjult5KtuZ5zAKNjpKYZgk+S43kQgEIDP58P69etRVVUFAFSf48jlcjAMg82bN0Oj0eDevXv8KSRhz6Kou5AU7NQUQ7DJyoTncIPBIBYXF6FWq1FVVQWtVktxWYFOp+MbMm63Gx6PBwqFAiqViu9VcPsuH/swoyyTLNjl5eW5LueaoNPpoNPpUFtbi8rKSszOzmJ+fh6Li4sIBoNgWbbkBzyKAXc6ZMOGDQCoRZwMd4rEYDDA6/XC5/MhEAggFArlfdtZN5Mo2OkRM9hkdVxLgmVZ+P1+VFZW0sE4RZWVlaitrcXCwgL8fj/8fj8/iJfPA3JW58Dig03dxtRwXwxhsLVabUkPdhQDYZ0OBoNUn9OkUCgQCAQQCAT4HkW+E1jGEaJgZ0eMYJPE4rvtFIfMCeuxcPpUvk6NpJ11KNi5U+hgk9UJR9Zp7mJm4ud/5rsuZ9UCo2Bnp9DBJsnF/0scyUyh9mNW/T4Kdm7Qfiw+dB4yM9xBuFD7LycnrijYmSl0sAlZa+jMOyFEsuiKrIQUyDvvvIPx8XGxixHjhx9+ELsIWaEERkiBjI+Pw+l0il0Mnl6vF7sIWVtzCczj8cDj8WB2dpb/WVVVhcrKypifhBDpk2wCu3v3Lm7cuIHh4WH+p8vlSmkkTyaToa6uDo2Njdi5cycaGxvR2NiIrVu3FqDkhJBckVQCW1hYQF9fH/r6+nDz5s2EyygUClRVVcU8uFYZ92BZFhMTE7hy5QquXLnCv/f5559He3s72tvbodFoCvWxCCEZkkwC++STT/DFF19gfn4eAFBdXR3Tgtq5cycMBgMqKiqSrsvr9cLhcGB4eJhvwd24cQM3b97EoUOH8NFHH+G9997DZ599lu+PRQjJgiQS2HfffYcTJ04AAF588UW0t7fjwIEDGa+voqIC9fX1qK+vR0tLC//8+fPn0dfXh+vXr+PEiROor6/Ha6+9lnX5CSH5UfTzwFwuFw4dOgQAOH78OIaGhrJKXqs5cOAAhoaGcPz4cQDAoUOH4HK58rItQkj2JNEC83q9eP3117F///6CbG///v24desWvv/++4Jsj5SWy5cvQ61WJ11ueHgYW7ZsSWnU3OPxYHR0FI2NjSmVYc+ePSktV+wkkcD8fj++/fZbXL9+Ha2treju7s7LdhwOBy5evIhjx47lZf2EAEBNTQ2UyuRfPZVKhbKyspQSmN/vh0qlSmnZtXTxTEkkMCA6uuhwOHDs2DFcuHABTU1NMBgM2LRpE/97uhwOBxwOBwYHBzEwMICBgQH+NblcTlfZIKTISSaBaTQafPnll7h48SIGBgZw4cKFmNcNBgOfxITJjPvd4XDE/BQmq/j1dHd34+DBg/B6vTn/HISQ3JFMAgOA1tZWtLa2wuFwYGBgAIODg/zvXGsqHVxya21tBYCYrunBgwdzV3BCSF5IKoFxDAYDn8w4XAITJrH79+/HvG/Tpk0xrbOmpqb8F5YQkjeSTGCJCLuQhGTjr34Vrqv0+GPod+jVKjRvqMC7m9aLXSySwJpJYFLx1f0pWB554fQHsf7v/xnPzrvxr1g7o0JS98lkCFsqdDjz1Hps0TIY9QXQ75xBu/0h+hqeFLt4JI5kElggEJD89trtD7FJo8LpZ//EfzkuPqjA1zNedEk8if3888/Q6XR47rnnxC5Kxi64A/g7nQb/sa2Of26LlkHX1lr0/jaJr+5P5aQlZrfbU5oHNjc3hzt37mBqairpsvPz8xgfH8evv/6adFm/359SOaWg6GficwKBAHp6egqyrZ6enpwnsK/uT2GTRoWurbXYomUARL8cPdv12L6+En/1q3K6PTEMDQ3h3LlzuHr1KsbGxsQuTtqsc0G88WR1wtf269fB8ig3o9I6nQ5KpTLpw+v1Yt26dSkty7IsKioqUlpWp9Pl5HMUA8m0wLRaLT99orW1Fbt27crpSXjhJFaDwQCNRoOFhYWcrd/yyIvTz/4p4WstT63Hv//vAt7KwXaEt2gT3raNez4SifA3I2YYJuY5ADF3SOJ+DwQCkMvlMfcCFf4Mh8NYWFhAOBxGQ0MDXC4XfvzxR0QiEaxbtw46nQ4KhQIsy8aUg9uu8Ln4OzQJy5foOa7M2dwQhXvvxCst/MEl3hYtA6c/mPE2hAwGQ0oTWScnJ1FXV4e6urqky7pcLoRCIWzbti3psjSRVQRyuRxWq5VPND09Pfz/RDY1NWHXrl3L5oEJT+rHzwMbHBwEAH4CKzeyabVa0dTUlPOjlNMfXPXL4QqGcfbsWSgUCv4mH+ne7EOr1WJhYQFyuRwymQwymYxfH/eQy+VQKBQAovuUWzb+d+FPAFAqlfx7uWWFf8cnkMXFRWzevBl6vR7l5eX8Nrn1AODfK9wWV+b48gk/R6IyZ3NjFC4x/vL7LEZ9gYRxGvUFoFdLv5W81kgmgXG4iabd3d0xUycGBwdx8eJFAMuTFfc+4e/co7u7G1arNe/l1qtVq3456lRydHR0oKysLObLmg4x73B069Yt3Lx5EyMjI6ivr8e+fftEKUc2TDoV/uvhdMw5ME6/cwbNG5JfqokUluQSmJBw6oRwTlgxat5QgX7nDLq21i577dLYFP5JGQKQ3RFezNuzPXz4EK+88oqkT+K31jA4/Ld59PzfBFriRiHvLwQTxo6ISzIn8aXu3U3rcX8hiN7fJjHqiw4QjPoC6L7txO2pWfxZnZvzK2KRevLifFarBLxz6Lz5N/zD0O849OsEqlVKmkJRpCTdApOavoYn8dX9KRz6dSI6Dwwsnp134980IQA1YhePPPZndRC75914+eWXxS4KSUIyCazQV4bI1/be3bSen0v09ddfY+PGjYAm8egkIWR1kklgfr8fDoejIP8u5HA44PP58r4dUpomJyehUiU/3zk3NwePx8OP2q7G4/Fgbm4Of/zxR9Jlg0Fpn64QkkwCUyqVMJlMeZkDxhHOBWMYpuCz/0lpuHfvXkpzsaanp3Hnzh1UVlYmXXZ2dhZerxe3bt1Kumwqc9CkQjKfhGEYWK1W9PT08JNNhfO/MkloXMICwF+Sp7W1Fffu3UNDQwMlMJIXL7zwQkpJZGhoCFu3bk15Iutvv/2Gl156KemyNJFVJAaDAefPn4+ZA8bN/xLe6COViaxcd5S7mmt3dzddXocQiZFUAuMkmv8lnLSaaCLrm2++mfD9hBDpkmQCSyTRZaQJIWsbTWQlhEgWJTBCiGRJIoGtW7cOXq8XJ0+eLMj2Tp48yV+LiRBSvIo+gdXV1eH06dMAgKNHj8JkMqG/vz8v2+rv74fJZMLRo0cBAKdPn05pCJuQdASDQYRCoaQPpVKJQCCQ0rIAUl6WJrIWWEtLC+x2Oz7//HP++l0ffPABGhsbsXPnTv6nwWAAwyS+5pZQMBiEw+HA8PAwhoeHcePGDQwPD8PlcgGI3hH5/fffR0tLS74/GilB9D+WuSOJBAYAp06dwscff4y+vj709fXhzp07sFgssFgsMctptVpUVlaiqqqKf3g8Hng8HszOzsLj8az4b0LPPPMM2tvb8fbbb6d0i3ZC0vHEE0+IXYQYxVaeTEgmgQHRc2GHDx/G4cOHMTIysqwFNT09DZ/PB5/Ph4mJiVXXVV1djcbGxphW3I4dOwr0SUgp+uabb8QuwpojqQQmtGPHDuzYsQNvvPEG/1wgEFjW2vJ4PMtaZFVVVSl1NQkhxU2yCSwRhmGwcePG6CVqCCFrXtGPQhJCyEoogRFCJIsSGCEJZHOfyVLG3U2rUPsvJwmMgp2ZQgebJJfpPTlJrELtx6wSGAU7N2g/FgfhjXPlcnnB78MgdSzLQqFQxNz8ONubDieT8ShkomCncu1uEiVGsEli8fuci8X09DQYhsn5XdrXopmZGXi93mV3W+fkq26nnXHiCyIM9tzcXE4Lt1bNzMxgfHy84MEmq+PioFAooFKpMDY2hkgkQl38JCKRCFiWxcjICBiGAcMwUKlUMfU7XzJuMlGwMyNmsMnqhHVarVZjamoKExMT/MRostzMzAympqbgcDjw4MEDaDQaqNVqqNXqgtTprLqQwmA/evQIGo2G70qmcieVUjMzMwOWZflgV1dXFzTYJDVKpRIMw0Cr1WJ0dBRutxsGgwHl5eVQKBRiF69osCwLr9eLkZERPHjwADqdDhUVFdBqtWAYpiB3P8p6CxTs1BRDsMnKuAMH16MoKytDeXk5WJbF7OwshoaGsLCwgEAgAJZlwbIsgNIcgRfuK4VCAYZhUF1dDZ1OB51Oh/LycpSVlfE9i3yeEsnoW0PBTl0xBZskJ5PJ+DhptVoA4P/2+/0IBAIIh8NUpwG+18AwDNRqNbRaLcrLy/mDMlef8ymrwz4FO7liCjZZHbf/5XI5lEol1Go15HI5VCoVtFot/H4/gsEgIpEIwuEwIpFIScaM+9zcKQ+VSgW1Wg2GYVBWVsb3KIp+GgVAwU6mmIJNUiOTyaBUKvkDtFKpRFlZGbRaLViWRTgcpjliAD/9h+tdKJVKqFQq/rlC1GXZ9PR0xs0irkXFjayFw2H+crlc15GCHZVqsCmBiU9Yr7m6DSCmLpf6iLvwYMvVbQDLToMUfReSa2EIR9EYhqFgCxRLsElqhHEQxie+Hpd6nRb+Hl+HC1WXsx76omAnVyzBJumJj4uwbpOolfZRoeRs7J6CnZzYwSaZobq9XLHU3ZxPPqJgL1cswSa5RXEVX8FmT1KwydrlhuVoM7p+inu6wwzbWw3537zdDGPbmYQvdZptaFuhCO6rR9A81rJyGe1mGPv1sPylGTU5KmquiTz92w6zsQ1Lu74TZlsbhLvTfs6ItrOCJ/b0xu3QaOVx7l85UNEV5SfISSsBKRmx9ShaL43G5XV6JfZzRlx6yoJTe9NMFw1tsNnaolstsfooXgKbtODIq9ew+7INttrHz9ktsEwCDbUAf1RDLyy2pYTlvnoEzcZr6L18Cs21iVedUAkHmYihBs1/seHJc0Zcurov/aREUiLeBbxcTlj37IZRmIQamvmk5L56Mpq84pqvNXtPwXIc6PofeyFLS0hGGv6xE1arDW4A0YOyEUYj9zDDLni+7Sxg/bQZRuMRWCZXWz4NdrPg/UYcuepetoj76pGlZc6ttgU7zEnWVWjiJbA6PUw/XYNtMtGLbtisVnTuT9z3rmncDdNZW/rBXMkaDzIRUZ0epp+ccALApA1OkwU2mw02mwW9e87g0lU3uNaauQMwHbfAZnvcu1hx+dTZfwHMNlt0HeZOWD/979jvzdk2nMSHS9u427ZCnY2e7oH58bpsZmz/9OTjRCse8RJYbTNOmbej61UjjEctiN1lTjh/MkFft9J7n8R23MbDHO28tR5kUiRqm9HGdyVrYDSZYB1z5m75BBreEpx/azCiM/5702EWdG9r0Lxf2GIUsNtwZk8v9i2tDPuOA9eGxT1Ai3sN6IY22Gw2WEzX0Cxia2WtB5mIyOWEdY8e+sd/2s8ttc6bP7UmfXu6yy8zacERvkcgHDBbQZ0epgRPu523gZ+60GyMLU+6CTXXiuIiVDV7T8G21w6zsRlmvQ1tDXro91jhdAFIdKJ+8iFuY3vs+bNsTFpw5NUuLFUPE3pXW37VIJ9Bs7Er9oWOFqBoB6JJ/rhh6T+Dzv021GBplNFmi9aF6GDSyu9Od/llJi048qoTLTYbTkXXCLPx0urvcTlhhR4fxj1do98OdBTfwFcR3YWjAcYO4LYzek7AaDLhTH981zLKPXwN1g5jSkPTSQmCzHX7OpO9x+VEomNhNMjmx+sRPIos6KQQogfkrm3mx1Mr3Hh4F9iu58fTYbOu1qJKd/kE4lp/sNuWt8DOXhKc4rDD3HYm8bnnBiM6z7bBXGRjZ+IlMLs5bmfYYTu7FLCavR+iF11ojjs/5r56BM2fboc5V0mhBIJMCuNMm3DE8BL0l4UHr+iph6VlTsK5LbYd3/AvvQA/Cpl8+aQa9kW/Q1yZfsHyg3PHbuA/l7qYt49bVpgT2YC2y724HfMZj4h+fjery+lkZVm3LfGE0mUTWYG4yayJZ0GnPjk17v0dneg8exv6x/PMosvuRu/dLn4Z0/GlyYbL5pQl6o6mO2eNEJIS8RJYxoQJJ/VZzoSQtUeCCYwQQqKK6CQ+IYSkhxIYIUSyKIERQiSLEhghRLIogRFCJIsSGCFEsiiBEUIkixIYIUSyKIERQiSLEhghRLIogRFCJIsSGCFEsiiBEUIkixIYIUSyKIERQiSLEhghRLIogRFCJIsSGCFEsiiBEUIk6/8BM6dWU+F5bDgAAAAASUVORK5CYII="}}]);