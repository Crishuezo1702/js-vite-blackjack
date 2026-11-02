import { deck } from "../index.js";
/**
 * Esta funcion permite retornar una carta del deck
 * @returns {string}retorna la carta del deck
 */

export const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}