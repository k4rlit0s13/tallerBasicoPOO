
import { perfilMago, estudio } from "./components/clases.js";

const mago = new perfilMago('Merlin', 150, 'masculino');
const materiaDelmago = new estudio('Magia');

const mostrarPerfilDelMago = document.querySelector('.perfil_mago');
mostrarPerfilDelMago.innerHTML = mago.saludoDelMago();

const mostrarCarrera = document.querySelector('.carrera_mago');
mostrarCarrera.innerHTML = materiaDelmago.queEstaEstudiando();