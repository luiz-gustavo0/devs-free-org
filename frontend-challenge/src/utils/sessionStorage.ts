export function setItemSessionStorage<T>(key: string, value: T) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getItemSessionStorage<T>(key: string): T | undefined {
  const item = sessionStorage.getItem(key);

  return item ? (JSON.parse(item) as T) : undefined;
}
