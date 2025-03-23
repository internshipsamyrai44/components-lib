import{j as s}from"./jsx-runtime-DcL3VY2S.js";import{r as o}from"./index-BYqfdl9-.js";import{r as f}from"./index-BQLUQhrt.js";import{o as x}from"./StatisticsIcon-B0kHbSKU.js";import{c as y}from"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";const E="_container_1c9uk_1",h="_success_1c9uk_83",k="_error_1c9uk_93",S="_message_1c9uk_103",T="_cross_1c9uk_127",e={container:E,success:h,error:k,message:S,cross:T},j=i=>{const{alertType:t,callback:c,duration:p=5e3,message:n}=i,[d,u]=o.useState(!0),[g,_]=o.useState(n),m=()=>{u(!1),_(null),c&&c()};return o.useEffect(()=>{let l;return n&&(u(!0),l=setTimeout(()=>{m()},p)),()=>clearTimeout(l)},[]),f.createPortal(d&&s.jsxs("div",{"aria-live":"assertive",className:y(e.container,t==="success"?e.success:e.error),role:"alert",children:[s.jsxs("p",{className:e.message,children:[t==="error"&&s.jsx("span",{children:"Error! "}),g]}),s.jsx(x,{className:e.cross,onClick:m})]}),document.querySelector("body"))},M={component:j,title:"Components/Alertpopup"},r={args:{alertType:"success",duration:5e3,message:"Name was successfully changed"}},a={args:{alertType:"error",duration:5e3,message:"E-mail is invalid"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    alertType: 'success',
    duration: 5000,
    message: 'Name was successfully changed'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alertType: 'error',
    duration: 5000,
    message: 'E-mail is invalid'
  }
}`,...a.parameters?.docs?.source}}};const O=["Success","Error"];export{a as Error,r as Success,O as __namedExportsOrder,M as default};
