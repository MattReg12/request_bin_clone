import React from 'react'
import styles from './RequestDetail.module.css'
import { Request } from '../types/types'
import HeaderDetails from './HeaderDetails'
import BodyDetails from './BodyDetails'
import ParamDetails from './ParamDetails'

interface RequestDetailProp {
  request: Request
}

interface Param {
  [key:string] : string;
}

function RequestDetail({ request }: RequestDetailProp) {
  const [headers, setHeaders] = React.useState<string[]>([]);
  const [params, setParams] = React.useState<Param>({});
  const [headersClicked, setHeadersClicked] = React.useState(false)
  const [paramsClicked, setParamsClicked] = React.useState(false)

  function getColor(text: string) {
    if (text == 'GET') {
      return 'green'
    } else if (text == 'DELETE') {
      return 'red'
    } else {
      return 'blue'
    }
  }

  const handleHeadersClick = function() {
    setHeadersClicked(!headersClicked)
  }

  const handleParamsClick = function() {
    setParamsClicked(!paramsClicked)
  }

  React.useEffect(() => {
    const newHeaders = request.headers.split('\n')
    setHeaders(newHeaders)
    setHeadersClicked(false)
    setParamsClicked(false)

    setParams(request.queryParams as any)

  }, [request])

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>{`HTTP REQUEST:      ${request.id}`}</p>
      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Details</p>
        <p className={styles.lineItemContent}><span className={styles.needSpace}style={{ color: getColor(request.method) }}>{request.method}</span>{request.path}</p>
      </div>

      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Headers</p>
        <div onClick={handleHeadersClick} className={styles.lineItemContent}>
          {headersClicked ? <span className={styles.arrow}>▼</span> : <span className={styles.arrow}>▶</span>}
          <a className={styles.link}>{`(${headers.length}) headers`}</a>
        </div>
      </div>

      {headersClicked && <HeaderDetails headers={headers}/>}

      {request.queryParams && <div className={styles.lineItemQuery}>
        <div className={styles.lineItemName}>Query</div>
        <div onClick={handleParamsClick} className={styles.lineItemContent}>
          {paramsClicked ? <span className={styles.arrow}>▼</span> : <span className={styles.arrow}>▶</span>}
          <a className={styles.link}>{`(${Object.keys(request.queryParams).length}) query parameters`}</a>
        </div>
      </div>}

      {paramsClicked && <ParamDetails params={params}/>}

      {request.body && <BodyDetails request={request} />}

    </div>
  )
}

export default RequestDetail;
