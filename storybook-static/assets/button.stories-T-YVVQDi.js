import{j as t}from"./jsx-runtime-DcL3VY2S.js";import{r as d}from"./index-BYqfdl9-.js";import{B as c}from"./button-D2xsgep2.js";import"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";import"./index-Dc00g9Il.js";const y={argTypes:{disabled:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},variant:{control:"select",options:["primary","secondary","outlined","ghost"]}},component:c,title:"Components/Button"},r={args:{children:"Primary",variant:"primary"}},e={args:{children:"Secondary",variant:"secondary"}},n={args:{...r.args,children:"Full Width",fullWidth:!0,variant:"secondary"},render:i=>(d.useRef(null),d.useRef(null),t.jsx("div",{children:t.jsx(c,{...i,children:"Go to google"})}))},a={args:{children:"outlined",variant:"outlined"}},o={args:{children:"ghost",variant:"ghost"}},s={args:{...r.args,children:"Link"},render:i=>t.jsx(c,{...i,asChild:!0,children:t.jsx("a",{children:"Go to google"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Full Width',
    fullWidth: true,
    variant: 'secondary'
  },
  render: args => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const anchorRef = useRef<HTMLAnchorElement>(null);
    return <div>\r
        <Button {...args}>Go to google</Button>\r
      </div>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'outlined',
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'ghost',
    variant: 'ghost'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: 'Link'
  },
  render: args => {
    return <Button {...args} asChild>\r
        <a>Go to google</a>\r
      </Button>;
  }
}`,...s.parameters?.docs?.source}}};const v=["Primary","Secondary","FullWidth","Outline","Ghost","AsLink"];export{s as AsLink,n as FullWidth,o as Ghost,a as Outline,r as Primary,e as Secondary,v as __namedExportsOrder,y as default};
