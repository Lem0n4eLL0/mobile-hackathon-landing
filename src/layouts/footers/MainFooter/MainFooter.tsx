import styles from './MainFooter.module.css'
import Image from 'next/image'
import Link from 'next/link'
import fbkIcon from '@/assets/fbk-icon.svg'
import vkIcon from '@/assets/vk-icon.svg'
import tgIcon from '@/assets/tg-icon.svg'

export const MainFooter = () => {
  return (
    <div className={styles['footer__wrapper']}>
      <footer className={styles['footer']}>
        <div className={styles['footer__links-block']}>
          <a href="##" className={styles['footer__link']}>
            Связаться с&nbsp;организатором
          </a>
          <a href="##" className={styles['footer__link']}>
            Правила участия
          </a>
        </div>

        <div className={styles['footer__social-media-block']}>
          <h4 className={styles['footer__social-media-block-title']}>Yandex for&nbsp;Developers</h4>
          <ul className={styles['footer__social-media-block-list']}>
            <li className={styles['footer__social-media-block-list-item']}>
              <Link href="##" className={styles['footer__social-media-block-link']}>
                <Image src={vkIcon} alt="##" />
              </Link>
            </li>
            <li className={styles['footer__social-media-block-list-item']}>
              <Link href="##" className={styles['footer__social-media-block-link']}>
                <Image src={tgIcon} alt="##" />
              </Link>
            </li>
            <li className={styles['footer__social-media-block-list-item']}>
              <Link href="##" className={styles['footer__social-media-block-link']}>
                <Image src={fbkIcon} alt="##" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer__copyright-block']}>
          <span className={styles['footer__copyright']}>
            Все материалы доступны по&nbsp;лицензии CC&nbsp;BY-NC&nbsp;3.0 с&nbsp;обязательным
            указанием &copy;&nbsp;ООО &laquo;Яндекс&raquo;
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MainFooter
