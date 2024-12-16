import { useState } from 'react'
import './App.css'
import Posts from './posts'

function App() {

  return (
    <>
      <h1>REACT CORE CONCEPTS RECAP</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>props</li>
        <li>Event handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />

      <Posts></Posts>
    </>
  )
}

export default App
