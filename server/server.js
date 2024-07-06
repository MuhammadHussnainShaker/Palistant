import "dotenv/config"
import express from "express"
const app = express()

const port = process.env.PORT || 8082

app.get("/api/text", (req, res) => {
  res.send(
    { 
      "data": "I am text from Palistant server", 
    }
  )
})

app.listen(port, () => {
  console.log(`Palistant server listening on Port: ${port}`)
})
