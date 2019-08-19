var app = require('./config/express')();
// /*web socket*/
var http = require('http').Server(app);


var io = require('socket.io')(http);

const sala = "";
io.sockets.on("connection", function(socket) {
  // console.log(socket);
  socket.on("chat", function(sala, usuario) {
    socket.join(sala);
    // console.log("entrou na sala: " + sala);
    socket.in(sala).emit("novo usuario", "<strong style='color: red'>" + usuario + " entrou</strong>");
  });

  socket.on('sair sala', function(salaAtual, novaSala) {
    socket.leave(sala);
    socket.join(novaSala);
    // console.log(socket.rooms);
    // console.log("saiu da sala: " + sala);
  });

  socket.on("enviar mensagem", function(sala, usuario_, mensagem_) {
    io.sockets.in(sala).emit('nova mensagem', {
      "usuario": usuario_,
      "mensagem": mensagem_
    });
  });

  socket.on("codigoParceiro", function(sala) {
    socket.join(sala);
  });

  socket.on("enviarCodigoParaParceiro", function(sala, usuario, codigo) {
    io.sockets.to(sala).emit('receberCodigoParceiro', usuario, codigo);
  });
});

var body = "<!DOCTYPE html>\n" +
  "<html>\n" +
  "\t<head>\n" +
  "\t\t<title></title>\n" +
  "\t\t<meta charset='utf-8'>\n" +
  "\t</head>\n" +
  "\t<body>\n\n" +

  "\t</body>\n" +
  "</html>";
var socks = [];
var salaShared = "";
io.on('connection', function(socket) {
  socket.on("shared", function(salaShared) {
    socket.join(salaShared);
    // console.log("entrou na sala");
  });
  socks.push(socket);

  // io.in(sala).emit('refresh', {
  //   body: body
  // });

  socket.on('refresh', function(body_) {
    // body = body_;
    io.in(salaShared).emit('refresh', {
      body: body_
    });
  });

  socket.on('change', function(op, salaShared) {
    // socket.join(sala);
    // console.log(op);
    if (op.origin == '+input' || op.origin == 'paste' || op.origin == '+delete') {
      socks.forEach(function(sock) {
        //se houver alguma mudança no sock ele envia para atualizar
        if (sock != socket) {
          // console.log(sock);
          // sock.in(sala).emit('change', op);
          // return
          sock.emit('change', op, salaShared);
        }
      });
    };
  });
});


//PROFESSOR---------------------------------------------------------------------
io.on('connection', function(socket) {
  socket.on('entrar', (params) => {
    // console.log(params);
    io.emit('updatePlayerLobby', params);
  });

  socket.on('startGame', function(dados) {
    // console.log(dados);
    io.emit('startGame', dados);
  });

  socket.on('enviarAtividade', function(dados) {
    io.emit('receberAtividade', dados);
  });

  socket.on('setCodigosAlunos', function(usuario_, codigo, codigoCompartilhado, chat) {
    io.emit('getCodigosAlunos', {
      usuario: usuario_,
      codigo: codigo,
      codigoCompartilhado: codigoCompartilhado,
      chat: chat
    });
  });
});
//FIMPROFESSOR------------------------------------------------------------------

http.listen(3000, function() {
  console.log("Servidor rodando na porta 3000");
});
