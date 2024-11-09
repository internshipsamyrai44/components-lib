import { Button } from '@/components'
import { cn } from '@/lib/utils'

export function App() {
  const changePage = () => {
    console.log('yo')
  }

  return (
    <div className={cn('bg-danger-100')}>
      <div className={'flex-auto flex-col align-middle wid'}>
        Hello
        <Button variant={'primary'}>Click me</Button>
      </div>
    </div>
  )
}
