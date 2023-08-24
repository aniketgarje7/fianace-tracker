import React from 'react'
import styles from '@/styles/signUp.module.css'
import { useState } from 'react'
import Input from './Input'
const SiginIn = ({setAuthToggle}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className={styles.container}>
    <h3 className={styles.header}>SignIn </h3>  

    <Input type='email' placeholder='email' setInput={setEmail} label='Email' />

    <Input type='password' placeholder='password' setInput={setPassword} label='Password' />

    <div className={styles.signUp_button}>
      <button className={styles.button}>SignIn</button>
    </div>
    <p className={styles.or}>or</p>
    <div className={styles.signUp_button}>
      <button className={styles.button}>SignIn With Google</button>
    </div>

    <div className={styles.text_div}>
      If you don't have an account 
    <span className={styles.link_span} onClick={()=>setAuthToggle(pre=>!pre)}>Click here</span>
    </div>
   </div>
  )
}

export default SiginIn