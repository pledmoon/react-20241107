import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants-slice'
import classNames from 'classnames'
import styles from './Tabs.module.css'
import { UIButton } from '../UIButton/UIButton'

export const Tabs = ({ ids, currentTabId, onTabChange, children }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, currentTabId))

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsHeader}>
        {ids.map((id) => (
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
