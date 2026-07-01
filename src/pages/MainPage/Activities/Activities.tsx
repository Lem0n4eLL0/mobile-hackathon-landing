import clsx from 'clsx'
import styles from './Activities.module.css'
import commonStyles from '@/styles/common.module.css'
import { BaseActivity } from '@/common/common'
import { MainActivitiesCard } from '@/components/crads/MainActivitiesCard'

type IActivities = {
  activities: Array<BaseActivity>
}

export const Activities = (props: IActivities) => {
  const { activities } = props
  return (
    <div id="activities" className={styles['activities__wrapper']}>
      <section className={styles['activities']}>
        <h2 className={styles['activities__title']}>Что вас ждёт?</h2>
        <p className={styles['activities__subtitle']}>
          Yandex Mobile Runtime&nbsp;&mdash; это фестиваль в&nbsp;офисе Яндекса, где вас будут ждать
          разные форматы активностей. Приходите на&nbsp;весь день и&nbsp;выбирайте слоты
          в&nbsp;программе по&nbsp;интересам.
        </p>
        {activities.length !== 0 && (
          <ol className={styles['activities__list']}>
            {activities.map((el, ind) => (
              <li className={styles['activities__list-item']} key={ind}>
                <MainActivitiesCard activity={{ ...el, number: el.number ?? String(ind + 1) }} />
              </li>
            ))}
          </ol>
        )}
        <a
          role="button"
          href="##"
          className={clsx(commonStyles['pink_btn'], styles['activities__btn'])}
        >
          Регистрация на&nbsp;фестивать
        </a>
      </section>
    </div>
  )
}
