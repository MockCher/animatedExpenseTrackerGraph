/**
 * Returns a random number give a min and/or a max value)
 * @param {number} min - default: 0
 * @param {number} max - default: 50
 * @returns {number}
 */
const getRandomNumber = (min: number = 0, max: number = 50): number => Math.floor(Math.random() * (max - min)) + min 
 
 export default getRandomNumber