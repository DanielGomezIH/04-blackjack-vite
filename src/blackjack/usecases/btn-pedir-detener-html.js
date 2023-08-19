/**
 *
 * @param {ElementoHTML} btnPedir Elemento HTML para pedir carta
 * @param {ElementoHTML} btnDetener Elemento HTML para detener el juego
 * @returns {<Boolean>} Desactiva btnPedir y btnDetener
 */

export const disableBtnPedirDetener = (btnPedir, btnDetener) => {
  return (btnPedir.disabled = true), (btnDetener.disabled = true);
};
