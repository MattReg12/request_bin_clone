import React from 'react'
import styles from './EndpointSummarySubHeader.module.css'
import { useNavigate } from 'react-router-dom'
import endpointService from '../services/endpoints'

interface EndpointSummarySubHeaderProp {
  binId : string | undefined
}

function EndpointSummarySubHeader({ binId }: EndpointSummarySubHeaderProp ) {
  const navigate = useNavigate()

  async function handleClickNew() {
    const endpoint = await endpointService.create_endpoint();
    console.log({ endpoint: endpoint})
    navigate('/bin/' + endpoint)
    // alert('new endpoint')
  }

  return (
    <div className={styles.main}>
      <div className={styles.defaultButton}>endpoint
      </div>
      <input className={styles.endpointInput} value={`https://${binId}.gregchase.earth`} readOnly></input>
      <div className={styles.otherButton}>copy
      </div>
      <button onClick={handleClickNew} className={styles.otherButton}>new
      </button>
    </div>
  )
}

export default EndpointSummarySubHeader
