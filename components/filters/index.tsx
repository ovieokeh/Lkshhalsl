import { useRouter } from 'next/router'

import SelectFilters from './select-filters'
import CheckboxFilters from './checkbox-filters'

const Filters = () => {
  const router = useRouter()

  const selectedFilter =
    router.query.filterType === 'select' ? (
      <SelectFilters />
    ) : (
      <CheckboxFilters />
    )

  return selectedFilter
}

export default Filters
