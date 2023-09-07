const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = "warn";

logger.debug("Inciando app en modo de pruebas");
logger.info("la app ha iniciando correctamente");
logger.warn("falta el archivo config de la app");
logger.error("No se pudo acceder al sistema de archivos del equipo");
logger.fatal("app exploto");

let x_1 = 0;
function sumar(x, y){
    return x + y;


}

module.exports = sumar;
