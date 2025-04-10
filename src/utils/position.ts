const spacing = 20;

export const getPosition = (
  index: number,
  length: number,
): [number, number, number] => {
  const width = (length - 1) * spacing;
  const offset = width / 2;
  const x = index * spacing - offset;
  return [x, 0, 0];
};
