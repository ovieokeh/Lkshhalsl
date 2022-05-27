import { FunctionComponent } from 'react'

import Filters from '../filters'

import styles from './navigation.module.scss'

const Navigation: FunctionComponent = () => {
  return (
    <nav className={styles.navigation}>
      <div className="container">
        <h2 className={styles.navigationTitle}>Local guide language</h2>
        <Filters />
      </div>
    </nav>
  )
}

export default Navigation
