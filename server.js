const path = require("path");
const express = require('express');

const app = express();
const port = process.env.PORT || 3100;

//connection to localhost at port 3100
app.listen(port, () => console.log('listening at 3100'));
// localhost use the 'public' repertory 
app.use(express.static('public'));
app.use(express.json({ limit: '20mb' }));

var nombre = [0,0,0,0,0,0,0,0,0]

app.post('/test/:id', (request, response) => {
const {id} = request.params;
id = parseInt(id);
const valeur = request.body;
nombre[id] = parseInt(valeur);
  console.log(nombre)
response.send({
  test :'test',
  valeur:valeur.value
})//fin response.json
});//fin app.POST

app.get('/nombre/:id', (request, response) => {
const {id} = request.params;
  id = parseInt(id);
  const val = nombre[id]
  console.log(val)
response.send({
nombre: val
  
})//fin response.json
});//fin app.POST
