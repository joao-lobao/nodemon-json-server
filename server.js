// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const api = require('./api');
const router = jsonServer.router(api);

server.use(middlewares)
server.use(router)

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, () => {
    console.log('JSON Server is running');

    let resources = Object.keys(api);
    console.log('Resources:');
    resources.forEach(resource => {
        console.log(`http://${HOST}:${PORT}/${resource}`);
    });
});
