import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react';

type RecordClipProps = {
  onStart: () => void;
  onStop: () => void;
}
const RecordClip: React.FC<RecordClipProps> = ({ onStart, onStop }) => {
  const [isRecording, setIsRecording] = useState(false);
  const toggleIsRecording = () => setIsRecording(!isRecording);
  const onClick = () => {
    if (isRecording) {
      console.log('Stopping recording...')
      onStop();
    } else {
      console.log('Starting recording...')
      onStart();
    }
    toggleIsRecording();
  }
  return (
    <>
      <h1 className={styles.title}>Interview ChatGPT</h1>
      <button onClick={onClick}>{isRecording ? 'Stop' : 'Start'} recording</button>
    </>
  )
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interview ChatGPT</title>
        <meta name="description" content="Interface to use voice to interact with ChatGPT." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RecordClip onStart={() => {}} onStop={() => {}} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://healthy-home-office.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Healthy Home Office
        </a>
      </footer>
    </div>
  )
}
