import { Button } from '@/components'
import { Pagination } from '@/components/pagination/pagination'

export function App() {
  const changePage = () => {
    console.log('yo')
  }

  return (
    <div className={'bg-danger-100 flex-auto flex-col align-middle wid'}>
      Hello
      <Button variant={'primary'}>Click me</Button>
      <Pagination currentPage={1} onChangePage={changePage} pageSize={1} totalCount={10} />
    </div>
  )
}
