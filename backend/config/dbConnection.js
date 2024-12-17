import { connect } from "mongoose";

const dbConnect = async () => {
    try {
        const db = await connect(process.env.CONNECTION_STRING)
        console.log(`Database is connected Successfully : ${db.connection.host}, ${db.connection.name}`)
    } catch (error) {
        console.log("Database failed", error)
    }
}

export default dbConnect