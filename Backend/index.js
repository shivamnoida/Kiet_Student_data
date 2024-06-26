import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });


    app.use("/api",route)

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
