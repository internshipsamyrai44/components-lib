import { Button } from '@/components'
import { AlertPopup } from '@/components/alertPopup/AlertPopup'
import { Tabs } from '@/components/tabs/tabsRoot'

import './index.css'

export function App() {
  return (
    <div className={'flex-auto flex-col align-middle wid bg-dark-500'}>
      Hello
      <Button variant={'primary'}>Click me</Button>
      <AlertPopup alertType={'error'} message={'Name was successfully changed'} />
      <Tabs
        tabs={[
          { title: 'Tab 1', value: 'tab1' },
          { disabled: true, title: 'Tab 2', value: 'tab2' },
          { title: 'Tab 3', value: 'tab3' },
          { title: 'Tab 4', value: 'tab4' },
          { title: 'Tab 5', value: 'tab5' },
        ]}
      />
    </div>
  )
}
