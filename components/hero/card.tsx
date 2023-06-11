'use client';

import {useEffect} from 'react';
import styles from './card.module.css';

export default function Card () {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent, count: number) => {
      const target = event.target as HTMLElement;
      target.innerText = target.innerText.split('')
        .map((letter, index) => {
          count++;
          if (index === 6) return ' ';
          if (index < count/4 - 3) return target.dataset.value![index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
    }

    document.getElementById("hw")!.onmouseover = (event) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count === 43) clearInterval(interval);
        handleMouseOver(event, count);
        count++;
      }, 50);
    }
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <p id="hw" data-value="HECTOR WONG">
            HECTOR WONG
        </p>
      </div>
    </div>
  )
}