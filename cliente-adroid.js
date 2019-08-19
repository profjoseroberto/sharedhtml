var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        'Accept' : 'text/html'
    }
};
// 'Accept' : 'application/json'
/*text/html -> para aceitar html*/

// Para ver o corpo da resposta, dentro da função, colocamos o res.on(), passando como argumento o data e outra function(), essa segunda função será executada quando os dados da requisição estiverem prontos. Para a segunda função de callback passamos como argumento uma variável chamada body. Ainda, dentro da segunda função de callback nós vamos imprimir o corpo usando o console.log("Corpo: " + body). Por fim, inserimos antes do res.on() o console.log(res.statusCode)

http.get(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});