

//cargar detos de url
var request = new XMLHttpRequest()

request.open('GET','https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49',true)



request.onload = function() {
    var data = JSON.parse(this.response) // thisse refiere al requesten este contexto
    console.log(data)
/*
    for( var i = 0; i < data.length; i++){
        console.log('name    : '+ data[i].name + '\n' + 
        'usrname    : ' + data[i].username +'\n'+ 
        'email      : ' + data[i].email +'\n'+
        'ciudad     :' + data[i].address.city +'\n'+
        'latitud    :' + data[i].address.geo.lat +'\n'+ 
        'longotud   :' + data[i].address.geo.lng +'\n') 
        }
    */
}
    request.send()  
