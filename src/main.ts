import express from "express"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbConnection = async () => {
    let dbCon = false
    while (!dbCon) {
        try {
            console.log("connecting to DB")
            await mongoose.connect("mongodb+srv://andrewkutovy24:IAm$Proger2@cluster0.3jmiy6a.mongodb.net/nodejs-express-db")
            dbCon = true
            console.log("Connected to DB")
        } catch (e) {
            console.log("DB don-t avaiible, please wait 3 seconds. ")
        }
    }

}

const start = async () => {
    await dbConnection()
    app.listen(2222, () => {
        console.log("serv started on 2222")
    })
}

start()