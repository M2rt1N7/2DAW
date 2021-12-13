

/*
window.onload = iniciar;
const personas = [];

function iniciar(){
const validar = document.getElementById('validar');
 validar.addEventListener('click',btnAgregar);
}

function btnAgregar(){
    let txtNombre = document.getElementById('nombre').value;
    let txtEdad = document.getElementById('edad').value;
    let txtAlta = document.getElementById('alta').value;

    const persona = {
        "nombre": txtNombre,
        "edad": txtEdad,
        "alta": txtAlta
    }
    personas.push(persona);
    mostrarPacientes(); 
}

function mostrarPacientes(){
    let lista = document.getElementById('mostrarPacientes');
    let html = "";
    for(let persona of personas){
        html +='Nombre: '+ persona.nombre + '.<br> '+'Edad: ' + persona.edad + '. <br>'+' '+ persona.alta + '.'+'<br><br>';
    } 
    lista.innerHTML = html;
}*/

window.onload = iniciar;

let cuenta1 = 0;
let cuenta2 = 0;
let cuenta3 = 0;
let cuenta4 = 0;
let btnAtender1 = document.getElementById('atenderCaja1');
let seleccion1 = document.getElementById("caja1");
let btnAtender2 = document.getElementById('atenderCaja2');
let seleccion2 = document.getElementById("caja2");
let btnAtender3 = document.getElementById('atenderCaja3');
let seleccion3 = document.getElementById("caja3");
let btnAtender4 = document.getElementById('atenderCaja4');
let seleccion4 = document.getElementById("caja4");

function iniciar(){   
    añadir();
    eliminar();   
}


function añadir(){
        
    seleccion1.addEventListener('click', function(){
        cuenta1++;
        seleccion1.innerHTML = `${cuenta1} cliente/s.`;
        if(cuenta1 >= 4){
            cuenta1 = 4;
            seleccion1.innerHTML = `llena.`;
            seleccion1.classList.add('lleno');

        }
        if(cuenta1 > 0){
            btnAtender1.classList.remove('hidden');
            
        }
    })
    
    seleccion2.addEventListener('click', function(){
        cuenta2++;
        seleccion2.innerHTML = `${cuenta2} cliente/s.`;
        if(cuenta2 >= 4){
            cuenta2 = 4;
            seleccion2.innerHTML = `llena.`;
            seleccion2.classList.add('lleno');

        }
        if(cuenta2 > 0){
            btnAtender2.classList.remove('hidden');
            
        }
    })

    seleccion3.addEventListener('click', function(){
        cuenta3++;
        seleccion3.innerHTML = `${cuenta3} cliente/s.`;
        if(cuenta3 >= 4){
            cuenta3 = 4;
            seleccion3.innerHTML = `llena.`;
            seleccion3.classList.add('lleno');

        }
        if(cuenta3 > 0){
            btnAtender3.classList.remove('hidden');
            
        }
    })

    seleccion4.addEventListener('click', function(){
        cuenta4++;
        seleccion4.innerHTML = `${cuenta4} cliente/s.`;
        if(cuenta4 >= 4){
            cuenta4 = 4;
            seleccion4.innerHTML = `llena.`;
            seleccion4.classList.add('lleno');

        }
        if(cuenta4 > 0){
            btnAtender4.classList.remove('hidden');
            
        }
    })
}

function eliminar(){
    btnAtender1.addEventListener('click',function(){
        if(cuenta1 >=1){
            cuenta1--;
            seleccion1.innerHTML = `${cuenta1} cliente/s.`;
        }
        if(cuenta1 != 4 ){
            seleccion1.classList.remove('lleno');
        }
        if(cuenta1 === 0){
            btnAtender1.classList.add('hidden');
            seleccion1.innerHTML = `<p>CAJA 1</p>`;
        }
    })
    
    btnAtender2.addEventListener('click',function(){
        if(cuenta2 >=1){
            cuenta2--;
            seleccion2.innerHTML = `${cuenta2} cliente/s.`;
        }
        if(cuenta2 != 4 ){
            seleccion2.classList.remove('lleno');
        }
        if(cuenta2 === 0){
            btnAtender2.classList.add('hidden');
            seleccion2.innerHTML = `<p>CAJA 2</p>`;
        }
    })

    btnAtender3.addEventListener('click',function(){
        if(cuenta3 >=1){
            cuenta3--;
            seleccion3.innerHTML = `${cuenta3} cliente/s.`;
        }
        if(cuenta3 != 4 ){
            seleccion3.classList.remove('lleno');
        }
        if(cuenta3 === 0){
            btnAtender3.classList.add('hidden');
            seleccion3.innerHTML = `<p>CAJA 3</p>`;
        }
    })

    btnAtender4.addEventListener('click',function(){
        if(cuenta4 >=1){
            cuenta4--;
            seleccion4.innerHTML = `${cuenta4} cliente/s.`;
        }
        if(cuenta4 != 4 ){
            seleccion4.classList.remove('lleno');
        }
        if(cuenta4 === 0){
            btnAtender4.classList.add('hidden');
            seleccion4.innerHTML = `<p>CAJA 4</p>`;
        }
    })
}
    
    




