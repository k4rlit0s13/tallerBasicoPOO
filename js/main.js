
import { perfilMago, estudio, animal, perro, Casa, Circulo, Rectangulo } from "./components/clases.js";

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

const colorPaLaCasa = new Casa('marrón');
const mostrarColorDeLaCasa = document.querySelector('.color_casa');
mostrarColorDeLaCasa.innerHTML = colorPaLaCasa.calcularArea();

const areaCirculocasa = new Circulo('marrón', 20); // Se pasa el color 'marrón' correctamente
const mostrarAreaCirculo = document.querySelector('.area_casa_circulo');
mostrarAreaCirculo.innerHTML = areaCirculocasa.calcularArea();

const areaRectanguloCasa = new Rectangulo('marrón', 5, 3); // Se pasa el color 'marrón' correctamente
const mostrarAreaRectangulo = document.querySelector('.area_casa_rectangulo');
mostrarAreaRectangulo.innerHTML = areaRectanguloCasa.calcularArea();
