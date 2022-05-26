import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from 'react'

const initialState = {
  filters: [],
  activeFilters: [],
  toggleFilter: (filter: string) => {},
}
const FilterContext = createContext<{
  filters: string[]
  activeFilters: string[]
  toggleFilter: (filter: string) => void
}>(initialState)

export const FilterProvider: FunctionComponent<{
  filters: string[]
  children: ReactNode
}> = ({ filters, children }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters((prevActiveFilters) => {
      const newActiveFilters: string[] = [...prevActiveFilters]
      const filterIndex = prevActiveFilters.findIndex((f) => f === filter)
      if (filterIndex > -1) {
        newActiveFilters.splice(filterIndex, 1)
      } else {
        newActiveFilters.push(filter)
      }

      return newActiveFilters
    })
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        activeFilters,
        toggleFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
