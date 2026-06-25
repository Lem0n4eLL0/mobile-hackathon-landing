import { ReactNode, useCallback } from 'react'
import styles from './Collapse.module.css'
import clsx from 'clsx'

type CollapseParts = 'root' | 'titleWrapper' | 'triggerBtn' | 'contentWrapper' | 'content'

type ICollapse = {
  children: ReactNode
  title: ReactNode
  isOpen: boolean
  onToggle: (isOpen: boolean) => void
  classes?: Partial<Record<CollapseParts, string>>
}

export const Collapse = (props: ICollapse) => {
  const { children, title, isOpen, onToggle, classes } = props

  const triggerButtonHandler = useCallback(() => {
    onToggle(!isOpen)
  }, [isOpen, onToggle])

  return (
    <div className={clsx(styles['collapse'], isOpen && styles['collapse_opened'], classes?.root)}>
      <div className={clsx(styles['collapse__title-wrapper'], classes?.titleWrapper)}>
        <button
          type="button"
          onClick={triggerButtonHandler}
          className={clsx(styles['collapse__trigger-btn'], classes?.triggerBtn)}
        ></button>
        {title}
      </div>
      <div className={clsx(styles['collapse__content-wrapper'], classes?.contentWrapper)}>
        <div className={clsx(styles['collapse__content'], classes?.content)}>{children}</div>
      </div>
    </div>
  )
}
