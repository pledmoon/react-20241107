export const Tabs = ({ data, currentTabId, onTabChange, children }) => {
  return (
    <div className="tabs">
      <ul className="tabs__header">
        {data.map((tab) => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`tabs__btn ${currentTabId === tab.id ? 'is-active' : ''}`}
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
