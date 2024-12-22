import express from "express"
import { clerkMiddleware, requireAuth } from "@clerk/express"
import dbConnect from "./config/dbConnection.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"
import commentRoute from "./routes/commentRoute.js"
import webhookRoute from "./routes/webhookRoute.js"

dotenv.config()
dbConnect() 

const app = express()
app.use(clerkMiddleware())
app.use("/webhooks", webhookRoute)
app.use(express.json())

/* app.get("/protect", (req, res) => {
   const { userId } = req.auth;
   if(!userId) {
    res.status(401).json({ message: "User not authenticated" });
   }
   res.status(200).json("content")
})

//Alternatively Using requireAuth middleware in express 5
app.get("/protect2", requireAuth(), (req, res) => {
   res.status(200).json("content")
})
*/


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