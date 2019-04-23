//lacos de repeticao ou interacoes 
/// for , for in, while, do while 
x = 0 ;
while(  x <= 10){
    console.log("Valor de X: " +x)
   x++
}

do {

    console.log("Valor de X: decrementado " +x)
    x--
}while (x>=1);

for(var y =0 ; y <= 10 ; y++){

    console.log("valor de Y: " + y)
}

var obj = {
    nome:"Alex",
    sobrenomes: "junio"
};

for (var prop in obj){
    console.log(obj[prop]);
}