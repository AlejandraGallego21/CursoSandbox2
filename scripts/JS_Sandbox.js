
let Boton_Sandbox1=document.getElementById("Boton_Sandbox1");
let Texto1_Sandbox=document.getElementById("Texto1_Sandbox");

let Boton_Sandbox2=document.getElementById("Boton_Sandbox2");
let Texto2_Sandbox=document.getElementById("Texto2_Sandbox");


let Boton_Sandbox3=document.getElementById("Boton_Sandbox3");
let Texto3_Sandbox=document.getElementById("Texto3_Sandbox");




Boton_Sandbox1.addEventListener('click',toggleText);
Boton_Sandbox2.addEventListener('click',toggleText1);
Boton_Sandbox3.addEventListener('click',toggleText2);
function toggleText(){
    Texto1_Sandbox.classList.toggle('Mostrar_Sandbox1');
}
function toggleText1(){    
    Texto2_Sandbox.classList.toggle('Mostrar_Sandbox2');
}
function toggleText2(){
    Texto3_Sandbox.classList.toggle('Mostrar_Sandbox3');
}



