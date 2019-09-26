var request= new XMLHttpRequest();

request.open('GET', 
             'https://ghibliapi.herokuapp.com/films', true);
request.onload=function() {
  var data=JSON.parse(this.response);

  data.forEach(movie => {
      console.log(movie.title);
   })
}
request.send();

const app = document.getElementById('root');
//console.log(app);
const logo = document.createElement('img')
//console.log(logo);
logo.src = 'logo.png';
console.log(logo);

const container=document.createElement('div')
container.setAttribute('class', 'container') //atributos a la etiqueta html
//(crea el atributo class y le asigna el valor container que esta en la hoja de estilo)

app.appendChild(logo)
app.appendChild(container)

