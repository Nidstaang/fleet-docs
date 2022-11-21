"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4917],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8874:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={},s="Cluster Groups",u={unversionedId:"cluster-group",id:"version-0.4/cluster-group",title:"Cluster Groups",description:"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.",source:"@site/versioned_docs/version-0.4/cluster-group.md",sourceDirName:".",slug:"/cluster-group",permalink:"/0.4/cluster-group",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/cluster-group.md",tags:[],version:"0.4",lastUpdatedAt:1669039045,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Manager Initiated",permalink:"/0.4/manager-initiated"},next:{title:"Namespaces",permalink:"/0.4/namespaces"}},c={},l=[],i={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cluster-groups"},"Cluster Groups"),(0,o.kt)("p",null,"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.\nThe only parameter for a cluster group is essentially the selector.\nWhen you get to a certain scale cluster groups become a more reasonable way to manage your clusters.\nCluster groups serve the purpose of giving aggregated\nstatus of the deployments and then also a simpler way to manage targets."),(0,o.kt)("p",null,"A cluster group is created by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," resource like below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterGroup\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: production-group\n  namespace: clusters\nspec:\n  # This is the standard metav1.LabelSelector format to match clusters by labels\n  selector:\n    matchLabels:\n      env: prod\n")))}p.isMDXComponent=!0}}]);