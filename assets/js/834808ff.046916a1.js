"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Registration",s={unversionedId:"ref-registration",id:"ref-registration",title:"Registration",description:"Detailed analysis of the registration process for clusters. This shows the interaction of controllers, resources and service accounts during the registration of a new downstream cluster or the local cluster.",source:"@site/docs/ref-registration.md",sourceDirName:".",slug:"/ref-registration",permalink:"/next/ref-registration",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/ref-registration.md",tags:[],version:"current",lastUpdatedAt:1669729529,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Namespaces",permalink:"/next/ref-namespaces"},next:{title:"fleet-agent",permalink:"/next/cli/fleet-agent/"}},c={},l=[],u={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Detailed analysis of the registration process for clusters. This shows the interaction of controllers, resources and service accounts during the registration of a new downstream cluster or the local cluster.\nIt's important to note that there are multiple ways to start this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a bootstrap config. Fleet does this for the local agent."),(0,o.kt)("li",{parentName:"ul"},"Creating a Cluster resource with a kubeconfing. Rancher does this for downstream clusters."),(0,o.kt)("li",{parentName:"ul"},"Create a Cluster resource with an id."),(0,o.kt)("li",{parentName:"ul"},"Create a ClusterRegistration resource.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Registration",src:r(2364).Z,width:"2100",height:"2216"})))}p.isMDXComponent=!0},2364:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/FleetRegistration-02261f36c889f94ee81be67d3aa2f342.svg"}}]);