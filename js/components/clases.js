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
    saludoDelMago=()=>{
        return(`Hola, mi nombre es ${this.nombre}, poseo una edad de ${this.edad} años y pertenezco al sexo ${this.sexo}`);
    }
};

export class estudio extends perfilMago {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    queEstaEstudiando=()=>{
        return `Estoy estudiando la carrera de ${this.carrera}`;
    }
};



