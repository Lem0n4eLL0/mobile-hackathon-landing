'use client'

import { Tabs } from '@/components/Tabs'
import styles from './Program.module.css'
import { useState } from 'react'
import { TProgram } from '@/common/common'
import { ProgramList } from '../ProgramList'

type IProgram = {
  programs: Array<TProgram>
}

export const Program = (props: IProgram) => {
  const { programs } = props

  const [currentTab, setCurrentTab] = useState<string>()

  const isProgram = programs.length !== 0

  return (
    <div className={styles['program__wrapper']}>
      <div className={styles['program']}>
        <h2 className={styles['program__title']}>Программа</h2>
        {isProgram && (
          <Tabs
            currentName={currentTab ?? programs[0].lable}
            setCurrentTab={(name) => void setCurrentTab(name)}
            tabs={programs.map((el) => ({
              name: el.lable,
              lable: el.lable,
              children: <ProgramList events={el.events} />,
            }))}
          />
        )}
      </div>
    </div>
  )
}
