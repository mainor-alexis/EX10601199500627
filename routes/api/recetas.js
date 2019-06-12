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

router.put('/:id', (req, res, next)=>{
  var id = req.params.id;
  var modificarReceta = {};
  var originalReceta = {};
  recetaCollection = recetaCollection.map( (e, i) => {
    if(e.id === id){
      originalReceta = Object.assign({}, e);
      return modificarReceta = Object.assign({}, e, req.body);
    }
    return e;
  });//map
  res.status(200).json(o: originalReceta, m: modificarReceta);
});//put

router.delete('/:id', (req, res, next)=>{
  var id = req.params.id;
  var deleteReceta = {};
  recetaCollection = recetaCollection.filter( (e, i) => {
    if(e.id === id){
      deleteReceta = Object.assign({}, e);
      return false;
    }
    return e;
  res.status(403).json(d: deleteReceta, c:recetaCollection);
});//delete
