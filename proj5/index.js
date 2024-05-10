//npm install request -g (instala a dependência de forma global)
//npm link request - para rodar a aplicação quando o download for global
//npm remove request -g (remove as dependências globais)
//npm list - lista as dependências instalados no projeto
//npm list --depth=0 -mostra as dependencias dos módulos principais
//npm list -g - mostra todas as dependências instalados de formas global
//npm prune - remove as dependências não usadas no projeto (apagadas no package.json)
//npm outdated - ver o que precisa ser atualizado
//npm search x - lista as libs que podem ajudar a resolver um problema
//npm cache verify - verificar cache do npm
//npm cache clean --force - Força a limpar o cache
//npm audity - comando que verifica as vulnerabilidades 
//npm audity fix - ajustar essas vulnerabilidades
//npm view x - busca e mostra informações das dependências/pacotes
//npm docs x - abre o navegador e mostra a documentação do pacote
//npm homepage x - abre o navegador e leva a homepage da dependência/pacote
//npm dedupe - reduzir a duplicação de dependências
//npm install axios --no-save - instala o pacote sem salvar nas dependências
//npm run - verifica os scripts que o projeto possui

const request = require('request');

request('https://www.google.com.br', function(error, response, body){
    console.log("Erro: ", error);
    console.log("Status code: ", response && response.statusCode);
    console.log("Body: ", body);
});