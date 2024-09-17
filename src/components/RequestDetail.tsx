import React from 'react'
import styles from './RequestDetail.module.css'
import { Request } from '../types/types'
import HeaderDetails from './HeaderDetails'
import BodyDetails from './BodyDetails'

interface RequestDetailProp {
  request: Request
}

function RequestDetail({ request }: RequestDetailProp) {
  const [headers, setHeaders] = React.useState<string[]>([]);
  const [headersClicked, setHeadersClicked] = React.useState(false)

  const handleHeadersClick = function() {
    setHeadersClicked(!headersClicked)
  }

  React.useEffect(() => {
    const newHeaders = request.headers.split('\n')
    setHeaders(newHeaders)
    setHeadersClicked(false)
  }, [request])

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>{`HTTP REQUEST:      ${request.id}`}</p>
      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Details</p>
        <p className={styles.lineItemContent}>{`${request.method}   ${request.path}`}</p>
      </div>

      <div className={styles.lineItem}>
        <p className={styles.lineItemName}>Headers</p>
        <div onClick={handleHeadersClick} className={styles.lineItemContent}>
          {headersClicked ? <span className={styles.arrow}>▼</span> : <span className={styles.arrow}>▶</span>}
          <a className={styles.link}>{`(${headers.length}) headers`}</a>
        </div>
      </div>

      {headersClicked && <HeaderDetails headers={headers}/>}

      <div className={styles.lineItemQuery}>
        <div className={styles.lineItemName}>Query</div>
        <div className={styles.lineItemContent}>
          <span className={styles.arrow}>▶</span>
          <a className={styles.link}>(3) query parameters</a>
        </div>
      </div>

      {request.body && <BodyDetails request={request} />}

    </div>
  )
}

export default RequestDetail
