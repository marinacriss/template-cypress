require('dotenv').config();

/**
 * Recupera um env string.
 * @param (string) name env name.
 * @returns {String}
 */
module.exports = function getEnvString(name) {
  const value = process.env[name];
  return value;
};
