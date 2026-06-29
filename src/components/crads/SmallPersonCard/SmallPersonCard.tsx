'use client'

import { Person } from '@/common/common'
import styles from './SmallPersonCard.module.css'
import { useMemo } from 'react'
import clsx from 'clsx'

type SmallPersonCardParts = 'root' | 'image' | 'content' | 'name' | 'post' | 'company'

type ISmallPersonCard = {
  person: Person
  classNames?: Partial<Record<SmallPersonCardParts, string>>
}

export const SmallPersonCard = (props: ISmallPersonCard) => {
  const { person, classNames } = props

  return (
    <div className={clsx(styles['card'], classNames?.root)}>
      <img
        src={person.imgPath}
        alt="Портрет"
        className={clsx(styles['card__img'], classNames?.image)}
      ></img>
      <div className={clsx(styles['card__information'], classNames?.content)}>
        <span className={clsx(styles['card__name'], classNames?.name)}>{person.name}</span>
        <span className={clsx(styles['card__post'], classNames?.post)}>{person.post}</span>
        {'company' in person && (
          <span className={clsx(styles['card__company'], classNames?.company)}>
            {person.company}
          </span>
        )}
      </div>
    </div>
  )
}
