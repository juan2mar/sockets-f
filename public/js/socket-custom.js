var socket = io();
//los Eventos On son para escuchar información
//Nos dice cuando se conecta al servidor
socket.on('connect', function () {
    console.log('Conectado al servidor');
});
//Nos dice cuando se desconecta del servidor
socket.on('disconnect', function () {
    console.log('Se perdio conexión con el servidor');
});
//Los eventos emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola Juan',

}, function (resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});