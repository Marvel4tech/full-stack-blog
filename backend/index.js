import express from "express"
import { clerkMiddleware } from "@clerk/express"
import dbConnect from "./config/dbConnection.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import postRoute from "./routes/postRoute.js"
import commentRoute from "./routes/commentRoute.js"
import webhookRoute from "./routes/webhookRoute.js"
import cors from "cors"

// Load environment variables from .env file
dotenv.config()

// Connect to the database
dbConnect() 

// Create an Express application
const app = express()

// Middleware
app.use(cors(process.env.CLIENT_URL))
app.use(express.json())
app.use(clerkMiddleware())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

// Define routes
app.use("/users", userRoute)
app.use("/posts", postRoute)
app.use("/comments", commentRoute)
app.use("/webhooks", webhookRoute)

// Latest Way to catch error in Express 5
app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack,
    });
});

// Start the server
const PORT = process.env.PORT
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})