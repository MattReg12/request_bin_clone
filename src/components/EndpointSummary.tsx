import React from 'react';
import EndpointSummaryHeader from './EndpointSummaryHeader';
import EndpointSummarySubHeader from './EndpointSummarySubHeader';
import EndpointSummaryMain from './EndpointSummaryMain';
import { useNavigate, useParams } from 'react-router-dom';

function EndpointSummary() {
  const { binId, requestId } = useParams();
  console.log({binId: binId, requestId: requestId})
  const navigate = useNavigate();

  return (
    <>
      <EndpointSummaryHeader />
      <EndpointSummarySubHeader binId={binId}/>
      <EndpointSummaryMain requestId={requestId} binId={binId}/>
    </>
  )
}

export default EndpointSummary
