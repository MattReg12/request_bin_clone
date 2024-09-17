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
        {headers.map(header => {
          let arr = header.split(': ')
          return (
            <div>
              <li className={styles.li}>{arr[0]}</li>
              <span>{arr[1]}</span>
            </div>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default HeaderDetails
