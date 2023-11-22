const mongooseToSwagger = require('mongoose-to-swagger');
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFile = ['../index.js'];

let doc = {
    info: {
        version: "1.0.0",
        title:"API BoardTask",
        description: "Documentação da API do BoardTask."
    },
    serves: [
        {
            url: "http://localhost:4000/",
            description: "Servido localhost"
        },
        {
            url: "https://boardtask-back.vercel.app/",
            description: "Servidor de produção."
        }
    ],
    consumes: ['aplication/json'],
    produces: ['aplication/json']
}

swaggerAutogen(outputFile, endpointsFile, doc).then(() => {
    console.log(`Documentação do swagger gerada encontra-se no arquivo em:${outputFile}`);
    if(process.env.NODE_ENV !== 'production') {
        require("../index.js");
    }
})