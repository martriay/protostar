"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[369],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},645:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Installation (1 min)"},s="Installation",u={unversionedId:"tutorials/installation",id:"tutorials/installation",title:"Installation",description:"Requirements",source:"@site/docs/tutorials/02-installation.md",sourceDirName:"tutorials",slug:"/tutorials/installation",permalink:"/protostar/docs/tutorials/installation",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation (1 min)"},sidebar:"tutorials",previous:{title:"Introduction (1 min)",permalink:"/protostar/docs/tutorials/introduction"},next:{title:"Project initialization (1 min)",permalink:"/protostar/docs/tutorials/project-initialization"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Linux and Mac",id:"linux-and-mac",level:2},{value:"Windows",id:"windows",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Protostar requires a ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," executable (>= 2.28) to be specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("h2",{id:"linux-and-mac"},"Linux and Mac"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy and run in a terminal the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://raw.githubusercontent.com/software-mansion/protostar/master/install.sh | bash\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Restart the terminal."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"protostar -v")," to check Protostar and ",(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/cairo-lang/"},"cairo-lang")," version.")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Not supported. "),(0,a.kt)("h1",{id:"upgrading-protostar"},"Upgrading Protostar"),(0,a.kt)("p",null,"To upgrade Protostar, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar upgrade\n")),(0,a.kt)("h1",{id:"how-to-build-protostar-from-source-code"},"How to build Protostar from source code"),(0,a.kt)("p",null,"If your platform isn't supported or installation fails, you can try building Protostar from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar"},"source code")," in the following way:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/protostar#setting-up-environment"},"Set up a development environment.")),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"poe build"),". The result of running this command should be the ",(0,a.kt)("inlineCode",{parentName:"li"},"dist")," directory."),(0,a.kt)("li",{parentName:"ol"},"Move the ",(0,a.kt)("inlineCode",{parentName:"li"},"dist")," directory to the desired location (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.protostar"),")."),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"DESIRED_LOCATION/dist/protostar")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"PATH"),".")))}d.isMDXComponent=!0}}]);