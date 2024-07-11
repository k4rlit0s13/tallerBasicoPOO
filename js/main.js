
import { perfilMago, estudio, animal, perro, Casa, Circulo, Rectangulo, vehiculo, empleado, gerente } from "./components/clases.js";

const mago = new perfilMago('Merlin', 150, 'masculino');

const mostrarPerfilDelMago = document.querySelector('.perfil_mago');
mostrarPerfilDelMago.innerHTML = mago.saludoDelMago();

const mostrarCarrera = document.querySelector('.carrera_mago');
const carrera = new estudio(mago, 'Magia sanadora');
mostrarCarrera.innerHTML = carrera.queEstaEstudiando();

const mostrarMayorDeEdad = document.querySelector('.mayor_de_edad_mago')
mostrarMayorDeEdad.innerHTML = perfilMago.esMayorDeEdad(mago.edad);

const elAnimal = new perro('toby', 8, 'labrador');
elAnimal.hacerSonido();
elAnimal.moverLaCola();


const colorPredeterminado = 'marrón'; // Definir el color predeterminado

const colorPaLaCasa = new Casa(colorPredeterminado);
const mostrarColorDeLaCasa = document.querySelector('.color_casa');
mostrarColorDeLaCasa.innerHTML = colorPaLaCasa.calcularArea();

const areaCirculocasa = new Circulo(colorPredeterminado, 20);
const mostrarAreaCirculo = document.querySelector('.area_casa_circulo');
mostrarAreaCirculo.innerHTML = areaCirculocasa.calcularArea();

const areaRectanguloCasa = new Rectangulo(colorPredeterminado, 5, 3);
const mostrarAreaRectangulo = document.querySelector('.area_casa_rectangulo');
mostrarAreaRectangulo.innerHTML = areaRectanguloCasa.calcularArea();


const vehiculoDelMago = new vehiculo('gorgorean', 'bronce', 10);
const mostrarVehiculoAceleracion = document.querySelector('.vehiculo_del_mago');
mostrarVehiculoAceleracion.innerHTML = vehiculoDelMago.acelerar();

const mostrarVehiculoMPH = document.querySelector('.velocidad_en_mph');
const velocidadMPH = vehiculo.convertirKmHEnMph(vehiculoDelMago.velocidad);
mostrarVehiculoMPH.innerHTML = velocidadMPH;

const empleadoDeMerlin = new empleado('frodo', 30, 12);
const mostrarEmpleadoDeMerlin = document.querySelector('.empleado_de_Merlin');
mostrarEmpleadoDeMerlin.innerHTML = empleadoDeMerlin.calcularSalarioAnual();

const gerenteMerlin = new gerente(empleadoDeMerlin, 'magia');
const mostrargerenteMerlin = document.querySelector('.gerente');
mostrargerenteMerlin.innerHTML = gerenteMerlin.calcularSalarioAnual();