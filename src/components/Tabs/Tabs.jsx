import styles from './Tabs.module.css'

export const Tabs = ({ data, currentTabId, onTabChange, children }) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__header}>
        {data.map((tab) => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`${styles.tabs__btn} ${currentTabId === tab.id ? styles['is-active'] : ''}`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs__panes">{children}</div>
    </div>
  )
}
