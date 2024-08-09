const condicionEncriptar= document.querySelector(".btn-encriptar");
const textoEncriptar= document.querySelector(".texto");
const aviso= document.querySelector(".texto-condicion");
const textArea = document.querySelector('.evaluar');
const contenedorAlado = document.querySelector(".caja-encriptado img");
const btnCopiar = document.querySelector(".btn-copiar");



function encriptar(){

    let texto= textoEncriptar.value;
    let caracteres = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*+()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ");
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");

    if (texto ==""){
        alert("Debe Ingresar el Texto");
        aviso.style.background= "#0a3871";
        aviso.style.color= "#c3c3c9";
        aviso.textContent= "El area de Texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
        
    }
    else if (texto !== caracteres){
        alert("Debe Ingresar el Texto Correctamente");
        aviso.style.background= "#0a3871";
        aviso.style.color= "#c3c3c9";
        aviso.style.fontsize="100"
        aviso.textContent= "NO debe ingresar Acentos ni Caracteres Especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }
    else if(texto !== texto.toLowerCase()){
        alert("No se permiten Mayusculas");
        aviso.style.background= "#0a3871";
        aviso.style.color= "#c3c3c9";
        aviso.textContent= "El Texto no debe tener Letras Mayusculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    } else {
        texto= texto.replace(/"e"/gi, "enter")
        texto= texto.replace(/i/gi, "ines")
        texto= texto.replace(/a/gi, "ai")
        texto= texto.replace(/o/gi, "ober")
        texto= texto.replace(/u/gi, "ufat");
        alert("Texto Encritado con Exito!!");

        textArea.innerHTML = texto;
        btnCopiar.style.visibility= "inherit";
        tituloMensaje.textContent =" ";
        parrafo.textContent= "";
        contenedorAlado.remove();
   };
 
}

/* Boton desencriptar */

function desencriptar(){
    let texto= textoEncriptar.value;
    let caracteres = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*+()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ");
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");

if (texto ==""){
    alert("Debe Ingresar el Texto");
    aviso.style.background= "#0a3871";
    aviso.style.color= "#c3c3c9";
    aviso.textContent= "El area de Texto no debe estar vacio";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },2000);
    
}
else if (texto !== caracteres){
    alert("Debe Ingresar el Texto Correctamente");
    aviso.style.background= "#0a3871";
    aviso.style.color= "#c3c3c9";
    aviso.style.fontsize="100"
    aviso.textContent= "NO debe ingresar Acentos ni Caracteres Especiales";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },2000);
}
else if(texto !== texto.toLowerCase()){
    alert("No se permiten Mayusculas");
    aviso.style.background= "#0a3871";
    aviso.style.color= "#c3c3c9";
    aviso.textContent= "El Texto no debe tener Letras Mayusculas";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },2000);
} else {
    texto= texto.replace(/enter/gi, "e")
    texto= texto.replace(/ines/gi, "i")
    texto= texto.replace(/ai/gi, "a")
    texto= texto.replace(/ober/gi, "o")
    texto= texto.replace(/ufat/gi, "u")
    alert("Mensaje Desencriptado con Exito!!");

    textArea.innerHTML = texto;
    btnCopiar.style.visibility= "inherit";
    tituloMensaje.textContent =" ";
    parrafo.textContent= "";
    contenedorAlado.remove();

    
}   };
    

function copiar(){
    let contenido = textArea;
    contenido.select();
    navigator.clipboard.writeText(textArea.value).then(() =>{
        console.log('guardado en portapapeles');
    })
}
     
function reset(e) { 
    if (e.target.value.length === 0) {
        contenedorAlado.classList.remove('active')
    }
 }