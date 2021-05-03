const path = require('path');
const express = require('express');
const router = require('express').Router();


const app = express();

// Configurar a pasta public para servir conteúdo estático (funcionar CSS e Imagens)
app.use(express.static("public"));

router.get('/homepage', (request, response) => {
    console.log("GET request on /homepage route");
    // __dirname é uma superglobal, uma variável que sempre está disponível em qualquer escopo do node, e aponta para a pasta do script atual
    //o metodo .join concatena o caminho trazido pelo __dirname com o que eu quero rederizar.
  console.log(__dirname);
  return response.sendFile(path.join(__dirname, "/views/homepage.html"));
});

router.get('/works', (request, response) => {
    console.log("GET request on /works route");
    return response.sendFile(path.join(__dirname, "/views/works.html"));
});

router.get('/about', (request, response) => {
    console.log("GET request on /about route");
    return response.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get('/gallery', (request, response) => {
    console.log("GET request on /gallery route");
    return response.sendFile(path.join(__dirname, "/views/gallery.html"));
});

app.use("/", router);

app.listen(4000, () => console.log("Server is up and running at port 4000"));
