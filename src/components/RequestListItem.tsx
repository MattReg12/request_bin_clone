import React from 'react'
import styles from './RequestListItem.module.css'
import { Request } from '../types/types'
import { useNavigate  } from 'react-router-dom'

interface RequestListItem {
  request : Request
}



function RequestListItem({request}: RequestListItem) {
  const navigate = useNavigate()

  function handleClick() {
    const bin = window.location.pathname.split('/')[2]
    navigate(`/bin/${bin}/${request['id']}`)
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
