const express = require('express');
const soap = require('soap');

const wsdlUrl = 'http://localhost:3031/bmiCalculator?wsdl';
const clientArgs = { nombre: "Juan", peso: 70, altura: 1.75 };

soap.createClient(wsdlUrl, function(err, client) {
  if (err) {
    console.error("Error al crear cliente SOAP:", err);
  } else {
    client.calcularIMC(clientArgs, function(err, response) {
      if (err) {
        console.error("Error al llamar al servicio:", err);
      } else {
        console.log("Respuesta del servicio:", response);
      }
    });
  }
});
