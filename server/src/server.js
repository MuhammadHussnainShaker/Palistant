import "dotenv/config"
import connectDB from "./db/index.js"
import { app } from "./app.js"

const port = process.env.PORT;

app.get("/api/text", (req, res) => {
  res.send({
    data: "I am text from Palistant server",
  })
})

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error)
      throw error
    })
    app.listen(port, () => {
      console.log(`Palistant server listening on Port: ${port}`)
    })
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error)
  })
