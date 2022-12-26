
/*
document.getElementById("boton").onclick=function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer script js";
}*/

document.getElementById('boton').addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento";
})

document.getElementById("boton_fondo").onclick=function(){
    console.log("Color de fondo");
    document.body.style.backgroundColor='#905050';
}
 /* a donde sube esto? */