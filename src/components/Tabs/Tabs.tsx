'use client'

import { ReactNode, useCallback, useMemo } from 'react'
import styles from './Tabs.module.css'
import clsx from 'clsx'

export type Tab = {
  name: string
  lable: ReactNode
  children: ReactNode
  onClick?: (el?: Tab) => void
}

type ITabs = {
  currentName: string
  setCurrentTab: (name: string) => void
  tabs: Array<Tab>
}

export const Tabs = (props: ITabs) => {
  const { currentName, setCurrentTab, tabs } = props

  const currentContent = useMemo(
    () => tabs.find((el) => el.name === currentName),
    [currentName, tabs]
  )

  const setTabHandler = useCallback((el: Tab) => {
    setCurrentTab(el.name)
    el.onClick && el.onClick(el)
  }, [])

  if (!currentContent) {
    return
  }

  return (
    <div className={styles['tabs']}>
      <div className={styles['tabs__controls']}>
        <ul className={styles['tabs__list']}>
          {tabs.map((el, ind) => (
            <li className={styles['tabs__list-item']} key={ind}>
              <button
                type="button"
                className={clsx(
                  styles['tabs__tab'],
                  currentName === el.name && styles['tabs__tab_active']
                )}
                onClick={() => setTabHandler(el)}
              >
                {el.lable}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['tabs__content']}>
        {currentContent.children}
        {/* <div className={styles['tabs__content-preview']}></div> */}
      </div>
    </div>
  )
}
