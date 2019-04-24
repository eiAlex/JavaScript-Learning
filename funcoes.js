//são como métodos 

function dizerOI(nome){
    console.log('OI ' +nome)
}

dizerOI("Alex");
dizerOI("Alan");

// outra forma de criar função é dentro de váriaveis 

var dizerOla = function (nome){
    console.log("Olá " +nome)
}

dizerOla("Alessabdra");

// outra forma é utilizando o contrutor dda função passando o argumento em formato de string

var dizerTchau = new Function ("nome", "console.log('Tchau '+ nome);");

dizerTchau("Lucia");
