var express = require('express');
var HomeController = require('../controller/home_controller');
var UsuariosController = require('../controller/usuarios_controller');
//
var router = express.Router();

/* GET home page. */
//
router.get('/', HomeController.index);
router.get('/usuario', HomeController.usuario);

router.get('/usuarios.json', UsuariosController.todos);

/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Testes em Express' });
}); */

module.exports = router;
