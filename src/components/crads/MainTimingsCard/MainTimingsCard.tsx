import { BaseTiming } from '@/common/common'
import styles from './MainTimingsCard.module.css'
import commonStyles from '@/styles/common.module.css'
import clsx from 'clsx'

type IMainTimingsCard = {
  timing: BaseTiming
}

export const MainTimingsCard = (props: IMainTimingsCard) => {
  const { timing } = props

  return (
    <div className={styles['timing-card']}>
      <div className={clsx(styles['timing-card__number'], commonStyles['card__number'])}>
        {timing.number}
      </div>
      <div className={styles['timing-card__title']}>{timing.title}</div>
      <div className={styles['timing-card__content']}>
        <span className={styles['timing-card__timing']}>{timing.timing}</span>
        <p className={styles['timing-card__description']}>{timing.description}</p>
      </div>
    </div>
  )
}
