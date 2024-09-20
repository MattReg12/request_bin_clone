// @ts-nocheck
import React from 'react'
import styles from './RequestList.module.css'
import RequestListItem from './RequestListItem';
import { Request } from '../types/types'
import { useParams } from 'react-router-dom'


interface RequestListProp {
  requests: Request[]
}

function RequestList( {setRequests, requests} :RequestListProp ) {
  const [socket, setSocket] = React.useState(null);
  const { binId } = useParams()

  React.useEffect(() => {
    const ws = new WebSocket(`wss://jjjones.dev/api/bin/${binId}`);

    setSocket(ws);

    ws.onmessage = (event) => {
      setRequests((prevRequests) => [...prevRequests, JSON.parse(event.data)]);
    };

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.close();
    };
  }, [binId]);

  return (
    <div className={styles.body}>
      <h2>Requests:</h2>
      <hr className={styles.hr}></hr>
      {requests.map(request => {
        return <RequestListItem key={Math.random()} request={request}/>
      })}
    </div>
  )
}

export default RequestList;
