import styles from './Home.module.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/bin')
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
