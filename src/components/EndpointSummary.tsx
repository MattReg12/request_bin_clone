import React from 'react';
import EndpointSummaryHeader from './EndpointSummaryHeader';
import EndpointSummarySubHeader from './EndpointSummarySubHeader';
import EndpointSummaryMain from './EndpointSummaryMain';
import { useNavigate, useParams } from 'react-router-dom';


function EndpointSummary() {
  const { binId } = useParams();
  alert(binId); /*  */
  const navigate = useNavigate();


  React.useEffect(() => {
    const sub = window.location.host.split('.')[0]

    if (sub == 'poop') {
      navigate('/')
    }
  }, [])

  return (
    <>
      <EndpointSummaryHeader />
      <EndpointSummarySubHeader />
      <EndpointSummaryMain />
    </>
  )
}

export default EndpointSummary
