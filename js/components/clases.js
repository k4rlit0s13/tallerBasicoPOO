//      FORMULA CLASE

// class NombreDeLaClase {
//     constructor(parametro1, parametro2, ...) {
//         this.propiedad1 = parametro1;
//         this.propiedad2 = parametro2;
//     }
//     metodo1() {
//     }
// }

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

export class perfilMago {
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar=()=>{
        return(`Hola, mi nombre es ${this.nombre}, poseo una edad de ${this.edad} años y pertenezco al sexo ${this.sexo}`);
    }
};

