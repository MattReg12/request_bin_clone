import React from 'react'
import styles from './RequestList.module.css'
import RequestListItem from './RequestListItem';

function RequestList() {
  return (
    <div className={styles.body}>
      <h2>Requests:</h2>
      <hr className={styles.hr}></hr>
      <RequestListItem />
    </div>
  )
}

export default RequestList;
