import { perfilMago } from "./components/clases.js";

const mago = new perfilMago('Merlin',150,'masculino');
const mostrarsaludo=document.querySelector('.saludo_de_merlin')
mostrarsaludo.innerHTML=mago.saludar();