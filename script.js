var btnencriptar = document.querySelector(".btn-encriptar");
var btndesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-imagen");
var contenedorparrafo = document.querySelector(".contenedor-parrafo");
var contenedorsubtitulo = document.querySelector(".contenedor-subtitulo");
var resultado = document.querySelector(".contenedor-resultados");

btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
}
function recuperarTexto(){
    var cajatexto= document.querySelector(".textarea");
    return cajatexto.value
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i =0; i <texto.length; i++){
        if(texto[i] =="a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] =="e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] =="i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] =="o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] =="u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }           
    }
    return textoFinal;
    
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i =0; i <texto.length; i++){
        if(texto[i] =="a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] =="e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] =="i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] =="o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] =="u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }           
    }
    return textoFinal;
}

const btncopiar = document.querySelector(".btn-copiar");
btncopiar.addEventListener("click", function copiar() {
  var contenido = document.querySelector(".contenedor-resultados").textContent;
  var textarea = document.createElement("textarea");
  textarea.value = contenido;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedorparrafo.classList.add("ocultar");
    contenedorsubtitulo.classList.add("ocultar");
}






