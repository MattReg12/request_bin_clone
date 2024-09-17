import React from 'react'
import styles from './EndpointSummaryMain.module.css'
import RequestList from './RequestList';
import RequestDetail from './RequestDetail';
import EndpointDetail from './EndpointDetail';
import { Request } from '../types/types'

interface EndpointSummaryMainProps {
  requestId: string | undefined,
  binId: string | undefined,
  requests: Request[]
}

function EndpointSummaryMain({ requestId, binId, requests }: EndpointSummaryMainProps) {
  const [requestClicked, setRequestClicked] = React.useState(false)

  React.useEffect(() => {
    if (requestId) {
      setRequestClicked(true)
      // axios request individual detail of request
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <RequestList requests={requests}/>
      <EndpointDetail binId={binId} />
      {requestClicked && <RequestDetail requestId={requestId}/>}
    </div>
  )
}

export default EndpointSummaryMain;
