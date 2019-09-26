var data='[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'

data=JSON.parse(data);

console.log(data[1].name)

// Ejemplo: recorrer el objeto con iteraciones
for(var i=0; i<data.length; i++) {
    console.log('El personaje '+data[i].name+' es de razac           '+data[i].race+'.')
}

//cargar detos de un archivo
var request = new XMLHttpRequest()

request.open('GET','data.json',true)

request.onload = function() {
    var data = JSON.parse(this.response) // thisse refiere al requesten este contexto
    console.log(data) // Podemos ver los datos
    for( var i = 0; i < data.length; i++){
    console.log(data[i].name + ' is a ' + data[i].race + '.') // Se imprimen llaves y valores en la consola
    }
    }

    request.send()  