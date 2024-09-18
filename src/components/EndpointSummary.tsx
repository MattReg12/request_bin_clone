import React from 'react';
import EndpointSummaryHeader from './EndpointSummaryHeader';
import EndpointSummarySubHeader from './EndpointSummarySubHeader';
import EndpointSummaryMain from './EndpointSummaryMain';
import { useNavigate, useParams } from 'react-router-dom';
import endpointService from '../services/endpoints'
import { Request } from '../types/types'


function EndpointSummary() {
  const { binId, requestId } = useParams();
  const [requests, setRequests] = React.useState<Request[]>([])
  const navigate = useNavigate();

  React.useEffect(() => {
    const binIds = ['123', '456', '789']
    if (!binIds.includes(binId as string)) {
      console.log(binId)
      alert('Bin does not exist');
      navigate('/');
    }
    const fetchRequests = async () => {
      const requests = await endpointService.requests(requestId as string)
      setRequests(requests as any)
    }

    fetchRequests()
  }, [])

  return (
    <>
      <EndpointSummaryHeader />
      <EndpointSummarySubHeader binId={binId}/>
      <EndpointSummaryMain requests={requests} requestId={requestId} binId={binId}/>
    </>
  )
}

export default EndpointSummary
