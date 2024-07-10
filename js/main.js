
import { perfilMago, estudio, animal, perro, casa, circulo} from "./components/clases.js";

const mago = new perfilMago('Merlin', 150, 'masculino');

const mostrarPerfilDelMago = document.querySelector('.perfil_mago');
mostrarPerfilDelMago.innerHTML = mago.saludoDelMago();

const mostrarCarrera = document.querySelector('.carrera_mago');
const carrera = new estudio(mago,'Magia sanadora');
mostrarCarrera.innerHTML = carrera.queEstaEstudiando();

const mostrarMayorDeEdad=document.querySelector('.mayor_de_edad_mago')
mostrarMayorDeEdad.innerHTML=perfilMago.esMayorDeEdad(mago.edad);

const elAnimal= new perro('toby',8,'labrador');
elAnimal.hacerSonido();
elAnimal.moverLaCola();

const laCasaDelMago=new circulo('marrón',20)
const mostrarColorDeLaCasa=document.querySelector('.color_casa');
mostrarColorDeLaCasa.innerHTML=laCasaDelMago.areaEnCero();

const mostrarAreaDeLaCasa=document.querySelector('.area_casa')
mostrarAreaDeLaCasa.innerHTML=laCasaDelMago.calcularArea();