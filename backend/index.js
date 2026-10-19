import express from 'express'
import cors from 'cors'

import dotenv from "dotenv"
import apiRoute from "./routes/apiRoute.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

app.use("/api", apiRoute)

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "OK"
    })
})

