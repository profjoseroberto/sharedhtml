var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
};

//Content-type -> Serve para definir o tipo de dado que será enviado
// 'Accept' : 'application/json'
/*text/html -> para aceitar html*/


var client = http.request(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo: 'teste',
    descricao: 'descrevendo o livro',
    preco: '88'
};

//dispara a requisição
client.end(JSON.stringify(produto));