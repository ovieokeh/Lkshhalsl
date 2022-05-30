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
  toggleFilter: (newValue: { label: string; value: string }[]) => {},
}
const FilterContext = createContext<{
  filters: string[]
  activeFilters: string[]
  toggleFilter: (args: any) => void
}>(initialState)

export const FilterProvider: FunctionComponent<{
  filters: string[]
  children: ReactNode
}> = ({ filters, children }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([filters[0]])

  const toggleFilter = (newValues: { label: string; value: string }[]) => {
    // Checkbox filter
    if (typeof newValues === 'string') {
      setActiveFilters((prevFilters) => {
        if (prevFilters.includes(newValues)) {
          return [...prevFilters].filter((filter) => filter !== newValues)
        }

        return [...prevFilters, newValues]
      })

      // Select filter
    } else {
      setActiveFilters(newValues.map((value) => value.value))
    }
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
