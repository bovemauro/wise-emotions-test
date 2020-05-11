export function createNamespacedAction(moduleName, ACTION_ID) {
  return `${moduleName}/${ACTION_ID}`;
}
