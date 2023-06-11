'use client';

import { AxiosError, AxiosResponse } from 'axios';
import styles from './contact.module.css';
import 'dotenv/config';
import { useState } from 'react';
const axios = require('axios').default;

const accessKey = 'bc537339-1a3c-47a2-9293-6f6a12b0ce99'

const formData = new FormData();
formData.append('name', '');
formData.append('email', '');
formData.append('message', '');
formData.append('subject', 'someone sent you a message');
formData.append('from_name', 'HectorWong.dev');

export default function Contact () {
  const [submitStatus, setSubmitStatus] = useState('notSubmitted');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, target: 'name' | 'email' | 'message') => {
    e.preventDefault();
    formData.set(target, e.target.value)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.append('access_key', accessKey || '');
    console.log(JSON.stringify(formData));
    axios.post('https://api.web3forms.com/submit', formData)
      .then((res: AxiosResponse) => {
        setSubmitStatus('submitted');
      })
      .catch((err: AxiosError) => {
        err.message;
      })
  }

  return ( submitStatus === 'notSubmitted' ?
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>
        WRITE ME
      </h1>
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          <input className={styles.name} placeholder='Name' required onChange={(e) => {handleChange(e, 'name')}}/>
          <input className={styles.email} placeholder='Email' required onChange={(e) => {handleChange(e, 'email')}}/>
          <textarea className={styles.message} placeholder='Message' onChange={(e) => {handleChange(e, 'message')}} required/>
          <button className={styles.submit} type='submit'>Let&apos;s Talk</button>
          <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}/>
        </form>
    </div>
    : submitStatus === 'submitting' ?
    <></>
    :
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>WRITE ME</h1>
      <span className={styles.thankyou}>
        Thank you, I will get back to you as soon as possible.
      </span>
    </div>
  )
}