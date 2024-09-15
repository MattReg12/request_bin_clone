import React from 'react'
import styles from './Home.module.css'
import HomeNewBinButton from './HomeNewBinButton';


function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Inspect webhooks and HTTP requests. Team 4 style</p>
      </div>
      <HomeNewBinButton />
    </div>
  )
}

export default Home;
