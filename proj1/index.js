//npm init (nome do projeto) e dps coloca as infos necessárias
//npm install lodash - instalar
//npm (rm, remove, uninstall) lodash - remover
//npm install lodash@3.10.1 - instalar uma versão específica
//npm install lodash* - atualiza para a última versão disponível
//npm update - atualiza todas as dependências de uma vez
//npm install debug --save-dev - para fazer debud e fica apenas na máquina, não vai para produção

const _ = require('lodash');
const diff = _.difference([2,4,5,6,7], [4,5,6,7]);
console.log(diff);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = _.concat(arr1, arr2);
console.log(arr3);

//lib moment

const moment = require('moment');
console.log(moment().format());
console.log(moment().format("D/M/Y"));
console.log(moment().format("D/M/Y, h:mm:ss a"));