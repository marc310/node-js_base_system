var Usuario = require("../models/usuario");
//
var HomeController = {
  //
  index: function(req,res,next){
      res.render('index',{
          title: 'Estudos nodeJs :: CodeX Developing ::',
          desenvolvedor: 'Marcelo Motta'
      });
  }, // fim da index
  //
  usuario: function(req,res,next){
    var usuario = new Usuario();
      usuario.id = 2;
      usuario.nome = "codex";
      usuario.login = "cod3x";
      usuario.senha = "123456";
      usuario.email = "codex@teste.com";
    res.send('Olá '+ usuario.nome +' Usuário!');

    usuario.salvar();
  }
  // fim usuario
// fim da home_controller
};
//
module.exports = HomeController;
