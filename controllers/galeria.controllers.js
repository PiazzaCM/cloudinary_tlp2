const path = require("path");
const { cloudinary } = require("../cloud/cloud");
const Image = require("../models/fotos.models");


const vistaindex = (_req, res) => {
  res.render("views/index");
};

const create = (_req, res) => {
  res.render("views/create");
};


//APIS
const index = async (req, res) => {};

const mostrar = async (req, res) => {};

const store = async (req, res) => {
  let image;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No hay imagen cargada" });
  }



  image = req.files.image;

  const imageExists = await Image.findOne({
    where: {
      original_filename: image.name.split(".")[0],
    },
  });
  if (imageExists) {
    return res.status(400).json({ mensaje: "Imagen existente" });
  }

  uploadPath = path.join(__dirname, "../files/", image.name);

  image.mv(uploadPath, function (err) {
    if (err) return res.status(500).json(err.message);
  });

  const {
    original_filename,
    format,
    resource_type,
    url,
    secure_url,
    asset_id,
    public_id,
    version_id,
    created_at,
  } = await cloudinary.uploader.upload(uploadPath).catch((error) => {
    console.log(error);
    res.status(500).json(err.message);
  });

  const imagen = Image.create({
    original_filename,
    format,
    resource_type,
    url,
    secure_url,
    asset_id,
    public_id,
    version_id,
    creation: created_at,
  });

  return res.status(201).json({ success: "Imagen cargada." });
};

const actualizar = async (req, res) => {};

const destroy = async (req, res) => {};


module.exports = {
    index,
    create,
    vistaindex,
    mostrar,
    actualizar,
    store,
    destroy
  };