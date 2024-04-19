// // client.js
// const soap = require('soap');

// const url = 'http://localhost:3000/hello?wsdl';

// // Cambia el valor del nombre del cliente aquí
// const cliente = {
//   name: 'Juan'
// };

// console.log('Enviando solicitud al servidor...');
// soap.createClient(url, (err, client) => {
//   if (err) {
//     console.error('Error al crear el cliente SOAP:', err);
//     return;
//   }

//   console.log('Cliente SOAP creado con éxito.');
//   console.log('Enviando solicitud al servicio...');
//   client.sayHello(cliente, (err, result) => {
//     if (err) {
//       console.error('Error al enviar la solicitud al servicio:', err);
//       return;
//     }

//     console.log('Respuesta del servicio:', result);
//   });
// });


// client.js
const soap = require('soap');

const url = 'http://localhost:3000/hello?wsdl';

// Cambia el valor del nombre del cliente aquí
const cliente = {
  name: 'Maria Fernanda'
};

soap.createClient(url, (err, client) => {
  if (err) {
    console.error('Error al crear el cliente SOAP:', err);
    return;
  }

  client.sayHello(cliente, (err, result) => {
    if (err) {
      console.error('Error al enviar solicitud al servicio:', err);
      return;
    }

    console.log('Respuesta del servicio:', result.name);
  });
});

