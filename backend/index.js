import express from "express"

const app = express()

const name = "Marvel"

console.log(name)
app.listen(3000,() => {
    console.log(`Server is running on port ${3000}`)
})