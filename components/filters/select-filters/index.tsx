import { FunctionComponent } from 'react'
import Select from 'react-select'

import { useFilterContext } from '../../../contexts'

const SelectFilters: FunctionComponent = () => {
  const { filters, toggleFilter } = useFilterContext()

  const filterOptions = filters.map((filter) => ({
    label: filter,
    value: filter,
  }))

  return (
    <Select
      options={filterOptions}
      defaultValue={filterOptions[0]}
      onChange={(newValue) => toggleFilter(newValue as any)}
      placeholder="Filter hosts by languages spoken"
      isMulti
    />
  )
}

export default SelectFilters
