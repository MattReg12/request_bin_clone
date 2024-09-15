import React from 'react'
import styles from './EndpointSummaryMain.module.css'
import RequestList from './RequestList';
import RequestDetail from './RequestDetail';

function EndpointSummaryMain() {
  return (
    <div className={styles.wrapper}>
      <RequestList />
      <RequestDetail />
    </div>
  )
}

export default EndpointSummaryMain;
