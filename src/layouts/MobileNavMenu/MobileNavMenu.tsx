import {
  Close,
  Content,
  Dialog,
  DialogProps,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog'
import styles from './MobileNavMenu.module.css'
import commonStyles from '@/styles/common.module.css'
import { BURGER_MENU_APPEARANCE_WIDTH, HeaderMenuLinks } from '@/common/common'
import Link from 'next/link'
import Image from 'next/image'
import YasndexLogoRus from '@/assets/yandex-logo-rus.svg'
import СrossIcon from '@/assets/cross-icon.svg'
import clsx from 'clsx'
import { useEffect } from 'react'

type IMobileNavMenu = {
  dialogProps: DialogProps
  menuLinks: HeaderMenuLinks
}

export const MobileNavMenu = (props: IMobileNavMenu) => {
  const { dialogProps, menuLinks } = props

  useEffect(() => {
    const resizeEvent = () => {
      if (window.innerWidth > BURGER_MENU_APPEARANCE_WIDTH) {
        dialogProps.onOpenChange && dialogProps.onOpenChange(false)
      }
    }
    window.addEventListener('resize', resizeEvent)

    return () => window.removeEventListener('resize', resizeEvent)
  }, [])

  return (
    <Root {...dialogProps}>
      <Portal>
        <Overlay className={styles['menu__overlay']} />
        <Content className={styles['menu__content']}>
          <div className={styles['menu__top']}>
            <Link href="##" className={styles['menu__logo-link']}>
              <Image src={YasndexLogoRus} className={styles['menu__logo']} alt="Яндекс логотип" />
            </Link>
            <Close asChild>
              <button className={styles['menu__close-btn']} aria-label="Закрыть меню">
                <Image src={СrossIcon} alt="Закрыть меню"></Image>
              </button>
            </Close>
          </div>
          <nav className={styles['menu__nav-menu']}>
            <ul className={styles['menu__list']}>
              {menuLinks.map((el, ind) => (
                <li className={styles['menu__list-item']} key={ind}>
                  <Link href={el.href} className={styles['menu__nav-link']}>
                    {el.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className={clsx(styles['menu__registration-btn'], commonStyles['pink_btn'])}>
            Регистрация на&nbsp;фестиваль
          </button>
        </Content>
      </Portal>
    </Root>
  )
}
