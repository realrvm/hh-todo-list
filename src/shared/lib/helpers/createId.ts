export function createId() {
  return crypto.randomUUID().split("-")[0];
}
