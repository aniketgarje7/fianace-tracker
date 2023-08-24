import React from 'react'
import styles from '@/styles/input.module.css'

const Input = ({label,placeholder,setInput,type}) => {
  return (
    <div className={styles.container}>
     <p className={styles.label}>{label}</p>
     <input 
     type={type}
     className={styles.input}
     placeholder={placeholder}
     onClick={(e)=>setInput(e.target.value)}
     />
    </div>
  )
}

export default Input