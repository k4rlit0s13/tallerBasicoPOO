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
    static esMayorDeEdad=(edad)=>{
        if (edad>=100) {
            return `Soy mayor de edad contando con ${edad} años de edad, en años mágicos ser menor de edad es desde los 40 años`
        }
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

export class animal{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    hacerSonido=()=>{
        console.log(`${this.nombre} el perrito de Merlin hace un sonido`); 
    }
};

export class perro extends animal{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this.raza=raza;
    }
    moverLaCola=()=>{
        console.log(`${this.nombre} está moviendo la cola`);
    }
};

export class casa{
    constructor(color,area){
        this.color=color;
        this.area=0;
    }
    areaEnCero=()=>{
        return `Poseo unos pergaminos para crear un hogar, comenzaré con un area de valor a ${this.area}, la casa será de color ${this.color}`;
    }
};

export class circulo extends casa{
    constructor(color,area,radio){
        super(color,area);
        this.radio=radio;
    }
    calcularArea=()=>{
        this.area=Math.PI*this.radio**2;
        return this.area;
    }
}