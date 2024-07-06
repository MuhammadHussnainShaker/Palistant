import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [text, setText] = useState({})

  useEffect(() => {
    axios
      .get("/api/text")
      .then((response) => {
        setText(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Palistant</h1>
      <p>{text.data}</p>
    </>
  )
}

export default App
