import { MainHeader } from '@/layouts/headers/MainHeader'
import styles from './MainPage.module.css'
import { BASE_ACTIVITIES_CARDS_CONTENT, BASE_HEADER_MENU_LINKS } from '@/common/common'
import { MainFooter } from '@/layouts/footers/MainFooter'
import { Hero } from './Hero'
import { About } from './About'
import { Activities } from './Activities'
import { Information } from './Information'

export const MainPage = () => {
  return (
    <div className={styles['content__wrapper']}>
      <MainHeader menuLinks={BASE_HEADER_MENU_LINKS} />
      <main className={styles['content']}>
        <Hero />
        <About />
        <Activities activities={BASE_ACTIVITIES_CARDS_CONTENT} />
        <Information />
      </main>
      <MainFooter />
    </div>
  )
}
