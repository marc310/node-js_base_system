var db = require('../../config/database');
//
var Usuario = function(usuario){
  if (usuario !== undefined){
    this.id=usuario.id;
    this.nome=usuario.nome;
    this.login=usuario.login;
    this.senha=usuario.senha;
    this.email=usuario.email;
  }
  else {
    this.id=0;
    this.nome="";
    this.login="";
    this.senha="";
    this.email="";
  }
  //
  //
  this.salvar = function(callback){
    //
    var query = "";
    if(this.id == 0 || this.id == "" || this.id == undefined)
    {
      //TODO..
      //fazer validação dos campos..
      if(this.nome =="")
      {
        console.log("O Nome de Usuario precisa ser preenchido");
        return;
      }
      query = "INSERT INTO usuarios (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
      // inserir na base de dados
      db.cnn.exec(query, function(rows, err){
        if(err != undefined && err != null)
        {
          console.log("Erro ao salvar no Banco de Dados");
          callback.call(null, {erro:true, menssagem: err.message});
        }
        else
        {
        // inserido com sucesso!  ]
        callback.call(null, {erro:false});
        }
      });
    }
    else
    {
      query = "UPDATE usuarios SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE usuarios.id = '" + this.id + "';";
      //
      // atualizar no banco de dados
      db.cnn.exec(Upquery, function(rows, err){
        if(err != undefined && err != null)
        {
          console.log("Erro ao atualizar no Banco de Dados");
          callback.call(null, {erro:true, menssagem: err.message});
        }
        else
        {
        // atualizado com sucesso!  ]
        console.log("Usuario atualizado com sucesso!");
        callback.call(null, {erro:false});
        }
      });
    } //end else
    // end salvar
  };
};
//
//
Usuario.todosUsuarios = function(callback){
  //
  query = "SELECT * FROM usuarios;";
  // inserir na base de dados
  db.cnn.exec(query, function(rows, err){
    if(err != undefined && err != null)
    {
      callback.call(null, {erro:true, menssagem: err.message, usuarios: []});
    }
    else
    {
    callback.call(null, {erro:false, usuarios:rows});
    }
  });
  // end salvar
};

// export
module.exports = Usuario;
