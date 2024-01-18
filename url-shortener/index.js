import express from "express";
import urlRoute from "./routes/url.js";
import bodyParser from "body-parser";
import {connect} from './connect.js'

const app = express();

connect('mongodb://127.0.0.1:27017/url-shortener').then(()=>console.log("connected"))
app.use(bodyParser.json())
app.use("/url", urlRoute );

app.listen(3001, () => console.log("Listening on 3000"));
