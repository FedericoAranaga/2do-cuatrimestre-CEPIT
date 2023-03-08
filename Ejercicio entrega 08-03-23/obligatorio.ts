export class Auto {
     marca : string;
     modelo : string;

    constructor (marca:string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
    };
};

 export class RegistroAutomotor {
    todo (array) {
        console.log('Autos: ', array);
    }; 

    filtroMarca(marca: string, array: Auto[]){
        let marcaEncontrado = array.find(auto => auto.marca === marca);
        if(marcaEncontrado){
            console.log(marca, 'esta disponible en concesionario', marcaEncontrado);
            return marcaEncontrado;
        } else{
            console.log(marca, 'no se encuentra disponible');
            
        }
    }

    filtroModelo(modelo: string, array: Auto[]){
        let modeloEncontrado = array.find(auto => auto.modelo === modelo);
        if(modeloEncontrado){
            console.log(modelo, 'esta disponible en concesionario', modeloEncontrado);
            return modeloEncontrado;
        } else{
            console.log(modelo, 'no se encuentra disponible');
            
        }
    }

    borrarMarca (marca : string, array : Auto[]) {
        let borrarMarca = array.findIndex(auto => auto.marca ==  marca);
        if(borrarMarca >= 0){
            array.splice(borrarMarca, 1);
            console.log('El auto marca', marca, 'fue eliminado correctamente');
            console.log(array);
            return array;
        } else {
            console.log ("Este auto no se encuentra en el concesionario");
        };
    };

    borrarModelo (modelo : string, array : Auto[]) {
        let borrarModelo = array.findIndex(auto => auto.modelo ===  modelo);
        if(borrarModelo >= 0){
            array.splice(borrarModelo, 1);
            console.log('El auto modelo', modelo, 'fue eliminado correctamente');
            console.log(array);
            return array;
        } else {
            console.log ("Este auto no se encuentra en el concesionario");
        };
    };

    darAltaMarca (marca : string, array : Auto[]) {
        let autoAltaMarca = array.findIndex(auto => auto.marca ===  marca);
        if(autoAltaMarca >= 0){
            array.splice(autoAltaMarca, 1);
            console.log('Los autos marca', marca, 'fueron dados de alta correctamente');
            console.log(array);
            return array;
        } else {
            console.log ("Esta marca no se encuentra en el concesionario");
        }; 
    };
    
    darAltaModelo (modelo : string, array : Auto[]) {
        let autoAltaModelo = array.findIndex(auto => auto.modelo === modelo);
        if(autoAltaModelo >= 0){
            array.splice(autoAltaModelo, 1);
            console.log('El auto modelo', modelo, 'fue dado de alta correctamente');
            console.log(array);
            return array;
        } else {
            console.log ("Este modelo no se encuentra en el concesionario");
        }; 
    };

    actualizar (modelo: string, array: Auto[], dato: string) {
        let modeloEncontrado = this.filtroModelo(modelo, array);
        if(modeloEncontrado){
            modeloEncontrado.modelo = dato;
            console.log("El modelo del auto se actualizo a: ", dato);
        } else {
            console.log("Este modelo no se encuentra en el concesionario");
        }
    };
};
 

 var fordMustang = new Auto ("Ford", "Mustang");
 var fordFiesta = new Auto ("Ford","Fiesta");
 var volkswagen = new Auto ("Volkswagen", "Golf");
 var nissan = new Auto ("Nissan", "Silvia");
 var honda = new Auto ("Honda", "Civic");
 var mitsubishi = new Auto ("Mitsubishi", "Eclipse");

 var concesionaria = [fordMustang, fordFiesta, volkswagen, nissan, honda, mitsubishi];

 var registro = new RegistroAutomotor;
 
 //registro.todo(concesionaria); //*LISTADO*
 //registro.borrarMarca("Honda", concesionaria); //*BORRAR TODA LA MARCA*
 //registro.borrarModelo("Fiesta", concesionaria); //*BORRAR UN MODELO DE UNA MARCA*
 //registro.darAltaMarca("Mitsubishi", concesionaria); //*DAR ALTA UNA MARCA*
 //registro.darAltaModelo("Silvia", concesionaria); //*DAR ALTA UNA MODELO*
 //registro.actualizar("Mustang", concesionaria, "F100"); //*ACTUALIZAR*