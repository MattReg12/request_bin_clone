import styles from './EndpointDetails.module.css'

interface EndpointProp {
  binId: string | undefined
}

function EndpointDetail({ binId }: EndpointProp) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p2}>Your endpoint is: </p>
      <p className={styles.p}>{`https://${binId}.gregchase.earth`}</p>
    </div>
  )
}

export default EndpointDetail;
