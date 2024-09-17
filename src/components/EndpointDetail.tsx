import styles from './EndpointDetails.module.css'

interface EndpointProp {
  binId: string
}

function EndpointDetail({ binId }: EndpointProp) {
  return (
    <div className={styles.wrapper}>
      <p>Your endpoint is: </p>
      <p>{`https://${binId}.x.example.com`}</p>
    </div>
  )
}

export default EndpointDetail;
