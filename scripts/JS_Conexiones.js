function ocultarImagen() {
    var imagen = document.querySelector('.Imagen_Conexiones');
    var texto = document.querySelector('.Texto_Conexiones');
    imagen.classList.toggle('oculto');
        if (imagen.classList.contains('oculto')) {
            texto.style.display = 'block';
         } else {
            texto.style.display = 'none';
        }
    }
function mostrarBoton() {
    var Sig = document.getElementById('Sig');
    Sig.style.display = 'block';
    }
function mostrarImagen() {
    var imagenMostrada = document.getElementById('Imagen_Conexiones2');
    var imagen = document.querySelector('.Imagen_Conexiones');
    var Ver = document.querySelector('.Ver');
    imagenMostrada.src = "imagenes/Conexiones2.png" ;
    var texto = document.querySelector('.Texto_Conexiones');
    imagenMostrada.style.display = 'block';
    texto.style.display = 'none';
    imagen.style.display = 'none';
    Ver.style.display = 'none';
    }
function mostrarBoton1() {
    var Ver1 = document.getElementById('Ver1');
    Ver1.style.display = 'block';
    }
function mostrarTexto() {
    var texto1 = document.querySelector('.Texto_Conexiones1');
    var imagenMostrada = document.getElementById('Imagen_Conexiones2');
    texto1.style.display = 'block';
    imagenMostrada.style.display = 'none';
    }
  
function ActivarBoton(){
    var Iniciar = document.getElementById('Iniciar');
    Iniciar.style.display = 'block';

}