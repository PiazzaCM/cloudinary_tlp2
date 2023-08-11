const { Router } = require("express");

const {
  create, 
  index
} = require("../controllers/galleries.controller");

const router = Router();

//Vistas
router.get("/", index);
router.get("/create", create);

// API CRUD
router.get("/api", index);
router.get("/api/:id/mostrar", );
router.post("/api", );
router.put("/api/:id/update", );
router.delete("/api/:id/destroy", );

module.exports = router;