// console.log("Hola mundo desde el archivo");

{
//var x= -9;
//x >= 0 ? console.log(x) : console.log(-x);

//x = Math.PI;
//cx = Math.cos(x);
//console.log(cx);
}

function nombre(numero){
    if(numero>=0)
    {
       n= numero;
    }else
    {
       n= numero*(-1);
    }
    return  console.log(n);
}


function fibonacci(f){
    if (f==0)  
        return 0;     
    else{
       if (f==1)
          return 1;
        else
        return fibonacci(f-1)+fibonacci(f-2);
        }
   }


