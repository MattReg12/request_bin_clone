import React from 'react'
import styles from './EndpointSummaryMain.module.css'
import RequestList from './RequestList';
import RequestDetail from './RequestDetail';
import EndpointDetail from './EndpointDetail';

interface EndpointSummaryMainProps {
  requestId: string | undefined,
  binId: string
}

function EndpointSummaryMain({ requestId, binId }: EndpointSummaryMainProps) {
  const [requestClicked, setRequestClicked] = React.useState(false)

  React.useEffect(() => {
    if (requestId) {
      setRequestClicked(true)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <RequestList />
      <EndpointDetail binId={binId} />
      {requestClicked && <RequestDetail />}
    </div>
  )
}

export default EndpointSummaryMain;
