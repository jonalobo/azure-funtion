module.exports = async function (context, req) {
    //Acá creo una constante que en cada petición get tendrá un valor entero entre 0 y 5.
    const numero = Math.round(Math.random()*5)
    //La siguiente constante va a contener una lista de mensajes, los cuales basados en la función que se va a jecutar muestren uno de los mensajes contenidos en la lista.
    const mensajes = ['Hola a todos','Piensa en grande','No te detengas!','Sé tu mejor versión','Bienvenidos a SOZU','Gran equipo!!'] 

    //El mensaje enviado al cliente 
    const mensajeACliente = mensajes[numero]

    context.res = {
        status: 201,
        body: mensajeACliente
    };
}
