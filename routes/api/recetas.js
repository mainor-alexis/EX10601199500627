var express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');
var recetaCollection = [];

var recetaStruct = {
  id:0,
  receta:'',
  precio:'',
  tipo:'',
  observacion:'',
  estado:''
}

recetaCollection.push(
  Object.assign(
    {},
    recetaStruct,
    {
      id:uuid(),
      receta:'pasta',
      precio:'300',
      tipo:'comida',
      observacion:'como hacer pasta',
      estado:'vendida'
    }
  )
);

router.get('/', (req, res, next)=>{
  res.status(200).json(recetaCollection);
});//get

router.post('/', (req, res, next)=>{
  var nuevaReceta = Object.assign(
    {},
    recetaStruct,
    {id:uuid()},
    req.body
  );
  recetaCollection.push(nuevaReceta);
  res.status(200).json(nuevaReceta);
});//post
