import clsx from 'clsx'
import styles from './RegistrationBanner.module.css'
import commonStyles from '@/styles/common.module.css'

export const RegistrationBanner = () => {
  return (
    <div className={styles['registration-banner__wrapper']}>
      <section className={styles['registration-banner']}>
        <div className={styles['registration-banner__content']}>
          <div className={styles['registration-banner__title']}>
            Yandex
            <br />
            Mobile Runtime
          </div>
          <a
            role="button"
            href="##"
            className={clsx(styles['registration-banner__btn'], commonStyles['pink_btn'])}
          >
            Регистрация на&nbsp;фестивать
          </a>
        </div>
      </section>
    </div>
  )
}
