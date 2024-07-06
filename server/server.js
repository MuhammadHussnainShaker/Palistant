require("dotenv").config()
const express = require("express")
const app = express()

port = process.env.PORT

app.get("/", (req, res) => {
  res.send("<h2>Hello World, I am Palistant</h2>")
})

app.listen(port, () => {
  console.log(`Palistant server listening on Port: ${port}`)
})
