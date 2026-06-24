import { BaseActivity } from '@/common/common'
import styles from './MainActivitiesCard.module.css'

type IMainActivitiesCard = {
  activity: Required<BaseActivity>
}

export const MainActivitiesCard = (props: IMainActivitiesCard) => {
  const { activity } = props

  return (
    <div className={styles['activities-card']}>
      <div className={styles['activities-card__number']}>{activity.number}</div>
      <div className={styles['activities-card__title']}>{activity.title}</div>
      <div className={styles['activities-card__description']}>{activity.description}</div>
    </div>
  )
}
