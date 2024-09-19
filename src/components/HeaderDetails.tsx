import React from 'react'
import styles from './HeaderDetails.module.css'

interface HeaderDetailsProp {
  headers: string[]
}

function HeaderDetails({ headers }: HeaderDetailsProp) {
  return (
    <div className={styles.lineItem}>
    <p className={styles.lineItemName}></p>
    <div className={styles.lineItemContent}>
      <ul>
        {Object.keys(headers).map(key => {
          return (
            <div key={Math.random()}>
              <li className={styles.li}>{key}</li>
              <span>{headers[key as any]}</span>
            </div>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default HeaderDetails
