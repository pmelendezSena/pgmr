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

request.open('GET','https://jsonplaceholder.typicode.com/users',true)

request.onload = function() {
    var data = JSON.parse(this.response) // thisse refiere al requesten este contexto
    console.log(data)

    for( var i = 0; i < data.length; i++){
        console.log('name    : '+ data[i].name + '\n' + 
        'usrname    : ' + data[i].username +'\n'+ 
        'email      : ' + data[i].email +'\n'+
        'ciudad     :' + data[i].address.city +'\n'+
        'latitud    :' + data[i].address.geo.lat +'\n'+ 
        'longotud   :' + data[i].address.geo.lng +'\n') 
        }
    }

    request.send()  