/**
 *
 * @param {Number} puntosComputadora Puntos de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @returns {Alert<String>} Retorna una alerta que determina el ganador
 */

export const determinarGanador = (puntosComputadora, puntosMinimos) => {
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
