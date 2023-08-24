'use client'
import React, { useState } from 'react'
import styles from '@/styles/signUp.module.css'
import Input from './Input'

const SignUp = ({setAuthToggle}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
   console.log('chekcing eroror')
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>SignUp </h3>  
      <Input type='text' placeholder='Full Name' setInput={setFullName} label='Full Name'/>

      <Input type='email' placeholder='email' setInput={setEmail} label='Email' />

      <Input type='password' placeholder='password' setInput={setPassword} label='Password' />

      <Input type='password' placeholder='confirm password' setInput={setConfirmPassword} label='Confirm Password' />

      <div className={styles.signUp_button}>
        <button className={styles.button}>SignUp</button>
      </div>
      <p className={styles.or}>or</p>
      <div className={styles.signUp_button}>
        <button className={styles.button}>SignUp With Google</button>
      </div>

      <div className={styles.text_div}>
        If you already have an account 
      <span className={styles.link_span} onClick={()=>setAuthToggle(pre=>!pre)}>Click here</span>
      </div>
     </div>
  )
}

export default SignUp