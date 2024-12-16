import { Button } from '@/components'
import { cn } from '@/lib/utils'
import { LoaderLinear } from "@/components/loaderLinear";

export function App() {

  return (
    <div className={cn('bg-danger-100')}>
      <LoaderLinear/>
      <div className={'flex-auto flex-col align-middle wid'}>
        Hello
        <Button variant={'primary'}>Click me</Button>
      </div>
    </div>
  )
}
