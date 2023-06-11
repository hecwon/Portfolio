import styles from './contact.module.css';

export default function Contact () {
  const accessKey="12345";
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>
        WRITE ME
      </h1>
        <form action='https://api.web3forms.com/submit' method='POST'>
          <div className={styles.formGrid}>
            <input type='hidden' name='access_key' value={accessKey}/>
            <input className={styles.name} placeholder='Name' required/>
            <input className={styles.email} placeholder='Email' required/>
            <textarea className={styles.message} placeholder='Message' required/>
            <button className={styles.submit} type='submit'>Let&apos;s Talk!</button>
          </div>
        </form>
    </div>
  )
}