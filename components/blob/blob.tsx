'use client';

import { useEffect, useRef } from 'react';
import styles from './blob.module.css';

export default function Blob () {

  useEffect(() => {
    const updateBlobPos: (x: number, y: number) => void = (x, y) => {
      let blob: HTMLElement | null = document.getElementById('blob');
      blob!.animate({
        left: `${x}px`,
        top: `${y}px`,
      }, {duration: 3000, fill: 'forwards'})
    }

    if (typeof window !== "undefined") {
      window.addEventListener('mousemove', (event) => {
        updateBlobPos(event.clientX, event.clientY);
      })
    }

  }, [])

  return (
    <>
      <div className={styles.blur}>
        <div id="blob" className={styles.blob}></div>
      </div>
    </>
  )
}