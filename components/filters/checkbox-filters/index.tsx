import { FunctionComponent } from 'react'
import Select from 'react-select'

import Filter from './Filter'

import { useFilterContext } from '../../../contexts'
import styles from './filters.module.scss'

const Filters: FunctionComponent = () => {
  const { filters, activeFilters, toggleFilter } = useFilterContext()

  const renderedFilters = filters.map((filter) => {
    const isSelected = activeFilters.includes(filter)
    return (
      <Filter
        key={filter}
        label={filter}
        isSelected={isSelected}
        handleClick={() => toggleFilter(filter)}
      />
    )
  })

  return <div className={styles.filters}>{renderedFilters}</div>
}

export default Filters
