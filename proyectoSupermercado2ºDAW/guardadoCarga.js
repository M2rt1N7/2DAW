

class Guardadocarga{

    constructor() {

        
    }
      
    guardarDatos() {

        let datos_caja1 = document.getElementById("CAJA1");  
        let datos_caja2 = document.getElementById("CAJA2");  
        let datos_caja3 = document.getElementById("CAJA3");
        let datos_caja4 = document.getElementById("CAJA4");
    
        
        let cajaValue1 = datos_caja1.value;  
        let cajaValue2 = datos_caja2.value;
        let cajaValue3 = datos_caja3.value;
        let cajaValue4 = datos_caja4.value;
    
        let cajasValue_json = {"caja1" : cajaValue1, "caja2" : cajaValue2, "caja3" : cajaValue3, "caja4" : cajaValue4};
    
        let cajasValue_str = JSON.stringify(cajasValue_json);
    
        localStorage.setItem("cajas", cajasValue_str);
    
    }
    
    cargarEstado() {
        
        let cajasValue_str = localStorage.getItem("cajas");
        let cajasValue_json = JSON.parse(cajasValue_str);
            
        let contador = 1;
    
        for (let key in cajasValue_json) {
    
            let value = cajasValue_json[key];
    
            let divcaja = document.getElementById("divcaja" + contador); // cambiar atributos HTML / CSS
            divcaja.style.background = "rgb(144, 238, 144)";
    
            let div_mensaje = document.getElementById(`mensaje` + contador);
            div_mensaje.innerHTML = "<br>" + value + " cliente/s";
    
            let datos_caja = document.getElementById("CAJA" + contador);  
            datos_caja.value = value;
    
            if (cajasValue_json[key] <= 0) {
                divcaja.style.background = "rgb(220, 20, 60)";
                div_mensaje.innerHTML = "<br>Caja cerrada";
            }  
    
            contador++;
        }
    
    }

} 

let guardadoCarga = new Guardadocarga();



