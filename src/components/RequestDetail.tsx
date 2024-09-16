import React from 'react'
import styles from './RequestDetail.module.css'

function RequestDetail() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>HTTP REQUEST</p>
      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Details</p>
        <p className={styles.lineItemContent}>SHAZAM</p>
      </div>
      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Headers</p>
        <div className={styles.lineItemContent}>
          <span className={styles.arrow}>▶</span>
          <a className={styles.link}>(375,000) headers</a>
        </div>
      </div>
      <div className={styles.lineItemQuery}>
        <div className={styles.lineItemName}>Query</div>
        <div className={styles.lineItemContent}>
          <span className={styles.arrow}>▶</span>
          <a className={styles.link}>(3) query params</a>
        </div>
      </div>

    </div>
  )
}


export default RequestDetail
