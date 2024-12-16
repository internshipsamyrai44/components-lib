import { Button } from '@/components'
import { cn } from '@/lib/utils'
import { LoaderLinear } from "@/components/loaderLinear";
import Modal from "@/components/modal/modal";

export function App() {

  return (
    <div className={cn('bg-danger-100')}>
      <LoaderLinear/>
      <div className={'flex-auto flex-col align-middle wid'}>
        Hello
        <Button variant={'primary'}>Click me</Button>
        <Modal title={'Title'} >We have sent a link to confirm your email to epam@epam.com</Modal>
      </div>
    </div>
  )
}
