import { Button } from '@/components'
import { AlertPopup } from '@/components/alertPopup/AlertPopup'

import './index.css'

export function App() {
  return (
    <div className={'flex-auto flex-col align-middle wid bg-dark-500'}>
      Hello
      <Button variant={'primary'}>Click me</Button>
      <AlertPopup alertType={'error'} message={'Name was successfully changed'} />
    </div>
  )
}
