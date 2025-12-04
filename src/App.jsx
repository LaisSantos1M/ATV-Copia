import { useState } from 'react'
import style from "./App.module.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0){

  }

  return (
    <>
     <nav className={style.menu}>
      <a href="#s1">Letra</a>
      <a href="#s2">Tradução</a>
     </nav>

     <section id='s2' className={style.s1}>
      <h2>Heather</h2>
      <h3>Conan Gray</h3>
      <p1>I still remember third of December, me in your sweater
      You said it looked better on me than it did you
      Only if you knew how much I liked you
      But I watch your eyes as she</p1>

      <p2>Walks by
      What a sight for sore eyes, brighter than a blue sky
      She's got you mesmerized while I die</p2>
     </section>
    </>
  )
}

export default App
