'use client';

import styles from './nav.module.css';

export default function NavButton ({partOfPage, smoothScroll}: {partOfPage: string, smoothScroll: Function}) {

  const goTo = () => {
    smoothScroll(partOfPage);
  }

  return (
    <div>
      <div className={styles.button} onClick={() => {goTo()}}>
        {partOfPage}
      </div>
    </div>
  )
}