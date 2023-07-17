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
            Thanks for stopping by! My name is Hector and I am a full stack software developer that currently specializes in React applications.{<br/>}{<br/>}
            I have a personal intersest in building things that provide value, bring joy, or entertainment.{<br/>}{<br/>}
            When I&apos;m not coding, you can find me shooting hoops at the park, working on my swing at the golf range, or practicing my Bear Grylls impression in nature.{<br/>}{<br/>}
            <span style={{fontFamily: "Space Mono", fontSize: '30px'}}>LET&apos;S BUILD TOGETHER.</span>
        </div>
      </div>
    </div>
  )
}