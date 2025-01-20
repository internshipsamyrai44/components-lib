import { Button, Header, Tabs, TabsContent } from '@/components'
import { LoaderLinear } from '@/components/loaderLinear'
import { Modal } from '@/components/modal/modal'
import { cn } from '@/lib/utils'

export function App() {
  const tabs = [
    { disabled: false, title: 'Tab 1', value: 'tab1' },
    { disabled: false, title: 'Tab 2', value: 'tab2' },
    { disabled: true, title: 'Tab 3', value: 'tab3' }, // Отключённая вкладка
  ]

  return (
    <div className={cn('bg-danger-100')}>
      <LoaderLinear />
      <div className={'flex-auto flex-col align-middle wid'}>
        Hello
        <Button variant={'primary'}>Click me</Button>
        {/*<Modal title={'Title'}>We have sent a link to confirm your email to epam@epam.com</Modal>*/}
        <Header />
        <Tabs defaultValue={'tab1'} fullWidth tabs={tabs}>
          <TabsContent value={'tab1'}>
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value={'tab2'}>
            <p>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value={'tab3'}>
            <p>Content for Tab 3 (disabled)</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
