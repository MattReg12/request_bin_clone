import React from 'react'
import styles from './EndpointSummarySubHeader.module.css'
import { useNavigate } from 'react-router-dom'
import endpointService from '../services/endpoints'
import getAsciiArt from '../services/openai'

interface EndpointSummarySubHeaderProp {
  binId : string | undefined
}



function EndpointSummarySubHeader({ binId }: EndpointSummarySubHeaderProp ) {
  const navigate = useNavigate()
  const endpointRef = React.useRef<HTMLInputElement | null>(null)
  const [winkVisible, setWinkVisible] = React.useState(false)

  async function handleClickNew() {
    const endpoint = await endpointService.create_endpoint();
    let body: any = await getAsciiArt()
    const req = await endpointService.sendRandomRequest(body, endpoint.endpoint)
    navigate(`/bin/${endpoint.endpoint}`)
  }

  function handleCopyClick() {
    if (endpointRef.current) {
      const text = endpointRef.current.value
      navigator.clipboard.writeText(text)
    }

    setWinkVisible(true)
    setTimeout(() => {
      setWinkVisible(false)
    }, 1000)
  }

  return (
    <div className={styles.main}>
      <div className={styles.defaultButton}>endpoint
      </div>
      <input ref={endpointRef} className={styles.endpointInput} value={`https://${binId}.jjjones.dev`} readOnly></input>
      <div onClick={handleCopyClick} className={styles.otherButton}>copy
        <img className={winkVisible ? styles.winkShow : styles.wink}src='/src/assets/wink.png'></img>
      </div>
      <button onClick={handleClickNew} className={styles.otherButton}>new
      </button>
    </div>
  )
}

export default EndpointSummarySubHeader
