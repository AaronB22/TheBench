import express from 'express';
import dotenv from 'dotenv';

const app = new express();

//read environment variables
dotenv.config();

app.use(express.static("public"));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})