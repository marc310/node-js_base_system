var Usuario = require("../models/usuario");
//
var UsuariosController = {
  //
  todos: function(req,res,next){
    Usuario.todosUsuarios(function(retorno){
      if(retorno.erro){
        res.send({erro: 'erro ao buscar usuarios'}, 500);
      }
      else
      {
      res.send(retorno.usuarios,200);
      }
    });
    res.render('index',{
        title: 'Estudos nodeJs :: CodeX Developing ::',
        desenvolvedor: 'Marcelo Motta'
    });
  }, // fim da index
// fim da home_controller
};
//
module.exports = UsuariosController;
