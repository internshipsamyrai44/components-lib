var j="Invariant failed";function S(e,t){if(!e)throw new Error(j)}const{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__,{global:d}=__STORYBOOK_MODULE_GLOBAL__;function Y(){let e=d.document.documentElement,t=Math.max(e.scrollHeight,e.offsetHeight);return{width:Math.max(e.scrollWidth,e.offsetWidth),height:t}}function K(){let e=d.document.createElement("canvas");e.id="storybook-addon-measure";let t=e.getContext("2d");S(t!=null);let{width:o,height:l}=Y();return A(e,t,{width:o,height:l}),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.zIndex="2147483647",e.style.pointerEvents="none",d.document.body.appendChild(e),{canvas:e,context:t,width:o,height:l}}function A(e,t,{width:o,height:l}){e.style.width=`${o}px`,e.style.height=`${l}px`;let i=d.window.devicePixelRatio;e.width=Math.floor(o*i),e.height=Math.floor(l*i),t.scale(i,i)}var h={};function G(){h.canvas||(h=K())}function H(){h.context&&h.context.clearRect(0,0,h.width??0,h.height??0)}function U(e){H(),e(h.context)}function V(){S(h.canvas),S(h.context),A(h.canvas,h.context,{width:0,height:0});let{width:e,height:t}=Y();A(h.canvas,h.context,{width:e,height:t}),h.width=e,h.height=t}function Z(){h.canvas&&(H(),h.canvas.parentNode?.removeChild(h.canvas),h={})}var w={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},c=6;function W(e,{x:t,y:o,w:l,h:i,r:n}){t=t-l/2,o=o-i/2,l<2*n&&(n=l/2),i<2*n&&(n=i/2),e.beginPath(),e.moveTo(t+n,o),e.arcTo(t+l,o,t+l,o+i,n),e.arcTo(t+l,o+i,t,o+i,n),e.arcTo(t,o+i,t,o,n),e.arcTo(t,o,t+l,o,n),e.closePath()}function J(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom,s=r+o.left+t.left,u=n+o.top+t.top;return e==="top"?s+=f/2:e==="right"?(s+=f,u+=a/2):e==="bottom"?(s+=f/2,u+=a):e==="left"?u+=a/2:e==="center"&&(s+=f/2,u+=a/2),{x:s,y:u}}function Q(e,t,{margin:o,border:l,padding:i},n,r){let f=m=>0,a=0,s=0,u=r?1:.5,g=r?n*2:0;return e==="padding"?f=m=>i[m]*u+g:e==="border"?f=m=>i[m]+l[m]*u+g:e==="margin"&&(f=m=>i[m]+l[m]+o[m]*u+g),t==="top"?s=-f("top"):t==="right"?a=f("right"):t==="bottom"?s=f("bottom"):t==="left"&&(a=-f("left")),{offsetX:a,offsetY:s}}function x(e,t){return Math.abs(e.x-t.x)<Math.abs(e.w+t.w)/2&&Math.abs(e.y-t.y)<Math.abs(e.h+t.h)/2}function tt(e,t,o){return e==="top"?t.y=o.y-o.h-c:e==="right"?t.x=o.x+o.w/2+c+t.w/2:e==="bottom"?t.y=o.y+o.h+c:e==="left"&&(t.x=o.x-o.w/2-c-t.w/2),{x:t.x,y:t.y}}function X(e,t,{x:o,y:l,w:i,h:n},r){return W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),{x:o,y:l,w:i,h:n}}function C(e,t){e.font="600 12px monospace",e.textBaseline="middle",e.textAlign="center";let o=e.measureText(t),l=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,i=o.width+c*2,n=l+c*2;return{w:i,h:n}}function et(e,t,{type:o,position:l="center",text:i},n,r=!1){let{x:f,y:a}=J(l,t),{offsetX:s,offsetY:u}=Q(o,l,t,c+1,r);f+=s,a+=u;let{w:g,h:m}=C(e,i);if(n&&x({x:f,y:a,w:g,h:m},n)){let v=tt(l,{x:f,y:a,w:g},n);f=v.x,a=v.y}return X(e,o,{x:f,y:a,w:g,h:m},i)}function ot(e,{w:t,h:o}){let l=t*.5+c,i=o*.5+c;return{offsetX:(e.x==="left"?-1:1)*l,offsetY:(e.y==="top"?-1:1)*i}}function it(e,t,{type:o,text:l}){let{floatingAlignment:i,extremities:n}=t,r=n[i.x],f=n[i.y],{w:a,h:s}=C(e,l),{offsetX:u,offsetY:g}=ot(i,{w:a,h:s});return r+=u,f+=g,X(e,o,{x:r,y:f,w:a,h:s},l)}function E(e,t,o,l){let i=[];o.forEach((n,r)=>{let f=l&&n.position==="center"?it(e,t,n):et(e,t,n,i[r-1],l);i[r]=f})}function lt(e,t,o,l){let i=o.reduce((n,r)=>(Object.prototype.hasOwnProperty.call(n,r.position)||(n[r.position]=[]),n[r.position]?.push(r),n),{});i.top&&E(e,t,i.top,l),i.right&&E(e,t,i.right,l),i.bottom&&E(e,t,i.bottom,l),i.left&&E(e,t,i.left,l),i.center&&E(e,t,i.center,l)}var L={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},B=30;function p(e){return parseInt(e.replace("px",""),10)}function b(e){return Number.isInteger(e)?e:e.toFixed(2)}function P(e){return e.filter(t=>t.text!==0&&t.text!=="0")}function nt(e){let t={top:d.window.scrollY,bottom:d.window.scrollY+d.window.innerHeight,left:d.window.scrollX,right:d.window.scrollX+d.window.innerWidth},o={top:Math.abs(t.top-e.top),bottom:Math.abs(t.bottom-e.bottom),left:Math.abs(t.left-e.left),right:Math.abs(t.right-e.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}function ft(e){let t=d.getComputedStyle(e),{top:o,left:l,right:i,bottom:n,width:r,height:f}=e.getBoundingClientRect(),{marginTop:a,marginBottom:s,marginLeft:u,marginRight:g,paddingTop:m,paddingBottom:v,paddingLeft:k,paddingRight:F,borderBottomWidth:I,borderTopWidth:D,borderLeftWidth:$,borderRightWidth:N}=t;o=o+d.window.scrollY,l=l+d.window.scrollX,n=n+d.window.scrollY,i=i+d.window.scrollX;let y={top:p(a),bottom:p(s),left:p(u),right:p(g)},q={top:p(m),bottom:p(v),left:p(k),right:p(F)},z={top:p(D),bottom:p(I),left:p($),right:p(N)},_={top:o-y.top,bottom:n+y.bottom,left:l-y.left,right:i+y.right};return{margin:y,padding:q,border:z,top:o,left:l,bottom:n,right:i,width:r,height:f,extremities:_,floatingAlignment:nt(_)}}function rt(e,{margin:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l+t.bottom+t.top;e.fillStyle=L.margin,e.fillRect(n,i-t.top,o,t.top),e.fillRect(f,i-t.top,t.right,a),e.fillRect(n,r,o,t.bottom),e.fillRect(n-t.left,i-t.top,t.left,a);let s=[{type:"margin",text:b(t.top),position:"top"},{type:"margin",text:b(t.right),position:"right"},{type:"margin",text:b(t.bottom),position:"bottom"},{type:"margin",text:b(t.left),position:"left"}];return P(s)}function at(e,{padding:t,border:o,width:l,height:i,top:n,left:r,bottom:f,right:a}){let s=l-o.left-o.right,u=i-t.top-t.bottom-o.top-o.bottom;e.fillStyle=L.padding,e.fillRect(r+o.left,n+o.top,s,t.top),e.fillRect(a-t.right-o.right,n+t.top+o.top,t.right,u),e.fillRect(r+o.left,f-t.bottom-o.bottom,s,t.bottom),e.fillRect(r+o.left,n+t.top+o.top,t.left,u);let g=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return P(g)}function st(e,{border:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l-t.top-t.bottom;e.fillStyle=L.border,e.fillRect(n,i,o,t.top),e.fillRect(n,r-t.bottom,o,t.bottom),e.fillRect(n,i+t.top,t.left,a),e.fillRect(f-t.right,i+t.top,t.right,a);let s=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return P(s)}function ht(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom;return e.fillStyle=L.content,e.fillRect(r+o.left+t.left,n+o.top+t.top,f,a),[{type:"content",position:"center",text:`${b(f)} x ${b(a)}`}]}function ut(e){return t=>{if(e&&t){let o=ft(e),l=rt(t,o),i=at(t,o),n=st(t,o),r=ht(t,o),f=o.width<=B*3||o.height<=B;lt(t,o,[...r,...i,...n,...l],f)}}}function dt(e){U(ut(e))}var mt=(e,t)=>{let o=d.document.elementFromPoint(e,t),l=i=>{if(i&&i.shadowRoot){let n=i.shadowRoot.elementFromPoint(e,t);return i.isEqualNode(n)?i:n.shadowRoot?l(n):n}return i};return l(o)||o},O,M={x:0,y:0};function R(e,t){O=mt(e,t),dt(O)}var gt=(e,t)=>{let{measureEnabled:o}=t.globals;return T(()=>{let l=i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),M.x=i.clientX,M.y=i.clientY})};return document.addEventListener("pointermove",l),()=>{document.removeEventListener("pointermove",l)}},[]),T(()=>{let l=n=>{window.requestAnimationFrame(()=>{n.stopPropagation(),R(n.clientX,n.clientY)})},i=()=>{window.requestAnimationFrame(()=>{V()})};return t.viewMode==="story"&&o&&(document.addEventListener("pointerover",l),G(),window.addEventListener("resize",i),R(M.x,M.y)),()=>{window.removeEventListener("resize",i),Z()}},[o,t.viewMode]),e()},pt="measureEnabled",ct=[gt],wt={[pt]:!1};export{ct as decorators,wt as initialGlobals};
