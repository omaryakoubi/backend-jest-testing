const express = require("express");
const morgan = require("morgan")
const db = require("./config/db.config");

const app = express();

app.use(express.json())
app.use(morgan("combined"))
app.use( express.urlencoded( { extended: false } ) );

app.use( require( './routes' ) );

db.authenticate()
    .then(() =>  console.log('DB CONNECTED'))
    .catch((err) => console.log(err));
   
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));