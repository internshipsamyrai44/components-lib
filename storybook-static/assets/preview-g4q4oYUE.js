import{d as _}from"./index-DrFu-skq.js";const{useMemo:b,useEffect:y}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__,{logger:M}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",{document:l,window:h}=E,B=()=>h.matchMedia("(prefers-reduced-motion: reduce)").matches,x=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(o=>o.name).join(", ");M.warn(_`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},v=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{let e=l.getElementById(r);e&&e.parentElement?.removeChild(e)},S=(r,e)=>{let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=l.createElement("style");n.setAttribute("id",r),n.innerHTML=e,l.head.appendChild(n)}},w=(r,e,t)=>{let n=l.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=l.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let o=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=l.getElementById(o);d?d.parentElement?.insertBefore(a,d):l.head.appendChild(a)}},A=(r,e)=>{let{globals:t,parameters:n}=e,a=t[g]?.value,o=n[g],d=b(()=>o.disable?"transparent":x(a,o.values,o.default),[o,a]),i=b(()=>d&&d!=="transparent",[d]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=b(()=>`
      ${s} {
        background: ${d} !important;
        ${B()?"":"transition: background-color 0.3s;"}
      }
    `,[d,s]);return y(()=>{let u=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!i){v(u);return}w(u,p,e.viewMode==="docs"?e.id:null)},[i,p,e]),r()},L=(r,e)=>{let{globals:t,parameters:n}=e,a=n[g].grid,o=t[g]?.grid===!0&&a.disable!==!0,{cellAmount:d,cellSize:i,opacity:s}=a,p=e.viewMode==="docs",u=n.layout===void 0||n.layout==="padded"?16:0,c=a.offsetX??(p?20:u),m=a.offsetY??(p?20:u),$=b(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",k=[`${i*d}px ${i*d}px`,`${i*d}px ${i*d}px`,`${i}px ${i}px`,`${i}px ${i}px`].join(", ");return`
      ${f} {
        background-size: ${k} !important;
        background-position: ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[i]);return y(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){v(f);return}S(f,$)},[o,$,e]),r()},C=[L,A],I={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[g]:null};export{C as decorators,G as initialGlobals,I as parameters};
