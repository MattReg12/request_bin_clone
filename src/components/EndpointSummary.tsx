import React from 'react';
import EndpointSummaryHeader from './EndpointSummaryHeader';
import EndpointSummarySubHeader from './EndpointSummarySubHeader';
import EndpointSummaryMain from './EndpointSummaryMain';
import { useNavigate, useParams } from 'react-router-dom';


function EndpointSummary() {
  const { binId } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <EndpointSummaryHeader />
      <EndpointSummarySubHeader />
      <EndpointSummaryMain requestId={'hi'} binId={'5'}/>
    </>
  )
}

export default EndpointSummary
