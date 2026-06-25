'use client'

import { Person } from '@/common/common'
import styles from './SmallPersonCard.module.css'
import { useMemo } from 'react'

type ISmallPersonCard = {
  person: Person
}

export const SmallPersonCard = (props: ISmallPersonCard) => {
  const { person } = props

  return (
    <div className={styles['card']}>
      <img src={person.imgPath} alt="Портрет" className={styles['card__img']}></img>
      <div className={styles['card__information']}>
        <span className={styles['card__name']}>{person.name}</span>
        <span className={styles['card__post']}>{person.post}</span>
        {'company' in person && <span className={styles['card__company']}>{person.company}</span>}
      </div>
    </div>
  )
}
