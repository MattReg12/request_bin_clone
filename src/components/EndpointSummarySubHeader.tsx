import React from 'react'
import styles from './EndpointSummarySubHeader.module.css'


function EndpointSummarySubHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.defaultButton}>endpoint
      </div>
      <input className={styles.endpointInput} value='https://team44lyfe.x.com' readOnly></input>
      <div className={styles.otherButton}>copy
      </div>
      <div className={styles.otherButton}>new
      </div>
    </div>
  )
}

export default EndpointSummarySubHeader
