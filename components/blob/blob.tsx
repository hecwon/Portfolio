'use client';

import styles from './blob.module.css';

export default function Blob () {
  let blob: HTMLElement | null

  if (window) {
    window.addEventListener('mousemove', (event) => {
      updateBlobPos(event.clientX, event.clientY);
    })
  }

  const updateBlobPos: (x: number, y: number) => void = (x, y) => {
    if (!blob) {
      blob = document.getElementById('blob');
    }
    blob!.animate({
      left: `${x}px`,
      top: `${y}px`,
    }, {duration: 3000, fill: 'forwards'})
  }
  return (
    <>
      <div className={styles.blur}>
        <div id="blob" className={styles.blob}></div>
      </div>
    </>
  )
}