'use client'

import { Tabs } from '@/components/Tabs'
import styles from './Program.module.css'
import commonStyles from '@/styles/common.module.css'
import { useState } from 'react'
import { TProgramBlock } from '@/common/common'
import { ProgramList } from '../ProgramList'
import clsx from 'clsx'

type IProgram = {
  programs: Array<TProgramBlock>
}

export const Program = (props: IProgram) => {
  const { programs } = props

  const [currentTab, setCurrentTab] = useState<string>()

  const isProgram = programs.length !== 0

  return (
    <div id="program" className={styles['program__wrapper']}>
      <section className={styles['program']}>
        <h2 className={styles['program__title']}>Программа</h2>
        {isProgram && (
          <Tabs
            currentName={currentTab ?? programs[0].program.lable}
            setCurrentTab={(name) => void setCurrentTab(name)}
            tabs={programs.map((el) => ({
              name: el.program.lable,
              lable: el.program.lable,
              children: (
                <div className={styles['program__content']}>
                  <ProgramList events={el.program.events} />
                  <ul className={styles['program__btns-list']}>
                    {el.buttons.map((el, ind) => (
                      <li className={styles['program__btns-list-item']} key={ind}>
                        <a
                          href={el.link}
                          role="button"
                          className={clsx(
                            styles['program__btn'],
                            el.type === 'black' && commonStyles['black_btn'],
                            el.type === 'pink' && commonStyles['pink_btn']
                          )}
                        >
                          {el.lable}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        )}
      </section>
    </div>
  )
}
