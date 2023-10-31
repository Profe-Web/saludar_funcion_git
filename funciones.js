
/**
 * FUNCION ARRANQUE
 * Arranca el programa cuando apretamos el botón de HTML
 * pide saludos 1 y 2
 * @param {string} saludo1
 * @param {string} saludo2
 * @param {string} saludo
 * este saludo recoge el que envia la función
 * Se imprime en pantalla
 */
function arranque() {
  //Enviando variable como parametro
  let saludo1 = prompt("Entra un saludo");
  let saludo2 = prompt("Entra un nombre");

  /**
   * FUNCION SALUDAR
   * Combina un nombre y un saludo. Entrados por usuario
   * @author Albert profe
   * @version 2.2
   * @since 31 Nov 2023
   * @param {string} saludo
   * @param {string} nombre
   * @returns {string} frase compuesta con estos dos parametros
   * @link (mi cuenta de github tiene mas info)
   * @
   */
  function saludar(saludo, nombre) {
    return saludo + " " + nombre;
  }

  let saludo = saludar(saludo1, saludo2);
  document.write(saludo);
}
