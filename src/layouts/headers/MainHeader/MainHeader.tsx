'use client'

import styles from './MainHeader.module.css'
import Image from 'next/image'
import YasndexLogoRus from '@/assets/yandex-logo-rus.svg'
import BurgerMenuIcon from '@/assets/burger-menu-icon.svg'
import Link from 'next/link'
import { HeaderMenuLinks } from '@/common/common'
import { MobileNavMenu } from '@/layouts/MobileNavMenu'
import { useState } from 'react'

type IMainHeader = {
  menuLinks: HeaderMenuLinks
}

export const MainHeader = (props: IMainHeader) => {
  const { menuLinks } = props
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <header className={styles['header']}>
        <Link href="##" className={styles['header__logo-link']}>
          <Image src={YasndexLogoRus} className={styles['header__logo']} alt="Яндекс логотип" />
        </Link>
        <nav className={styles['header__nav-menu']}>
          <ul className={styles['header__list']}>
            {menuLinks.map((el, ind) => (
              <li className={styles['header__list-item']} key={ind}>
                <Link href={el.href} className={styles['header__nav-link']}>
                  {el.lable}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={styles['header__burger-menu-btn']}>
          <Image
            src={BurgerMenuIcon}
            alt="Меню"
            className={styles['header__burger-menu-img']}
            onClick={() => void setIsMobileOpen(true)}
          ></Image>
        </button>
      </header>
      <MobileNavMenu
        dialogProps={{ open: isMobileOpen, onOpenChange: setIsMobileOpen }}
        menuLinks={menuLinks}
      />
    </>
  )
}

export default MainHeader
