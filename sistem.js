// El primer "FS" es un objeto el segundo es la libreria 
const fs = require('fs');

fs.writeFile('./texto.txt', 'Hola putitos', 
function(err) {
    if(err){
        console.log(err);
    }
    console.log('Archivo creado')
});
console.log('Espere...');