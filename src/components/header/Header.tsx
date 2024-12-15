import s from './Header.module.scss'
import { Button, Select, SelectItem } from '@/components'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '@/assets'

const Header = () => {
  return (
    <header className={s['header-container']}>
      <a className={s['header-logo']} href={'/'}>
        Inctagram
      </a>
      <div className={s['functional-container']}>
        <div className={s['select']}>
          <Select defaultValue={'en'}>
            <SelectItem value={'en'}>
              <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
                <FlagUnitedKingdomIcon />
                <span>English</span>
              </div>
            </SelectItem>
            <SelectItem value={'ru'}>
              <div style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
                <FlagRussiaIcon />
                <span>Russian</span>
              </div>
            </SelectItem>
          </Select>
        </div>
        <Button asChild variant={'ghost'}>
          <a href={'/auth/login'}>Log in</a>
        </Button>
        <Button asChild variant={'primary'}>
          <a href={'/auth/signup'}>Sign up</a>
        </Button>
      </div>
    </header>
  )
}

Header.displayName = 'Header'
export { Header }
