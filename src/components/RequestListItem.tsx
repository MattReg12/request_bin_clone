import React from 'react'
import styles from './RequestListItem.module.css'
import { Request } from '../types/types'
import { useNavigate  } from 'react-router-dom'
import { removeBackslash } from './utils/helpers'

interface RequestListItem {
  request : Request
}

function RequestListItem({request}: RequestListItem) {
  const navigate = useNavigate()

  function handleClick() {
    const bin = window.location.pathname.split('/')[2]
    navigate(`/bin/${bin}/${removeBackslash(request['id'])}`)
  }

  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <div className={styles.timestamp}>
        <p className={styles.data}>{request['received_at'].slice(2,10) + ' ' + request['received_at'].slice(11, 19)}</p>
      </div>
      <p className={styles.path}>{`${request['method']}   ${request.original_url}`}</p>
    </div>
  )
}

export default RequestListItem
