import { FunctionComponent } from 'react'

import Local, { LocalType } from './Local'

import { useFilterContext } from '../../contexts'
import classnames from './locals.module.scss'

type LocalsProps = {
  locals?: LocalType[]
}
const Locals: FunctionComponent<LocalsProps> = ({ locals }) => {
  const { activeFilters } = useFilterContext()

  const filteredLocals = locals?.filter(({ languages }) => {
    return languages.some((language) => {
      if (!activeFilters.length) return true
      return activeFilters.includes(language)
    })
  })

  const renderedLocals = filteredLocals?.map((localInfo) => {
    return <Local key={localInfo.id} {...localInfo} />
  })

  const localsCount = renderedLocals?.length || 0
  const heading = `${localsCount} local ${localsCount > 1 ? 'hosts' : 'host'}`

  return (
    <div className="container">
      <h2 className={classnames.localsTitle}>{heading}</h2>
      <div className={classnames.localsContainer}>{renderedLocals}</div>
    </div>
  )
}

export default Locals
