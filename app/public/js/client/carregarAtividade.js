$(function() {
    var socket2 = io();

    // socket2.emit('enviarCodigo', sessionStorage.getItem('codigo'));
    socket2.on('receberAtividade', function(data){

    // socket.on('verPagina', function(maquina, codigo){
    //     console.log(codigo);
    // });
      sessionStorage.setItem('atividade', data);
      $('#atividade').html(sessionStorage.getItem('atividade'));
    });
    if(sessionStorage.getItem('atividade')){
      $('#atividade').html(sessionStorage.getItem('atividade'));
    }
});
