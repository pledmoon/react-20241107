import { UIButton } from '../UIButton/UIButton'
import styles from './Tabs.module.css'
import classNames from 'classnames'

export const Tabs = ({ data, currentTabId, onTabChange, children }) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsHeader}>
        {data.map(({ name, id }) => (
          <li
            className={styles.tabsItem}
            key={id}
          >
            <UIButton
              className={classNames(styles.tabsBtn, { [styles.isActive]: currentTabId === id })}
              onClick={() => onTabChange(id)}
            >
              {name}
            </UIButton>
          </li>
        ))}
      </ul>

      <div className={styles.tabsPanes}>{children}</div>
    </div>
  )
}
