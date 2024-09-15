import React from 'react'
import styles from './RequestListItem.module.css'

function RequestListItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timestamp}>
        <p className={styles.data}>12:55:365</p>
      </div>
      {/* <div className={styles.requestSummary}>tooie</div> */}
      <p className={styles.path}>GET  / aasdasdaassssdsadasdsasdasdsasdh</p>
    </div>
  )
}

export default RequestListItem
