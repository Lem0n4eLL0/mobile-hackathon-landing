'use client'
import { Collapse } from '@/components/Collapse'
import Image from 'next/image'
import styles from './Information.module.css'
import commonStyles from '@/styles/common.module.css'
import arrow from '@/assets/arrow-down-white.svg'
import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { BASE_JURY_CARDS_CONTENT, BASE_TIMING_CARDS_CONTENT } from '@/common/common'
import { Jury } from '../Jury'
import { Timing } from '../Timing'

export const Information = () => {
  const [isCollapsOpened, setIsCollapsOpened] = useState(false)

  const collapsHandler = (isOpened: boolean) => {
    setIsCollapsOpened(isOpened)
  }

  return (
    <div id="information" className={styles['information__wrapper']}>
      <section className={styles['information']}>
        <h2 className={styles['information__title']}>
          AI-хакатон для&nbsp;мобильных разработчиков
        </h2>
        <p className={styles['information__description']}>
          Соберите команду, с&nbsp;которой вы&nbsp;напишите приложение по&nbsp;задаче
          от&nbsp;организаторов
        </p>
        <Collapse
          title={
            <div className={styles['collapse__title']}>
              <span className={styles['collapse__text']}>Подробнее</span>
              <div className={styles['collapse__img-wrapper']}>
                <Image
                  className={clsx(
                    styles['collapse__img'],
                    isCollapsOpened && styles['collapse__img_opened']
                  )}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          }
          isOpen={isCollapsOpened}
          onToggle={collapsHandler}
          classes={{
            root: clsx(isCollapsOpened && styles['collapse_opened']),
            titleWrapper: clsx(styles['collapse__title-wrapper']),
          }}
        >
          <div className={styles['information__content']}>
            <Timing timings={BASE_TIMING_CARDS_CONTENT} />
            <Jury persons={BASE_JURY_CARDS_CONTENT} />
            <a
              role="button"
              href="##"
              className={clsx(styles['information__btn'], commonStyles['black_btn'])}
            >
              Записаться на&nbsp;хакатон
            </a>
          </div>
        </Collapse>
      </section>
    </div>
  )
}
