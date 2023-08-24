'use client'
import Header from "@/components/Header";
import styles from './page.module.css';
import SignUp from "@/components/SignUp";
import SiginIn from "@/components/SiginIn";
import { useState } from "react";

export default function Home() {
  const [authToggle,setAuthToggle] = useState(false);
  return <div>
    <Header/>

    <div className={styles.sign_in_sign_up}>
      {!authToggle?
       <SignUp setAuthToggle={setAuthToggle}/>
       :
       <SiginIn setAuthToggle={setAuthToggle}/>
     }
    </div>
  </div>;
}
