import styles from './page.module.css';
import Work from '../../components/work/work';
import Card from '../../components/hero/card';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';

export default function Home () {
  return (
    <>
      <main className={styles.main} id="Home">
        <Card />
        <About />
        <Work/>
        <Contact />
      </main>
    </>
  )
}
