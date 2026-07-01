import clsx from 'clsx'
import styles from './Hero.module.css'
import commonStyles from '@/styles/common.module.css'

export const Hero = () => {
  return (
    <div className={styles['hero__wrapper']}>
      <section className={styles['hero']}>
        <ul className={styles['hero__list']}>
          <li className={styles['hero__list-item']}>23&nbsp;августа</li>
        </ul>
        <div className={styles['hero__content']}>
          <h1 className={styles['hero__title']}>
            Yandex
            <br />
            Mobile Runtime
          </h1>
          <p className={styles['hero__subtitle']}>
            Фестиваль практики и&nbsp;технобатлов для&nbsp;мобильных разработчиков
          </p>
        </div>
        <a role="button" href="##" className={clsx(commonStyles['pink_btn'], styles['hero__btn'])}>
          Регистрация на&nbsp;фестивать
        </a>
      </section>
    </div>
  )
}
