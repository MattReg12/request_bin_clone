import React from 'react'
import styles from './RequestList.module.css'
import RequestListItem from './RequestListItem';
import { Request } from '../types/types'

interface RequestListProp {
  requests: Request[]
}

function RequestList( {requests} :RequestListProp ) {
  return (
    <div className={styles.body}>
      <h2>Requests:</h2>
      <hr className={styles.hr}></hr>
      {requests.map(request => {
        return <RequestListItem key={Math.random()} request={request}/>
      })}
    </div>
  )
}

export default RequestList;
