import React from 'react'
import styles from './RequestListItem.module.css'
import { Request } from '../types/types'

interface RequestListItem {
  request : Request
}



function RequestListItem({request}: RequestListItem) {
  function handleClick() {
    alert('bazinga')
  }


  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <div className={styles.timestamp}>
        <p className={styles.data}>{request['received_at'].slice(11, 19)}</p>
      </div>
      <p className={styles.path}>{`${request['method']}   ${request.path}`}</p>
    </div>
  )
}

export default RequestListItem
