// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onChangeTabButton, isActive} = props
  const {displayText, tabId} = tabsList
  const isActiveClassName = isActive ? 'active-tab-btn' : ''
  const onClickTabButton = () => {
    onChangeTabButton(tabId)
  }
  return (
    <li className="tab-item">
      <button
        onClick={onClickTabButton}
        type="button"
        className={`tab-btn active-tab-btn2 ${isActiveClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
