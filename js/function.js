
/*
document.getElementById("boton").onclick=function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer script js";
}*/
/*
document.getElementById('boton').addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento";
})

document.getElementById("boton_fondo").onclick=function(){
    console.log("Color de fondo");
    document.body.style.backgroundColor='#905050';
}
 /* a donde sube esto? */

document.getElementById('sumar').addEventListener('click',function(){
    console.log("hola");
    
    let NumeroA = document.getElementById('numero1').value;
    console.log('El valor de NumeroA es '+NumeroA);
    let NumeroB = document.getElementById('numero2').value;
    console.log('El valor de NumeroB es '+ NumeroB);

    let resultado = sumar(parseInt(NumeroA),parseInt(NumeroB));
    console.log('El valor del resultado es '+ resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("ContenedorResultado").style.display = 'block';
 })

 function sumar(a,b){
    return a + b;
 }