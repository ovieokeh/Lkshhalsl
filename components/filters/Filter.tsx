import { FunctionComponent } from 'react'

import styles from './filters.module.scss'

type FilterProps = {
  label: string
  isSelected: boolean
  handleClick: () => void
}
const Filter: FunctionComponent<FilterProps> = ({
  label = '',
  isSelected = false,
  handleClick,
}) => {
  return (
    <button
      className={styles.filter}
      data-is-selected={isSelected}
      onClick={handleClick}
    >
      <div className={styles.checkbox} data-is-selected={isSelected}>
        <div className={styles.checkboxInner} />
      </div>

      <span className={styles.filterLabel}>{label}</span>
    </button>
  )
}

export default Filter
