'use client';

import styles from './work.module.css';
import Image from 'next/image';

export default function Work () {

  return (
    <div id="Work" className={styles.workContainer}>
      <h1 className={styles.title}>
          WORK
      </h1>
      <div id='puppymates' className={styles.project}>
        <br/>
          <div className={styles.workGrid}>
            <Image
              className={styles.mobileScreencap}
              width={950 * .4}
              height={1794 * .4}
              src='/eventHome.png'
              alt="Puppymates Event Home Screenshot"
            />
            <Image
              className={styles.mobileScreencap}
              width={950 * .4}
              height={1794 * .4}
              src='/createEvent.png'
              alt="Puppymates Create Event Screenshot"
            />
        </div>
        <div className={styles.description}>
          <h2>
            Puppymates
          </h2>
          <p>
            React Native application for dog owners to &apos;swipe&apos; on other dogs to set up play dates, as well as events. Here is a sample of the 2 main &apos;Events&apos; components, which I implemented.
          </p>
          <p>
            JavaScript{<br/>}React Native{<br/>}Express.js{<br/>}Node.js{<br/>}Postgres
          </p>
        </div>
      </div>
      <div id='sneakerhead' className={styles.project}>
        <Image
          className={styles.webScreencap}
          src='/sneakerheadLanding.png'
          width={2856 * .4}
          height={2278 * .4}
          alt=''
        />
        <div className={styles.description}>
          <h2>
            Sneakerhead
          </h2>
          <p>
            React application for sneaker enthusiasts to test their knowledge with a database of over 6000 documents. This was a personal full stack application built in 24 hours. Here is a sample of the landing page.
          </p>
          <p>JavaScript{<br/>}React{<br/>}Chakra{<br/>}Express.js{<br/>}Node.js{<br/>}MongoDB</p>
        </div>
      </div>
      <div id='atelier' className={styles.project}>
          {/* to-do: fix Image component to make responsive GIF */}
          <Image
            className={styles.webScreencap}
            src='/atelier.gif'
            width={480}
            height={308}
            alt=''
          />
        <div className={styles.description}>
          <h2>Atelier</h2>
          <p>E-commerce &quot;Product Page&quot; overhaul using pre-existing backend. This is a sample of the &quot;Ask A Question&quot; modal that I built. Later on, my team and I converted the backend to microservice architecture as well.</p>
          <p>JavaScript{<br/>}React{<br/>}Express.js{<br/>}Node.js{<br/>}</p>
        </div>
      </div>
    </div>
  )
}