import React from "react"
import Travel from "./Travel"
import data from "./data"
import './App.css';
import { GiWorld } from "react-icons/gi";


export default function App() {
  const card = data.map(item => {
    return (
      <Travel
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <nav className="nav">
        <span><GiWorld />My Travel Journal</span>
      </nav>
      {card}
    </div>
  )
}
