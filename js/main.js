
import { perfilMago, estudio, animal, perro} from "./components/clases.js";

const mago = new perfilMago('Merlin', 150, 'masculino');
const materiaDelmago = new estudio('Magia');

const mostrarPerfilDelMago = document.querySelector('.perfil_mago');
mostrarPerfilDelMago.innerHTML = mago.saludoDelMago();

const mostrarCarrera = document.querySelector('.carrera_mago');
mostrarCarrera.innerHTML = materiaDelmago.queEstaEstudiando();

const mostrarMayorDeEdad=document.querySelector('.mayor_de_edad_mago')
mostrarMayorDeEdad.innerHTML=perfilMago.esMayorDeEdad(mago.edad);

const elAnimal= new perro('toby',8,'labrador');
elAnimal.hacerSonido();
elAnimal.moverLaCola();
