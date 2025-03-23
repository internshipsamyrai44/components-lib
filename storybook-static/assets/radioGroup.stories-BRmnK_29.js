import{j as a}from"./jsx-runtime-DcL3VY2S.js";import{r as l}from"./index-BYqfdl9-.js";import{R as r}from"./radioGroup-B0xeCEGf.js";import"./StatisticsIcon-B0kHbSKU.js";import"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";import"./index-Dks5pEMs.js";import"./index-BQLUQhrt.js";import"./index-Dc00g9Il.js";import"./index-CPBnro8f.js";import"./index-Btf1-9SM.js";import"./index-geQf4aiF.js";const b={component:r,title:"Components/RadioGroup"},o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],e={args:{options:o},render:()=>{const[s,n]=l.useState("option-2");return a.jsxs("div",{className:"flex flex-col w-full gap-10",children:[a.jsx(r,{defaultValue:s,onValueChange:n,options:o}),a.jsxs("span",{className:"text-h2 text-light-100 mt-5",children:["Selected Item: ",s]})]})}},t={args:{defaultValue:o[1]?.value,disabled:!0,options:o}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: options
  },
  render: () => {
    const [value, setValue] = useState<string>('option-2');
    return <div className={'flex flex-col w-full gap-10'}>\r
        <RadioGroup defaultValue={value} onValueChange={setValue} options={options} />\r
        <span className={'text-h2 text-light-100 mt-5'}>Selected Item: {value}</span>\r
      </div>;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: options[1]?.value,
    disabled: true,
    options: options
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","Disabled"];export{e as Default,t as Disabled,S as __namedExportsOrder,b as default};
