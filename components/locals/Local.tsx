import { FunctionComponent } from 'react'

import classnames from './locals.module.scss'

export type LocalType = {
  id: string
  name: string
  title: string
  imageSrc: string
  languages: string[]
}
const Local: FunctionComponent<LocalType> = ({ name, title, imageSrc }) => {
  return (
    <div
      className={classnames.local}
      style={{ backgroundSize: 'cover', backgroundImage: `url(${imageSrc})` }}
    >
      <div className={classnames.localContent}>
        <p className={classnames.localName}>{name}</p>
        <p className={classnames.localTitle}>{title}</p>
      </div>
    </div>
  )
}

export default Local
