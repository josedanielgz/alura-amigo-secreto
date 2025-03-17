// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []
const componenteLista = document.getElementById("listaAmigos");
const componenteResultado = document.getElementById("resultado");

function agregarAmigo(){
//console.log("Esta función está siendo importada correctamente");
let nombreDeAmigo = document.getElementById("amigo").value;
//alert(`Nombre: ${nombreDeAmigo}´);
listaDeAmigos.push(nombreDeAmigo);
let itemDeComponenteLista = document.createElement("li");
itemDeComponenteLista.appendChild(document.createTextNode(nombreDeAmigo));
componenteLista.append(itemDeComponenteLista);
}

function sortearAmigo(){
let tamanioLimiteSorteo = listaDeAmigos.length;
if (tamanioLimiteSorteo >1){
let indiceElegido = Math.floor(Math.random() * tamanioLimiteSorteo);
let amigoElegido = listaDeAmigos[indiceElegido];
//alert(`El amigo elegido fue: ${amigoElegido}, con índice ${indiceElegido}`);
componenteResultado.innerHTML="";
let itemDeResultado = document.createElement("li");
itemDeResultado.appendChild(document.createTextNode(`El amigo elegido fue: ${amigoElegido}`));
componenteResultado.appendChild(itemDeResultado)

}else {
alert(`No hay suficientes amigos para poder realizar el sorteo, agrega más.`);}
}
