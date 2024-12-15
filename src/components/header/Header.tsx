import { Button, Select, SelectItem } from '@/components'
import { FlagRussiaIcon, FlagUnitedKingdomIcon } from '@/assets'
import { Typography } from '@/components/typography'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s['header-container']}>
      <Typography as={'a'} variant={'large'} href={'/'}>
        Inctagram
      </Typography>
      <div className={s['functional-container']}>
        <div className={s['select']}>
          <Select defaultValue={'en'}>
            <SelectItem value={'en'}>
              <div className={s['select-value']}>
                <FlagUnitedKingdomIcon />
                <span>English</span>
              </div>
            </SelectItem>
            <SelectItem value={'ru'}>
              <div className={s['select-value']}>
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
