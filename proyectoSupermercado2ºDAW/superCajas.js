
var inicio;


let body = document.querySelector("#body"); // cambiar atributos HTML / CSS
let style_body = window.getComputedStyle(body); // obtener atributos CSS 
let rutaImagenFondoOriginal = style_body.getPropertyValue("background-image");

// hacer dos botones: para guardar estado cajas y para cargar estado en el que se encontraban usando web storage.

function atenderClientes(tipo_accion,numeroCaja) {

    let input_caja;
    let divcaja;
    let stylecaja;
    let mensajes;

    if (numeroCaja == "caja1") {

        let input_caja1 = document.getElementById("CAJA1");  
        input_caja = input_caja1;
        
        // cambiar atributos HTML / CSS
        let divcaja1 = document.querySelector("#divcaja1"); 
        divcaja = divcaja1;
        // obtener atributos CSS 
        let style_divcaja1 = window.getComputedStyle(divcaja1); 
        stylecaja = style_divcaja1;

        mensajes = document.getElementById('mensaje1');

        

    } else if (numeroCaja == "caja2") {    

        let input_caja2 = document.getElementById("CAJA2");
        input_caja = input_caja2;

        let divcaja2 = document.querySelector("#divcaja2");
        divcaja = divcaja2;
        let style_divcaja2 = window.getComputedStyle(divcaja2);
        stylecaja = style_divcaja2;
        
        let div_mensaje = document.getElementById('mensaje2');
        mensajes = div_mensaje;
        
        

    } else if (numeroCaja == "caja3") {    

        let input_caja3 = document.getElementById("CAJA3");
        input_caja = input_caja3;

        let divcaja3 = document.querySelector("#divcaja3");
        divcaja = divcaja3;
        var style_divcaja3 = window.getComputedStyle(divcaja3);
        stylecaja = style_divcaja3;

        let div_mensaje = document.getElementById('mensaje3');
        mensajes = div_mensaje;

    } else if (numeroCaja == "caja4") {    

        let input_caja4 = document.getElementById("CAJA4");
        input_caja = input_caja4;

        let divcaja4 = document.querySelector("#divcaja4");
        divcaja = divcaja4;
        var style_divcaja4 = window.getComputedStyle(divcaja4);
        stylecaja = style_divcaja4;

        let div_mensaje = document.getElementById('mensaje4');
        mensajes = div_mensaje;

    }
         
    // esto aumentaría en uno el valor del input de caja1:
    let total_clientes_caja = parseInt(input_caja.value);

    // vamos a comprobar si el background de la caja está en verde
    if (stylecaja.getPropertyValue("background") == "rgb(144, 238, 144) none repeat scroll 0% 0% / auto padding-box border-box") {
        inicio = new Date();


        // dependiendo de lo que pasemos en la variable "tipo_accion", sumará o restará:
        if (tipo_accion == "poner") {
            if(total_clientes_caja == 4) {
            total_clientes_caja = total_clientes_caja + 0;
            }else {
                total_clientes_caja = total_clientes_caja + 1;
            }
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>" + total_clientes_caja + " cliente/s";

            
        } else if (tipo_accion == "quitar") {
            total_clientes_caja = total_clientes_caja - 1;
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>" + total_clientes_caja + " cliente/s";

          
            
            if (total_clientes_caja <= 0) {
                total_clientes_caja = 0;
                divcaja.style.background = "rgb(220, 20, 60)";
                mensaje_caja.innerHTML = "<br>Caja cerrada";
            } 
        
            
            
        } else {
            alert("mal introducida la acción.");
        }

        input_caja.value = total_clientes_caja;

    } else {

        // cambiando un VALOR CSS de una etiqueta:
        if (total_clientes_caja != 0 || tipo_accion == 'poner') {
            divcaja.style.background = "rgb(144, 238, 144)";
            let mensaje_caja = mensajes;
            mensaje_caja.innerHTML = "<br>Caja abierta";
        }

    }


    if (total_clientes_caja == 4) {
        alert("Caja llena.");
        let fin = new Date();
        let tiempoTranscurrido = (fin-inicio)/1000; //en milisegundos
        alert('tiempo transcurrido:' + tiempoTranscurrido);
    }


   
}

let input_caja1 = document.getElementById("CAJA1");
        input_caja = input_caja1;

        // cambiar atributos HTML / CSS
        let divcaja1 = document.querySelector("#divcaja1"); 
        divcaja = divcaja1;
        // obtener atributos CSS 
        var style_divcaja1 = window.getComputedStyle(divcaja1); 
        stylecaja = style_divcaja1;

        mensajes = document.getElementById('mensaje1');

document.getElementById("divcaja1").oncontextmenu = function() { 

    atenderClientes('quitar', 'caja1'); 

};

document.getElementById("divcaja2").oncontextmenu = function() { 

    atenderClientes('quitar', 'caja2'); 

};

document.getElementById("divcaja3").oncontextmenu = function() { 

    atenderClientes('quitar', 'caja3'); 

};

document.getElementById("divcaja4").oncontextmenu = function() { 

    atenderClientes('quitar', 'caja4'); 

};



//MODO NOCHE


  function modoNoche(){

    // cambiar atributos HTML / CSS
    let body = document.getElementById('body'); 
     // obtener atributos CSS 
    var style_body = window.getComputedStyle(body);

    if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

        let body = document.getElementById('body'); 
        let cabecera = document.getElementById('titulo');
        cabecera.style.color = '#ffffff';
        body.style.backgroundImage='url(noche.jpg)';
    
        
    } else {
        let cabecera = document.getElementById('titulo');
        cabecera.style.color = 'rgb(0, 91, 211)'
        body.style.backgroundImage = 'url(super.jpg)';

    }  

  }

  // BOTON BORRAR FONDO
    function ocultarFondo() {
        
        let body = document.getElementById('body'); // cambiar atributos HTML / CSS
        var style_body = window.getComputedStyle(body); // obtener atributos CSS 
        
        // comprobamos si la imagen original está activa / mostrándose todavía:
        if(style_body.getPropertyValue("background-image") == rutaImagenFondoOriginal){

            body.style.backgroundImage='url()';

        } else {

            body.style.backgroundImage = 'url(super.jpg)';
        }  
        
                   
    }








  
