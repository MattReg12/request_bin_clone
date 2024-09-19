import styles from './Home.module.css'
import { useNavigate } from "react-router-dom";
import endpointService from '../services/endpoints'

function Home() {
  const navigate = useNavigate();

  async function handleClick() {
    const endpoint = await endpointService.create_endpoint();
    const bin = endpoint['endpoint'];
    // navigate('/bin/123')
    navigate(`/bin/${bin}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.text}>Inspect webhooks and HTTP requests. Team 4 style</p>
      </div>
      <button onClick={handleClick} className={styles.button}>Create Endpoint</button>
    </div>
  )
}

export default Home;
