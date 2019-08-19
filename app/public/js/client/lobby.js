var socket = io();

//When player connects to server
//socket.on('connect', function() {

//    var params = jQuery.deparam(window.location.search); //Gets data from url (Obtém dados do URL)

    //Tell server that it is player connection (Diga ao servidor que é conexão do jogador)
//    socket.emit('player-join', params);
//});

//Boot player back to join screen if game pin has no match (Reinicie o player para entrar na tela se o pin do jogo não tiver correspondência)
//socket.on('noGameFound', function(){
//    window.location.href = '../';
//});
//If the host disconnects, then the player is booted to main screen (Se o host desconectar, o player é inicializado na tela principal)
//socket.on('hostDisconnect', function(){
//    window.location.href = '../';
//});

//When the host clicks start game, the player screen changes (Quando o host clica em iniciar o jogo, a tela do player muda)
//socket.on('gameStartedPlayer', function(){
    //window.location.href="/player/game/" + "?id=" + socket.id;
//    window.location.href="http://localhost:3000/editor";
//});
socket.on('startGame', function(){
    //window.location.href="/player/game/" + "?id=" + socket.id;
    window.location.href="/editor";
});
