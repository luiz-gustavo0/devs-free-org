export const formatNumber = (value: number | bigint): string => {
  return value.toLocaleString('pt-BR', {
    notation: 'compact',
    compactDisplay: 'short',
  });
};
