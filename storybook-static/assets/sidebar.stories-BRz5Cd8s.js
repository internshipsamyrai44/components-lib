import{j as i}from"./jsx-runtime-DcL3VY2S.js";import{H as l,b as d,C as m,c as p,M as S,d as u,e as b,f as v,S as A,g as h,h as I,i as x,j as f,k as j,L as C,l as g}from"./StatisticsIcon-B0kHbSKU.js";import{S as s,a as k,b as L,c as a,d as n,e as o}from"./sidebar-Bu0KrEWT.js";import"./index-BYqfdl9-.js";import"./utils-BQ4MWdes.js";import"./clsx-B-dksMZM.js";const F={component:s,title:"Components/Sidebar"},c=[{icon:d,iconActive:l,title:"Home",url:"#"},{icon:p,iconActive:m,title:"Create",url:"#"},{icon:u,iconActive:S,title:"My Profile",url:"#"},{icon:v,iconActive:b,title:"Messenger",url:"#"},{icon:h,iconActive:A,title:"Search",url:"#"},{icon:x,iconActive:I,title:"Statistics",url:"#"},{icon:j,iconActive:f,title:"Favorites",url:"#"},{icon:g,iconActive:C,title:"Log Out",url:"#"}],t={args:{children:i.jsx(s,{children:i.jsxs(k,{children:[i.jsxs(L,{children:[i.jsx(a,{children:c.slice(0,5).map((e,r)=>i.jsx(n,{href:e.url,isActive:r===0,children:i.jsx(o,{icon:e.icon,iconActive:e.iconActive,isActive:r===0,isDisabled:r===1,title:e.title})},e.title))}),i.jsx(a,{className:"gap-6",children:c.slice(5,7).map(e=>i.jsx(n,{href:e.url,children:i.jsx(o,{icon:e.icon,title:e.title})},e.title))})]}),c.slice(-1).map(e=>i.jsx(n,{href:e.url,children:i.jsx(o,{icon:e.icon,title:e.title})},e.title))]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Sidebar>\r
        <SidebarContent>\r
          <SidebarGroup>\r
            <SidebarGroupContent>\r
              {options.slice(0, 5).map((item, index) => <SidebarLink href={item.url} isActive={index === 0} key={item.title}>\r
                  <SidebarItem icon={item.icon} iconActive={item.iconActive} isActive={index === 0} isDisabled={index === 1} title={item.title} />\r
                </SidebarLink>)}\r
            </SidebarGroupContent>\r
            <SidebarGroupContent className={'gap-6'}>\r
              {options.slice(5, 7).map(item => <SidebarLink href={item.url} key={item.title}>\r
                  <SidebarItem icon={item.icon} title={item.title} />\r
                </SidebarLink>)}\r
            </SidebarGroupContent>\r
          </SidebarGroup>\r
          {options.slice(-1).map(item => <SidebarLink href={item.url} key={item.title}>\r
              <SidebarItem icon={item.icon} title={item.title} />\r
            </SidebarLink>)}\r
        </SidebarContent>\r
      </Sidebar>
  }
}`,...t.parameters?.docs?.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,F as default};
