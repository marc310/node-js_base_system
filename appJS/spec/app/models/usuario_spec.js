var Usuario = require("../../../app/models/usuario");
//
describe("O metodo de salvar", function() {
  it("Deve salvar os dados no banco: id, nome, login, senha, e-mail", function(done) {
    //
    var u =  new Usuario();
    u.nome = "salvando pelo teste";
    u.login = "testando";
    u.senha = "2222";
    u.email = "testando@test.com";
    //
    u.salvar(function(retorno){
      expect(retorno.erro).toBe(false);
      done();
    });
  });
});
//
describe("O metodo de buscar todos", function() {
  it("Deve retornar todos os dados no banco de dados", function(done) {
    //
    Usuario.todosUsuarios(function(retorno){
      console.log(retorno);
      done();
    });
  });
});
