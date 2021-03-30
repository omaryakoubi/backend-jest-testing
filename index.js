const express = require("express");
const db = require("./config/db.config");

const app = express();

db.authenticate()
    .then(() =>  console.log('DB CONNECTED'))
    .catch((err) => console.log(err));
   
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));