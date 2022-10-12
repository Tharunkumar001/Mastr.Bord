import Head from 'next/head';
import styles from '../styles/Home.module.css'
import {IconButton,} from '@material-ui/core';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Mastr.Bord</title>
        <meta name="description" content="VCET MASTER ATTENDANCE SITE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="">Mastr.Bord</a>
        </h1>

        <a href="https://velalarengg.ac.in/">
            <h2>V C E T</h2>
        </a>
        
        <div className={styles.grid}>
          <button className={styles.card} onClick={() => {
            router.push("/authPage")
            }}>
            <h2>Admin &rarr;</h2>
            <p>Access in-depth Features of Mastr.Bord.</p>
          </button>

          <button className={styles.card}>
            <h2>Super Admin &rarr;</h2>
            <p>Administrator and can access in-depth features.</p>
          </button>

          <button className={styles.card}>
            <h2>Student &rarr;</h2>
            <p>Get your daily stats through Mastr.Bord.</p>
          </button>

        </div>
      </main>



      <footer className={styles.footer}>
        
          
          <IconButton style={{background:"none"}} >
            About
          </IconButton>

          <IconButton style={{background:"none"}}>
            Contact Us
          </IconButton>
        
      </footer>
    </div>
  )
}
