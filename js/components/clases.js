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
        if (edad>=40) {
            return `Soy mayor de edad contando con ${edad} años de edad, en años mágicos ser menor de edad es desde los 40 años`
        }else{
            return `No soy mayor de edad ya que cuento con menos de cuarenta años mágicos, poseo actualmente ${edad}`
        }
    }
};

export class estudio extends perfilMago {
    constructor(mago, carrera) {
        super(mago.nombre, mago.edad, mago.sexo);
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

export class Casa {
    constructor(color) {
        this.color = color;
        this.area = 0;
    }
    calcularArea() {
        return `Poseo unos pergaminos para crear un hogar, comenzaré con un área de valor ${this.area}, la casa será de color ${this.color}`;
    }
};

export class Circulo extends Casa {
    constructor(color, radio) {
        super(color); 
        this.radio = radio;
    }
    calcularArea() {
        this.area = Number(Math.PI * this.radio ** 2);
        return `Haciendo cuentas concluyo que el círculo podría tener un área de ${this.area.toFixed(2)} m² con un radio de ${this.radio} m y es de color ${this.color}`;
    }
};

export class Rectangulo extends Casa {
    constructor(color, largo, ancho) {
        super(color); 
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea() {
        this.area = this.largo * this.ancho;
        return `El área del rectángulo de la casa es de ${this.area} m² y es de color ${this.color}`;
    }
};

export class vehiculo{
    constructor(marca,modelo,velocidad){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=velocidad;
    }
    acelerar(){
        const aceleracion=this.velocidad+10; 
        return `Poseo un vehículo que me gusta ir a ${this.velocidad} km/h y cuando acelero le subo 10 km/h quedando una velocidad de ${aceleracion} km/h`
    }
};

