import { MainHeader } from '@/layouts/headers/MainHeader'
import styles from './MainPage.module.css'
import { BASE_HEADER_MENU_LINKS } from '@/common/common'
import { MainFooter } from '@/layouts/footers/MainFooter'
import { Hero } from './Hero'
import { About } from './About'

export const MainPage = () => {
  return (
    <div className={styles['content__wrapper']}>
      <MainHeader menuLinks={BASE_HEADER_MENU_LINKS} />
      <main className={styles['content']}>
        <Hero />
        <About />
      </main>
      <MainFooter />
    </div>
  )
}
