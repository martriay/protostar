"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={},p="CLI Reference",c={unversionedId:"cli-reference",id:"cli-reference",title:"CLI Reference",description:"Common flags",source:"@site/docs/cli-reference.md",sourceDirName:".",slug:"/cli-reference",permalink:"/protostar/docs/cli-reference",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/cli-reference.md",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"Common flags",id:"common-flags",level:2},{value:"<code>--no-color</code>",id:"--no-color",level:4},{value:"<code>-v</code> <code>--version</code>",id:"-v---version",level:4},{value:"Commands",id:"commands",level:2},{value:"<code>build</code>",id:"build",level:3},{value:"<code>--cairo-path DIRECTORY[]</code>",id:"--cairo-path-directory",level:4},{value:"<code>--disable-hint-validation</code>",id:"--disable-hint-validation",level:4},{value:"<code>--output PATH=build</code>",id:"--output-pathbuild",level:4},{value:"<code>init</code>",id:"init",level:3},{value:"<code>--existing</code>",id:"--existing",level:4},{value:"<code>install</code>",id:"install",level:3},{value:"<code>package STRING</code>",id:"package-string",level:4},{value:"<code>--name STRING</code>",id:"--name-string",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>package STRING</code>",id:"package-string-1",level:4},{value:"<code>test</code>",id:"test",level:3},{value:"<code>target PATH=tests</code>",id:"target-pathtests",level:4},{value:"<code>--cairo-path DIRECTORY[]</code>",id:"--cairo-path-directory-1",level:4},{value:"<code>-m</code> <code>--match REGEXP</code>",id:"-m---match-regexp",level:4},{value:"<code>-o</code> <code>--omit REGEXP</code>",id:"-o---omit-regexp",level:4},{value:"<code>update</code>",id:"update",level:3},{value:"<code>package STRING</code>",id:"package-string-2",level:4},{value:"<code>upgrade</code>",id:"upgrade",level:3}],m={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,l.kt)("h2",{id:"common-flags"},"Common flags"),(0,l.kt)("h4",{id:"--no-color"},(0,l.kt)("inlineCode",{parentName:"h4"},"--no-color")),(0,l.kt)("p",null,"Disable colors."),(0,l.kt)("h4",{id:"-v---version"},(0,l.kt)("inlineCode",{parentName:"h4"},"-v")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--version")),(0,l.kt)("p",null,"Show Protostar and Cairo-lang version."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"build"},(0,l.kt)("inlineCode",{parentName:"h3"},"build")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar build\n")),(0,l.kt)("p",null,"Compile contracts."),(0,l.kt)("h4",{id:"--cairo-path-directory"},(0,l.kt)("inlineCode",{parentName:"h4"},"--cairo-path DIRECTORY[]")),(0,l.kt)("p",null,"Additional directories to look for sources."),(0,l.kt)("h4",{id:"--disable-hint-validation"},(0,l.kt)("inlineCode",{parentName:"h4"},"--disable-hint-validation")),(0,l.kt)("p",null,"Disable validation of hints when building the contracts."),(0,l.kt)("h4",{id:"--output-pathbuild"},(0,l.kt)("inlineCode",{parentName:"h4"},"--output PATH=build")),(0,l.kt)("p",null,"An output directory that will be used to put the compiled contracts in."),(0,l.kt)("h3",{id:"init"},(0,l.kt)("inlineCode",{parentName:"h3"},"init")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar init\n")),(0,l.kt)("p",null,"Create a Protostar project."),(0,l.kt)("h4",{id:"--existing"},(0,l.kt)("inlineCode",{parentName:"h4"},"--existing")),(0,l.kt)("p",null,"Adapt current directory to a Protostar project."),(0,l.kt)("h3",{id:"install"},(0,l.kt)("inlineCode",{parentName:"h3"},"install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar install https://github.com/OpenZeppelin/cairo-contracts\n")),(0,l.kt)("p",null,"Install a dependency as a git submodule."),(0,l.kt)("h4",{id:"package-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git"))))),(0,l.kt)("h4",{id:"--name-string"},(0,l.kt)("inlineCode",{parentName:"h4"},"--name STRING")),(0,l.kt)("p",null,"A custom package name. Use it to resolve name conflicts."),(0,l.kt)("h3",{id:"remove"},(0,l.kt)("inlineCode",{parentName:"h3"},"remove")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar remove cairo-contracts\n")),(0,l.kt)("p",null,"Remove a dependency."),(0,l.kt)("h4",{id:"package-string-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("p",null,"Required."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PACKAGE_DIRECTORY_NAME"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cairo_contracts"),", if the package location is ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/cairo_contracts"))))),(0,l.kt)("h3",{id:"test"},(0,l.kt)("inlineCode",{parentName:"h3"},"test")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar test\n")),(0,l.kt)("p",null,"Execute tests."),(0,l.kt)("h4",{id:"target-pathtests"},(0,l.kt)("inlineCode",{parentName:"h4"},"target PATH=tests")),(0,l.kt)("p",null,"A path can point to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the directory with test files",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tests")))),(0,l.kt)("li",{parentName:"ul"},"the specific test file",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tests/test_main.cairo")))),(0,l.kt)("li",{parentName:"ul"},"the specific test case",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tests/test_main.cairo::test_example"))))),(0,l.kt)("h4",{id:"--cairo-path-directory-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"--cairo-path DIRECTORY[]")),(0,l.kt)("p",null,"Additional directories to look for sources."),(0,l.kt)("h4",{id:"-m---match-regexp"},(0,l.kt)("inlineCode",{parentName:"h4"},"-m")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--match REGEXP")),(0,l.kt)("p",null,"A filename regexp, which omits the test file if it does not match the pattern."),(0,l.kt)("h4",{id:"-o---omit-regexp"},(0,l.kt)("inlineCode",{parentName:"h4"},"-o")," ",(0,l.kt)("inlineCode",{parentName:"h4"},"--omit REGEXP")),(0,l.kt)("p",null,"A filename regexp, which omits the test file if it matches the pattern."),(0,l.kt)("h3",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h3"},"update")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar update cairo-contracts\n")),(0,l.kt)("p",null,"Update a dependency or dependencies. If the default branch of a dependency's repository uses tags, Protostar will pull a commit marked with the newest tag. Otherwise, Protostar will pull a recent commit from the default branch."),(0,l.kt)("h4",{id:"package-string-2"},(0,l.kt)("inlineCode",{parentName:"h4"},"package STRING")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenZeppelin/cairo-contracts@0.1.0")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL_TO_THE_REPOSITORY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://github.com/OpenZeppelin/cairo-contracts")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSH_URI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git@github.com:OpenZeppelin/cairo-contracts.git")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PACKAGE_DIRECTORY_NAME"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cairo_contracts"),", if the package location is ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/cairo_contracts"))))),(0,l.kt)("h3",{id:"upgrade"},(0,l.kt)("inlineCode",{parentName:"h3"},"upgrade")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ protostar upgrade\n")),(0,l.kt)("p",null,"Upgrade Protostar."))}s.isMDXComponent=!0}}]);