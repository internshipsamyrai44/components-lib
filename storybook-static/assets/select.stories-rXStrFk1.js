import{j as e}from"./jsx-runtime-DcL3VY2S.js";import{F as p,a as m}from"./StatisticsIcon-B0kHbSKU.js";import{S as u,a as r,b as o,c as i,d as S}from"./select-lWnORitX.js";import"./index-BYqfdl9-.js";import"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";import"./index-BQLUQhrt.js";import"./index-Dks5pEMs.js";import"./index-Dc00g9Il.js";import"./index-Btf1-9SM.js";import"./index-geQf4aiF.js";const L={component:u,tags:["autodocs"],title:"Components/Select"},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"1",children:"First option"}),e.jsx(r,{value:"2",children:"Second option"}),e.jsx(r,{value:"3",children:"Third option"}),e.jsx(r,{value:"4",children:"Fourth option"}),e.jsx(r,{value:"5",children:"Fifth option"})]}),placeholder:"Primary Select"}},h=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],n={args:{children:e.jsx(e.Fragment,{children:h.map(({label:d,value:s})=>e.jsx(r,{value:s,children:d},s))}),placeholder:"Secondary Select"}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"1",children:"First option"}),e.jsx(r,{value:"2",children:"Second option"}),e.jsx(r,{value:"3",children:"Third option"}),e.jsx(r,{value:"4",children:"Fourth option"}),e.jsx(r,{value:"5",children:"Fifth option"})]}),disabled:!0,placeholder:"Disabled"}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(i,{children:"Group 1"}),e.jsx(r,{value:"1",children:"1"}),e.jsx(S,{}),e.jsx(r,{value:"2",children:"2"}),e.jsx(r,{value:"3",children:"3"})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Group 2"}),e.jsx(r,{value:"4",children:"4"}),e.jsx(r,{value:"5",children:"5"}),e.jsx(r,{value:"6",children:"6"})]})]}),placeholder:"Select a theme"}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"en",children:e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:12},children:[e.jsx(p,{}),e.jsx("span",{children:"English"})]})}),e.jsx(r,{value:"ru",children:e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:12},children:[e.jsx(m,{}),e.jsx("span",{children:"Russian"})]})})]}),defaultValue:"en",placeholder:"WithIcon"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <SelectItem value={'1'}>First option</SelectItem>\r
        <SelectItem value={'2'}>Second option</SelectItem>\r
        <SelectItem value={'3'}>Third option</SelectItem>\r
        <SelectItem value={'4'}>Fourth option</SelectItem>\r
        <SelectItem value={'5'}>Fifth option</SelectItem>\r
      </>,
    placeholder: 'Primary Select'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        {options.map(({
        label,
        value
      }) => {
        return <SelectItem key={value} value={value}>\r
              {label}\r
            </SelectItem>;
      })}\r
      </>,
    placeholder: 'Secondary Select'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <SelectItem value={'1'}>First option</SelectItem>\r
        <SelectItem value={'2'}>Second option</SelectItem>\r
        <SelectItem value={'3'}>Third option</SelectItem>\r
        <SelectItem value={'4'}>Fourth option</SelectItem>\r
        <SelectItem value={'5'}>Fifth option</SelectItem>\r
      </>,
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <SelectGroup>\r
          <SelectLabel>Group 1</SelectLabel>\r
          <SelectItem value={'1'}>1</SelectItem>\r
          <SelectSeparator />\r
          <SelectItem value={'2'}>2</SelectItem>\r
          <SelectItem value={'3'}>3</SelectItem>\r
        </SelectGroup>\r
        <SelectGroup>\r
          <SelectLabel>Group 2</SelectLabel>\r
          <SelectItem value={'4'}>4</SelectItem>\r
          <SelectItem value={'5'}>5</SelectItem>\r
          <SelectItem value={'6'}>6</SelectItem>\r
        </SelectGroup>\r
      </>,
    placeholder: 'Select a theme'
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <SelectItem value={'en'}>\r
          <div style={{
          alignItems: 'center',
          display: 'flex',
          gap: 12
        }}>\r
            <FlagUnitedKingdomIcon />\r
            <span>English</span>\r
          </div>\r
        </SelectItem>\r
        <SelectItem value={'ru'}>\r
          <div style={{
          alignItems: 'center',
          display: 'flex',
          gap: 12
        }}>\r
            <FlagRussiaIcon />\r
            <span>Russian</span>\r
          </div>\r
        </SelectItem>\r
      </>,
    defaultValue: 'en',
    placeholder: 'WithIcon'
  }
}`,...c.parameters?.docs?.source}}};const R=["Primary","Secondary","Disabled","WithGroups","WithIcon"];export{l as Disabled,t as Primary,n as Secondary,a as WithGroups,c as WithIcon,R as __namedExportsOrder,L as default};
