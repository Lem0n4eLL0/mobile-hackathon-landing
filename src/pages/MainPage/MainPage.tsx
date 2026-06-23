import { MainHeader } from '@/layouts/headers/MainHeader'
import styles from './MainPage.module.css'
import { BASE_HEADER_MENU_LINKS } from '@/common/common'
import { MainFooter } from '@/layouts/footers/MainFooter'

export const MainPage = () => {
  return (
    <div className={styles.content__wrapper}>
      <MainHeader menuLinks={BASE_HEADER_MENU_LINKS} />
      <main className={styles.content}>Main Page</main>
      <MainFooter />
    </div>
  )
}
