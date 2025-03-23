import{j as e}from"./jsx-runtime-DcL3VY2S.js";import{I as r}from"./input-jeyK762o.js";import"./index-BYqfdl9-.js";import"./StatisticsIcon-B0kHbSKU.js";import"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";const x={component:r,title:"Components/Input"},a={args:{id:"email",label:"Email",placeholder:"Epam@epam.com",type:"email"}},s={args:{id:"name",label:"Name",placeholder:"Name",required:!0,type:"text"}},p={args:{id:"password",label:"Email",placeholder:"Epam@epam.com",type:"password"}},l={args:{id:"search",placeholder:"Input search",type:"search"}},o={render:()=>e.jsxs("div",{className:"flex flex-col w-full gap-10",children:[e.jsx(r,{disabled:!0,id:"disabled-input",label:"Email",placeholder:"Epam@epam.com",type:"text"}),e.jsx(r,{disabled:!0,id:"disabled-password",label:"Email",placeholder:"Epam@epam.com",type:"password"}),e.jsx("div",{className:"pt-5",children:e.jsx(r,{disabled:!0,id:"disabled-search",placeholder:"Input search",type:"search"})})]})},d={args:{errorMessage:"Error text",id:"error-input",label:"Email",placeholder:"Epam@epam.com",type:"text"},render:t=>e.jsxs("div",{className:"flex flex-col w-full gap-10",children:[e.jsx(r,{...t}),e.jsx(r,{...t,id:"error-password",type:"password"}),e.jsx(r,{...t,id:"error-search",placeholder:"Input search",type:"search"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'email',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'email'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    required: true,
    type: 'text'
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'password',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'password'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'search',
    placeholder: 'Input search',
    type: 'search'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-col w-full gap-10'}>\r
      <Input disabled id={'disabled-input'} label={'Email'} placeholder={'Epam@epam.com'} type={'text'} />\r
      <Input disabled id={'disabled-password'} label={'Email'} placeholder={'Epam@epam.com'} type={'password'} />\r
      <div className={'pt-5'}>\r
        <Input disabled id={'disabled-search'} placeholder={'Input search'} type={'search'} />\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    errorMessage: 'Error text',
    id: 'error-input',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'text'
  },
  render: args => <div className={'flex flex-col w-full gap-10'}>\r
      <Input {...args} />\r
      <Input {...{
      ...args,
      id: 'error-password',
      type: 'password'
    }} />\r
      <Input {...{
      ...args,
      id: 'error-search',
      placeholder: 'Input search',
      type: 'search'
    }} />\r
    </div>
}`,...d.parameters?.docs?.source}}};const b=["Default","Required","Password","SearchMode","Disabled","ErrorMessage"];export{a as Default,o as Disabled,d as ErrorMessage,p as Password,s as Required,l as SearchMode,b as __namedExportsOrder,x as default};
