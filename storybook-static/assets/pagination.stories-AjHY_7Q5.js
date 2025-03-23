import{j as t}from"./jsx-runtime-DcL3VY2S.js";import{r as i}from"./index-BYqfdl9-.js";import"./index-BQLUQhrt.js";import"./StatisticsIcon-B0kHbSKU.js";import"./utils-BQ4MWdes.js";import"./button-D2xsgep2.js";import{P as g,S as h}from"./datePicker-Cy2PJ2fd.js";import"./card-H7C7swDk.js";import"./checkbox-DxUxdWm1.js";import"./input-jeyK762o.js";import"./radioGroup-B0xeCEGf.js";import"./recaptcha-KGISCGdF.js";import{S,a as C}from"./select-lWnORitX.js";import"./sidebar-Bu0KrEWT.js";import"./tabs-Iet1zHLn.js";import"./textarea-1Nwrf7p8.js";import"./Typography-CeVvjhep.js";import"./modal-CWyv7j6r.js";import"./loaderLinear-B0pFbGg7.js";import"./clsx-B-dksMZM.js";import"./index-Dc00g9Il.js";import"./index-Dks5pEMs.js";import"./index-Btf1-9SM.js";import"./index-DsNAVBjw.js";import"./index-geQf4aiF.js";import"./index-CPBnro8f.js";const K={args:{currentPage:1,onChangePage:()=>{},pageSize:1,totalCount:1e3},component:g,tags:["autodocs"],title:"Components/Pagination"},a={parameters:{docs:{description:{story:"This is the default usage of the Pagination component."}}},render:n=>{const[r,s]=i.useState(1),l=p=>{s(p)};return t.jsx(g,{currentPage:r,onChangePage:l,pageSize:n.pageSize,totalCount:n.totalCount})}},o={render:n=>{const[r,s]=i.useState(1),[l,p]=i.useState("1"),[u,c]=i.useState(1),m=e=>{s(e)},d=e=>{p(e),c(Number(e))},P=[{id:0,title:"1",value:"1"},{id:1,title:"5",value:"5"},{id:2,title:"10",value:"10"},{id:3,title:"20",value:"20"},{id:4,title:"30",value:"30"},{id:5,title:"50",value:"50"},{id:6,title:"100",value:"100"}];return t.jsx(g,{currentPage:r,onChangePage:m,pageSize:u,totalCount:n.totalCount,children:t.jsx(h,{content:["Показать","на странице"],children:t.jsx(S,{onValueChange:d,value:l,children:P.map(e=>t.jsx(C,{value:e.value,children:e.title},e.id))})})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This is the default usage of the Pagination component.'
      }
    }
  },
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(1);
    const handlePageChange = (num: number) => {
      setPage(num);
    };
    return <Pagination currentPage={page} onChangePage={handlePageChange} pageSize={args.pageSize} totalCount={args.totalCount} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(1);
    const [option, setOption] = useState('1');
    const [pageSize, setPageSize] = useState(1);
    const handlePageChange = (num: number) => {
      setPage(num);
    };
    const handleOptionChange = (value: string) => {
      setOption(value);
      setPageSize(Number(value));
    };
    const options = [{
      id: 0,
      title: '1',
      value: '1'
    }, {
      id: 1,
      title: '5',
      value: '5'
    }, {
      id: 2,
      title: '10',
      value: '10'
    }, {
      id: 3,
      title: '20',
      value: '20'
    }, {
      id: 4,
      title: '30',
      value: '30'
    }, {
      id: 5,
      title: '50',
      value: '50'
    }, {
      id: 6,
      title: '100',
      value: '100'
    }];
    return <Pagination currentPage={page} onChangePage={handlePageChange} pageSize={pageSize} totalCount={args.totalCount}>\r
        <SelectContainer content={['Показать', 'на странице']}>\r
          <Select onValueChange={handleOptionChange} value={option}>\r
            {options.map(option => <SelectItem key={option.id} value={option.value}>\r
                {option.title}\r
              </SelectItem>)}\r
          </Select>\r
        </SelectContainer>\r
      </Pagination>;
  }
}`,...o.parameters?.docs?.source}}};const L=["Default","PaginationWithSelect"];export{a as Default,o as PaginationWithSelect,L as __namedExportsOrder,K as default};
