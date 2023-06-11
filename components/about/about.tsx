import styles from './about.module.css';
import Image from 'next/image';
import PFP from '../../public/PFP.jpeg';

export default function About () {
  return (
    <div className={styles.aboutContainer}>
      <h1 id="About" className={styles.title}>
        ABOUT
      </h1>
      <div className={styles.about}>
        <Image
          className={styles.pfp}
          src={PFP}
          width={400}
          height={400}
          alt="Hector Wong Profile Pic"
        />
        <div className={styles.description}>
          <h2>Generalist in Life,{<br/>}Specialist in React.</h2><br/>
            Thank you so much for visiting my humble portfolio. My name is Hector and I am a full stack software developer that specializes in React.{<br/>}{<br/>}
            I like to build things that provide value, bring joy, or entertainment.{<br/>}{<br/>}
            My ultimate goal in life is to make the world a better place. I already did the first step (building this page). The next step is building other, better, cooler, more helpful stuff. I believe the best results come from teamwork.{<br/>}{<br/>}
            <span style={{fontFamily: "Space Mono", fontSize: '30px'}}>LET&apos;S BUILD TOGETHER.</span>
        </div>
      </div>
    </div>
  )
}