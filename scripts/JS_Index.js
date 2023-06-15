
let Sandbox_Boton=document.getElementById("Sandbox_Boton");
let Objetivo_Boton=document.getElementById("Objetivo_Boton");
let Pulso_Sandbox=document.getElementById("Pulso_Sandbox");
let Pulso_Objetivo=document.getElementById("Pulso_Objetivo");
let Pulso_Diseno=document.getElementById("Pulso_Diseno");
let Diseno_Boton=document.getElementById("Diseno_Boton");
let Funcionalidad_Boton=document.getElementById("Funcionalidad_Boton");
let Pulso_Funcionalidad=document.getElementById("Pulso_Funcionalidad");
let Cerrar_Index=document.getElementById("Cerrar_Index");



/*Sandbox*/
Sandbox_Boton.addEventListener('click',toggleText);

function toggleText(){

    Pulso_Sandbox.checked=true;
    localStorage.setItem("Pulso_Sandbox", "true");


}
function Onload_Sandbox(){

   let status= localStorage.getItem("Pulso_Sandbox");
   
   
   if(status == "true"){
       Pulso_Sandbox.checked=true;
   }else{
        Pulso_Sandbox.checked=false;
   }
}

/*Objetivo*/
Objetivo_Boton.addEventListener('click',toggleText1);
function toggleText1(){
 
    Pulso_Objetivo.checked=true;
    localStorage.setItem("Pulso_Objetivo", "true");
  
}

function Onload_Objetivo(){

    let status= localStorage.getItem("Pulso_Objetivo");
    
    
    if(status == "true"){
        Pulso_Objetivo.checked=true;
    }else{
        Pulso_Objetivo.checked=false;
    }
 }

 /*Diseno*/
 Diseno_Boton.addEventListener('click',toggleText2);
function toggleText2(){
    Pulso_Diseno.checked=true;
    localStorage.setItem("Pulso_Diseno", "true");
}

function Onload_Diseno(){
    let status= localStorage.getItem("Pulso_Diseno");
    if(status == "true"){
        Pulso_Diseno.checked=true;
    }else{
        Pulso_Diseno.checked=false;
    }
 }
 /*Funcionalidad*/
 Funcionalidad_Boton.addEventListener('click',toggleText3);
function toggleText3(){
    Pulso_Funcionalidad.checked=true;
    localStorage.setItem("Pulso_Funcionalidad", "true");
}

 function Onload_Funcionalidad(){
    let status= localStorage.getItem("Pulso_Funcionalidad");
    if(status == "true"){
        Pulso_Funcionalidad.checked=true;
    }else{
        Pulso_Funcionalidad.checked=false;
    }
 }


/*cerrar*/


/*Cerrar_Index.addEventListener("click", function(){
    window.close();
    localStorage.clear();

});*/
 /* 
var ventanaEmergente;
function redirigirACerrar() {
    window.location.href='pagina-cierre.html';
  }*/

  var ventana;
  function abrirVentana() {
    /*var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'block';*/
    /*ventana=window.open('index.html', '_blank');*/
   window.location.href='index.html';
    localStorage.clear();

  }

     /*function cerrarVentana() {
      /*var ventanaEmergente = document.getElementById('ventanaEmergente');
      ventanaEmergente.style.display = 'none';*/
      /*if (ventana && !ventana.closed) {
        ventana.close();

    }
}*/
  
function mostrarBotoncerrar() {
window.close;
    }

/*window.onbeforeunload = function() {
    localStorage.clear();
  }*/

  

  Onload_Sandbox();
  Onload_Objetivo();
  Onload_Diseno();
  Onload_Funcionalidad();











