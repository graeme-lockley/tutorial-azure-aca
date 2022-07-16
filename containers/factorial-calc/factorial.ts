export const calculate = (value: bigint): bigint => {
  if (value < 0) {
    throw Error(`calculate: value is less than 0: ${value}`);
  }

  let result = 1n;

  let lp = 1n;
  while (lp <= value) {
    result = result * lp;

    lp += 1n;
  }

  return result;
};
