const soap = require('soap');
const express = require('express');
const app = express();

const servicio = {
  CalculadoraIMC_Service: {
    CalculadoraIMC_Port: {
      calcularIMC(args) {
        const { nombre, peso, altura } = args;
        const imc = peso / (altura * altura);
        return { mensaje: "¡Hola, " + nombre + "! Tu IMC es " + imc.toFixed(2) };
      }
    }
  }
};

const wsdlXML = require('fs').readFileSync('./hello-service.wsdl', 'utf8');

const server = app.listen(3031, function () {
  const host = '127.0.0.1';
  const port = server.address().port;
  console.log("Servidor iniciado en http://" + host + ":" + port);
});

soap.listen(server, '/bmiCalculator', servicio, wsdlXML, () => {
  console.log("Servicio de cálculo de IMC iniciado.");
});
