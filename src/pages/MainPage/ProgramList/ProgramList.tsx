import { TProgramEvent } from '@/common/common'
import styles from './ProgramList.module.css'
import { SmallPersonCard } from '@/components/crads/SmallPersonCard'
import clsx from 'clsx'

type IProgramList = {
  events: Array<TProgramEvent>
}

export const ProgramList = (props: IProgramList) => {
  const { events } = props

  return (
    <div className={styles['program-list']}>
      <ul className={styles['program-list__list']}>
        {events.map((el, ind) => {
          return (
            <li className={styles['program-list__list-item']} key={ind}>
              <span className={styles['program-list__time-interval']}>{el.timeInterval}</span>
              <div
                className={clsx(
                  styles['program-list__content'],
                  !(el.presenters && el.presenters.length !== 0) &&
                    styles['program-list__content_center']
                )}
              >
                <span className={styles['program-list__title']}>{el.title}</span>
                {el.presenters && el.presenters.length !== 0 && (
                  <ul className={styles['program-list__presenters-list']}>
                    {el.presenters.map((presenter, ind) => (
                      <li className={styles['program-list__presenters-list-item']} key={ind}>
                        <SmallPersonCard
                          person={presenter}
                          classNames={{ image: styles['person__img'] }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {el.type && <span className={styles['program-list__type']}>{el.type}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
