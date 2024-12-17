import express from "express"
import dbConnect from "./config/dbConnection.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"
import commentRoute from "./routes/commentRoute.js"

dotenv.config()
dbConnect() 

const app = express()

app.use("/users", userRoute)
app.use("/posts", postRoute)
app.use("/comments", commentRoute)
app.listen(3000,() => {
    console.log(`Server is running on port ${3000}`)
})