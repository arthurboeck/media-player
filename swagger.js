const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./controller/playlist-controller.js'];

const doc = {
    info: {
        title: 'Media Player API',
        description: 'API de Media Player criada na disciplina de Arquitetura BackEnd da Especializacao em Arquitetura de Software Distribuido da PUCMG',
        version: '1.0.0',
    },
    host: '',
    basePath: '',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index') // Project's root file
})