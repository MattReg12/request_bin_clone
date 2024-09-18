import React from 'react'
import styles from './ParamDetails.module.css'

interface ParamsProp {
  params: {
    [key: string]: string;
  };
}

function ParamDetails({ params }: ParamsProp) {
  return (
    <div className={styles.lineItem}>
    <p className={styles.lineItemName}></p>
    <div className={styles.lineItemContent}>
      <ul>
        {Object.keys(params).map(key => {
          return (
            <div key={Math.random()}>
              <li className={styles.li}>{key}</li>
              <span>{params[key]}</span>
            </div>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default ParamDetails;
