import{v as y}from"./v4-CtRu48qb.js";const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,{global:p}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:g}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var R="storybook/actions",h=`${R}/action-event`,m={depth:10,clearOnStoryChange:!0,limit:50},l=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:l(o,e)},w=t=>!!(typeof t=="object"&&t&&l(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),v=t=>{if(w(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o?.value;return typeof n=="object"&&n?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?y():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(t,e={}){let o={...m,...e},n=function(...i){if(e.implicit){let a=("__STORYBOOK_PREVIEW__"in p?p.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(a){let r=!window?.FEATURES?.disallowImplicitActionsInRenderV8,s=new g({phase:a.phase,name:t,deprecated:r});if(r)console.warn(s);else throw s}}let _=f.getChannel(),O=D(),d=5,c=i.map(v),u=i.length>1?c:c[0],E={id:O,count:0,data:{name:t,args:u},options:{...o,maxDepth:d+(o.depth||3),allowFunction:o.allowFunction||!1}};_.emit(h,E)};return n.isAction=!0,n.implicit=e.implicit,n}export{b as a};
