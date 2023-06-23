import express from "express";
import postRoutes from "./routes/post.js"

const app = express()

app.use(express.json())
app.use()

app.listen(8800, ()=> {
    console.log("Connected!")
})