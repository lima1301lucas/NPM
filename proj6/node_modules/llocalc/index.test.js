//console.log("Teste");

const calc = require('./index');

try{
    let sumTest = calc.sum(2,2);
    if(sumTest != 4){
        throw new Error("A soma de 2 + 2 está errada, valor = ", sumTest);
    }

    let subTest = calc.sub(4,2);
    if(subTest != 2){
        throw new Error("A subtração de 4 - 2 está errada, valor = ", subTest);
    }

    console.log("Passou nos testes");
}
catch (e){
    throw e.message;
}