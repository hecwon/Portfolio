'use client';

import styles from './nav.module.css';
import NavButton from './NavButton';

export default function Nav () {
  function smoothScroll (target: string) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth',
      });
    }
  }

  const partsOfPage = ['Home', 'About', 'Work', 'Contact'];

  return (
    <div className={styles.nav}>
      {partsOfPage.map((part) => <NavButton partOfPage={part} smoothScroll={smoothScroll} key={part}/>)}
    </div>
  )
}