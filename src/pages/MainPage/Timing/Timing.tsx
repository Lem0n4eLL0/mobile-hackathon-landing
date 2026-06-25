import { BaseTiming } from '@/common/common'
import styles from './Timing.module.css'
import { MainTimingsCard } from '@/components/crads/MainTimingsCard'

type ITiming = {
  timings: Array<BaseTiming>
}

export const Timing = (props: ITiming) => {
  const { timings } = props

  return (
    <div className={styles['timing']}>
      <h3 className={styles['timing__title']}>Тайминг</h3>
      <ul className={styles['timing__list']}>
        {timings.map((el, ind) => (
          <li className={styles['timing__list-item']} key={ind}>
            <MainTimingsCard timing={{ ...el, number: el.number ?? String(ind + 1) }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
