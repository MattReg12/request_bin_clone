import React from 'react'
import styles from './EndpointSummarySubHeader.module.css'
import { useNavigate } from 'react-router-dom'

interface EndpointSummarySubHeaderProp {
  binId : string | undefined
}

function EndpointSummarySubHeader({ binId }: EndpointSummarySubHeaderProp ) {
  const navigate = useNavigate()

  function handleClick() {
    alert('bazinga')
    navigate('/bin')
  }

  return (
    <div className={styles.main}>
      <div className={styles.defaultButton}>endpoint
      </div>
      <input className={styles.endpointInput} value={`https://${binId}.x.com`} readOnly></input>
      <div className={styles.otherButton}>copy
      </div>
      <button onClick={handleClick} className={styles.otherButton}>new
      </button>
    </div>
  )
}

export default EndpointSummarySubHeader
