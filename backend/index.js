import express from "express"
import dbConnect from "./config/dbConnection.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"
import commentRoute from "./routes/commentRoute.js"

dotenv.config()
dbConnect() 

const app = express()
app.use(express.json())

app.use("/users", userRoute)
app.use("/posts", postRoute)
app.use("/comments", commentRoute)

// Latest Way to catch error in Express 5
app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack,
    });
});
app.listen(3000,() => {
    console.log(`Server is running on port ${3000}`)
})