/**
 * Esta funcion devuelve el valor de cada carta de blackJack
 * @param {number} carta 
 * @returns {number} retorna el valor numero de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}