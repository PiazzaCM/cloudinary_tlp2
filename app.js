const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');

dotenv.config({ path: ".env" });


const { sequelize } = require('./database/config');


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));


app.use(fileUpload());


sequelize.authenticate()
  .then(() => { 
    console.log('Conexión a base de datos exitosa');
 })
  .catch((error) => console.log('Error al conectar a base de datos', error));

app.use("/", require("./routes/galeria.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en ${process.env.APP_URL}:${process.env.PORT}`);
});

