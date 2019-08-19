//CHAT-----------------------------------------------------------------------------------------------------------
$(function() {
  var socket = io();
  var sala = sessionStorage.getItem("sala");
  socket.on("connect", function() {
    socket.emit('chat', sala, sessionStorage.getItem("nomeUsuario"));
    rolagemDoScroll();
  });
  //enviando mensagem
  $('form').submit(function() {
    socket.emit("enviar mensagem", sala, sessionStorage.getItem("nomeUsuario"), $("#m").val());
    $('#m').val(''); //limpando o campo
    // var altura = $('#messages').height();
    // console.log(altura);
    // console.log($('#messages').scrollBotton());
    return false;
  });

  var conteudo = "";
  var usuario = "";
  //recebendo e inserindo na tela
  socket.on("nova mensagem", function(data) {
    // apanhar comentários
    conteudo = data.mensagem;
    usuario = data.usuario;
    // console.log(conteudo);
    conteudo = conteudo.replace(/<!--/g, '&#60;&#33;&#45;&#45;').replace(/-->/g, '&#45;&#45;&#62;');
    // // apanhar elementos
    conteudo = conteudo.replace(/</g, '&#60;').replace(/>/g, '&#62;');

    conteudo = "<strong>" + usuario + ":</strong> " + conteudo;
    $('#messages').append($('<li>').html(conteudo));

    sessionStorage.setItem('chat', $('#messages').html());
    rolagemDoScroll();
  });

  function rolagemDoScroll() {
    var tamanhoDoScroll = ($('#messages li').length * 34) - $('#messages').height() + 34;
    $('#messages').scrollTop(tamanhoDoScroll);
  }

  //informar a entrada de novo usuario
  socket.on("novo usuario", function(data) {
    $('#messages').append($('<li>').html(data));
  });

  //gravar na sessão para retornar os dados em caso de atualização
  if (sessionStorage.getItem('chat')) {
    $('#messages').html($(sessionStorage.getItem('chat')));
  }
})
//FIM CHAT-----------------------------------------------------------------------------------------------------------
