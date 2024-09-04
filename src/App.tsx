import { Button } from '@/components'
import { AlertPopup } from '@/components/alertPopup/AlertPopup'

export function App() {
  return (
    <div>
      Hello
      <Button variant={'primary'}>Click me</Button>
      <AlertPopup alertType={'success'} duration={10000} message={'poefjkoipedfk'} />
    </div>
  )
}
