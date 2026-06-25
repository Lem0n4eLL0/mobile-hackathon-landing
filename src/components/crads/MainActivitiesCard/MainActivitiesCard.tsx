import { BaseActivity } from '@/common/common'
import styles from './MainActivitiesCard.module.css'
import commonStyles from '@/styles/common.module.css'
import clsx from 'clsx'

type IMainActivitiesCard = {
  activity: Required<BaseActivity>
}

export const MainActivitiesCard = (props: IMainActivitiesCard) => {
  const { activity } = props

  return (
    <div className={styles['activities-card']}>
      <div className={clsx(styles['activities-card__number'], commonStyles['card__number'])}>
        {activity.number}
      </div>
      <div className={styles['activities-card__title']}>{activity.title}</div>
      <p className={styles['activities-card__description']}>{activity.description}</p>
    </div>
  )
}
