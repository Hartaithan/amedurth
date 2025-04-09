const spacing = 20;

export const getPosition = (
  id: number,
  length: number,
): [number, number, number] => {
  const index = id - 1;
  const width = (length - 1) * spacing;
  const offset = width / 2;
  const x = index * spacing - offset;
  return [x, 0, 0];
};
