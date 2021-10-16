/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddrA = (address) => address.replaceAll('.', '[.]')

const defangIPaddrB = (address) => address.split('.').join('[.]')