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
  const [currentRequest, setCurrentRequst] = React.useState<Request>({})

  React.useEffect(() => {
    if (requestId) {
      const request = requests.find(request => request['id'] == requestId)
      if (request) {
        setRequestClicked(true)
        setCurrentRequst(request)
      }
    }
  }, [requestId])

  return (
    <div className={styles.wrapper}>
      <RequestList requests={requests}/>
      <EndpointDetail binId={binId} />
      {requestClicked && <RequestDetail request={currentRequest}/>}
    </div>
  )
}

export default EndpointSummaryMain;
