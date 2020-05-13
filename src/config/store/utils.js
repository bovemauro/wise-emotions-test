/**
 * Create namespaced action for redux logic
 *
 * @param {string} moduleName
 * @param {string} ACTION_ID
 * @returns {string}
 */
export function createNamespacedAction(moduleName, ACTION_ID) {
  return `${moduleName}/${ACTION_ID}`;
}
