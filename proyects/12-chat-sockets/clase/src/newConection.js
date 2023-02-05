const Contenedor = require('./contenedorArchivo.js')
const contenedorMensajes = new Contenedor('./mensajes.txt')

function configurarSocket(io) {

    io.on('connection', socket => {

        socket.emit('mensaje', 'hola! gracias por conectarte');

        socket.on('mensaje', async mensaje => {
            await contenedorMensajes.guardar(mensaje)
            const mensajes = await contenedorMensajes.recuperar()
            io.sockets.emit('mensajes', mensajes)
        })
    })
}

module.exports = { configurarSocket }