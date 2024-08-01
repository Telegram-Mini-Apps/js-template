/**
 * @param {unknown} elem 
 * @returns {unknown[]}
 */
export function toArray(elem) {
  return Array.isArray(elem) ? elem : [elem];
}