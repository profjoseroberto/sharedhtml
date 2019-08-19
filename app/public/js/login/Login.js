$(document).ready(function () {
    //recuperando as informações
    let nomeUsuario = sessionStorage.getItem("nomeUsuario");
    // let meuIp = sessionStorage.getItem("meuIp");
    // let ipProfessor = sessionStorage.getItem("ipProfesso");
    var url = window.location.href;
    var absoluto = url.split("/")[url.split("/").length - 1];
    // console.log(location);

    if (nomeUsuario !== null) {
        $(".nomeUsuario").append(nomeUsuario);
        // $(".endIp").append(meuIp);
    } else if (absoluto !== '') {
        $(location).attr('href', '/');
    }
});

$("#form-login").submit(function () {
    let usuario = $("#inputNome").val();
    // let servidorProfessor = $("#inputProfessor").val();
    entrar(usuario);
});

$("#sair").click(function () {
    sair();
});

//let logado = JSON.parse(localStorage.getItem("logado"));
//let usuario = localStorage.getItem("nomeUsuario")
//
//if(logado && usuario) entrar()
//else sair()
//
function entrar(nomeUsuario) {
    logado = true;
    sessionStorage.setItem("logado", true);
    sessionStorage.setItem("nomeUsuario", nomeUsuario);
    // sessionStorage.setItem("ipProfessor", ipProfessor);

    // sessionStorage.setItem("meuIp", getEnderecoIp());
}


function sair() {
    logado = false;
    sessionStorage.setItem("logado", false);
    sessionStorage.removeItem("nomeUsuario");
    // sessionStorage.removeItem("meuIp");
    $(location).attr('href', '/');
}

// function getEnderecoIp() {
//     window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome
//     var pc = new RTCPeerConnection({iceServers: []}), noop = function () {};
//     pc.createDataChannel('');//create a bogus data channel
//     pc.createOffer(pc.setLocalDescription.bind(pc), noop);// create offer and set local description
//     pc.onicecandidate = function (ice)
//     {
//         if (ice && ice.candidate && ice.candidate.candidate)
//         {
//             var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
//             sessionStorage.setItem("meuIp", myIP);
//         }
//     };
// }
