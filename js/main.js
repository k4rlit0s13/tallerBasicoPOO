
import { perfilMago, estudio, animal, perro, casa} from "./components/clases.js";

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

const colorPaLaCasa=new casa('marrón')
const mostrarColorDeLaCasa=document.querySelector('.area_casa');
mostrarColorDeLaCasa.innerHTML=colorPaLaCasa.areaEnCero();