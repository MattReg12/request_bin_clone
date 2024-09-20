// @ts-nocheck

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
    const fetchRequests = async () => {
      try {
        const requests: any = await endpointService.requests(binId as string)
        setRequests(requests.data as any)
      } catch {
        alert('Bin does not exist');
        navigate('/');
      }
    }
    console.log('main', requests)
    fetchRequests()
  }, [binId])

  return (
    <>
      <EndpointSummaryHeader />
      <EndpointSummarySubHeader binId={binId}/>
      <EndpointSummaryMain setRequests={setRequests} requests={requests} requestId={requestId} binId={binId}/>
    </>
  )
}

export default EndpointSummary
