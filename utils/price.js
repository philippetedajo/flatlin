/**
 * given a number and return it with to decimal digit
 * @param n
 * @returns {string | number} number
 */

export const price = (n) => {
  if (n) {
    let price = parseFloat(n).toFixed(2);
    return price + " $";
  } else {
    return "Coming soon";
  }
};
