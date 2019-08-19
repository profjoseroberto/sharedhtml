$(function() {
  $(document).on('keyup', function() {
    enviarDadosInteracao();
  });

  setInterval(function() {
    enviarDadosInteracao();
  }, 20000);

  function enviarDadosInteracao() {
    var socket = io();
    var nomeUsuario = sessionStorage.getItem('nomeUsuario');
    // console.log(nomeUsuario);
    // var meuIp = sessionStorage.getItem('meuIp');
    var codigo = (sessionStorage.getItem('codigo')) ? sessionStorage.getItem('codigo') : "";
    var codigoCompartilhado = (sessionStorage.getItem('codigoCompartilhado')) ? sessionStorage.getItem('codigoCompartilhado') : "";
    var chat = sessionStorage.getItem('chat') ? sessionStorage.getItem('chat') : "";

    socket.emit('setCodigosAlunos', nomeUsuario, codigo, codigoCompartilhado, chat);
  }
});
