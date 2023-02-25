const express = require ('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

mongoose.connect(process.env.MONGO_DB)
.then(()=>console.log("Conectado ao mongoDB Atlas"));
app.use('/files', express.static(path.resolve(__dirname, "uploads")))
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, ()=> console.log("servidor rodando na porta"+process.env.PORT))
