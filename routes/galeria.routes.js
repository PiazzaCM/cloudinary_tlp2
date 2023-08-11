const { Router } = require("express");

const {
  create, 
  index,
  vistaindex,
  mostrar,
  actualizar,
  store,
  destroy
} = require("../controllers/galeria.controllers");

const router = Router();


router.get('/vistaindex', (req, res)=>{
    res.render('index')
})


router.get('/crear', (req, res)=>{
    res.render('/create')
})


// API CRUD
router.get("/api", index);
router.get("/api/:id/mostrar", mostrar );
router.post("/api", store);
router.put("/api/:id/update", actualizar );
router.delete("/api/:id/destroy", destroy );

module.exports = router;