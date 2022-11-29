import Head from 'next/head';
import styles from '../styles/Home.module.css'
import {IconButton, makeStyles,} from '@material-ui/core';
import { useRouter } from 'next/router'
import { useState } from 'react';
import React from 'react';
import LoadingComponent from './components/loadingComponent';
import Background from "../public/mstBg.jpg";

const useStyles = makeStyles((theme) => ({

  root:{
    padding: '0 2rem',
    background: "rgb(43,41,44)",
    background:  "linear-gradient(107deg, rgba(43,41,44,1) 0%, rgba(59,135,218,1) 0%, rgba(240,242,244,1) 100%, rgba(82,111,143,0) 100%)"
  }

}))

const Home = () => {
  const router = useRouter()
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const containerHandler = async(containerValue) => {
    setLoading(!loading)
    localStorage.setItem("container",containerValue);
    await router.push("/authPage");
  }

  return (
    <div className={classes.root}>
      <Head style={{backgroundImage:"grey"}}>
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

        {(loading)?  <div className={styles.loading}>
          <LoadingComponent />
        </div> : null}

        <div className={styles.grid}>
          <button className={styles.card} onClick = {() => containerHandler("admin")}>
            <h2>Admin &rarr;</h2>
            <p>Access in-depth Features of Mastr.Bord.</p>
          </button>

          <button className={styles.card}  onClick = {() => containerHandler("super")}>
            <h2>Super Admin &rarr;</h2>
            <p>Administrator and can access in-depth features.</p>
          </button>

          <button className={styles.card}  onClick = {() => containerHandler("student")}>
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

export default Home;