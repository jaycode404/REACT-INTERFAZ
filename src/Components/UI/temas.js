import { fondoClaro, fondoOscuro, textoFondoClaro, textoFondoOscuro, contenidoClaro, contenidoOscuro } from "./variables";

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: textoFondoClaro,
    
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: 'invert(100%)',

}