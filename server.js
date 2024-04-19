const soap = require('soap');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define un servicio SOAP simple
const service = {
  HelloService: {
    Hello_Port: {
      sayHello: function(args) {
        console.log('Recibida solicitud: ', args);
        const respuesta = 'Hola ' + args.name;
        console.log('Enviando respuesta: ', respuesta);
        return { respuesta: respuesta };
      }
    }
  }
};  

// Crea un servidor SOAP
const xml = require('fs').readFileSync('./hello-service.wsdl', 'utf8');
const server = soap.listen(app, '/hello', service, xml);

// Agregar manejador de eventos para el servidor SOAP
server.on('request', function(request, methodName) {
  console.log(`Solicitud recibida para el método ${methodName}: `, request);
});

app.get('/', (req, res) => {
    res.send('¡Hola! Este es el servidor de chat.');
  });
  
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor SOAP corriendo en el puerto ${PORT}`);
});
