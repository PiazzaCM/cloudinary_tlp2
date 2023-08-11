const path = require("path");
const { cloudinary } = require("../utils/coudinary");
const Image = require("../models/image.models");


const index = (_req, res) => {
  res.render("galleries/index", { mensaje: "" });
};

const create = (_req, res) => {
  res.render("galleries/create");
};



module.exports = {
    index,
    create,
  };