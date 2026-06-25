import { SmallPersonCard } from '@/components/crads/SmallPersonCard/SmallPersonCard'
import styles from './Jury.module.css'
import { Person } from '@/common/common'

type IJury = {
  persons: Array<Person>
}

export const Jury = (props: IJury) => {
  const { persons } = props
  return (
    <div className={styles['jury']}>
      <h3 className={styles['jury__title']}>Жюри хакатона</h3>
      <ul className={styles['jury__list']}>
        {persons.map((el, ind) => (
          <li className={styles['jury__list-item']} key={ind}>
            <SmallPersonCard person={el} />
          </li>
        ))}
      </ul>
    </div>
  )
}
