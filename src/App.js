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
    <div className="container">
      <nav className="header">
        <span className="title">
          <span className="icon"><GiWorld /></span>
          <span className="title-text">My Travel Journal</span>
        </span>
      </nav>
      {card}
    </div>
  )
}
