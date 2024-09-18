import React from 'react'
import styles from './EndpointSummarySubHeader.module.css'
import { useNavigate } from 'react-router-dom'
import endpointService from '../services/endpoints'

interface EndpointSummarySubHeaderProp {
  binId : string | undefined
}

function EndpointSummarySubHeader({ binId }: EndpointSummarySubHeaderProp ) {
  const navigate = useNavigate()
  const endpointRef = React.useRef<HTMLInputElement | null>(null)

  async function handleClickNew() {
    const endpoint = await endpointService.create_endpoint();
    navigate(`/bin/${endpoint}`)
  }

  function handleCopyClick() {
    if (endpointRef.current) {
      const text = endpointRef.current.value
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.defaultButton}>endpoint
      </div>
      <input ref={endpointRef} className={styles.endpointInput} value={`https://${binId}.gregchase.earth`} readOnly></input>
      <div onClick={handleCopyClick} className={styles.otherButton}>copy
      </div>
      <button onClick={handleClickNew} className={styles.otherButton}>new
      </button>
    </div>
  )
}

export default EndpointSummarySubHeader
