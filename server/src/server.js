import 'dotenv/config'
import connectDB from "./db/index.js"
import express from "express"


const app = express()

const port = process.env.PORT


app.get("/api/text", (req, res) => {
  res.send(
    { 
      "data": "I am text from Palistant server"
    }
  )
})

connectDB()

app.listen(port, () => {
  console.log(`Palistant server listening on Port: ${port}`)
})
