import styles from './BodyDetails.module.css';
import { Request } from '../types/types';

interface RequestDetailProp {
  request: Request
}

function BodyDetails({ request }: RequestDetailProp) {
  return (
    <div className={styles.lineItemQuery}>
      <div className={styles.lineItemName}>Body</div>
      <div className={styles.lineItemContentBody}>
        <pre className={styles.styledBox}>{request.body}</pre>
      </div>
    </div>
  )
}

export default BodyDetails;
