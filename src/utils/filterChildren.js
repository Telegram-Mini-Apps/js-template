/**
 * @param {import('../types').MaybeChild} children 
 * @returns {import('../types').Child[]}
 */
export function filterChildren(children) {
  return children.filter(c => c !== undefined && c !== null && typeof c !== 'boolean');
}