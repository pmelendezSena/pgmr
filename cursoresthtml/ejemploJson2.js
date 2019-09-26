/*
var data='[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'

data=JSON.parse(data);

console.log(data[1].name)

// Ejemplo: recorrer el objeto con iteraciones
for(var i=0; i<data.length; i++) {
    console.log('El personaje '+data[i].name+' es de razac           '+data[i].race+'.')
}*/

//cargar detos de un archivo
var request = new XMLHttpRequest()

request.open('GET','https://api.mercadolibre.com/users/226384143/',true)

request.onload = function() {
  //  var data = JSON.parse(this.response) // thisse refiere al requesten este contexto
  
    console.log(request.response) // Podemos ver los datos
    }

    request.send()  