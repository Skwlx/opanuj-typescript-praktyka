type allowedNumber = 0 | 1;

type allowedFormat = `${allowedNumber}${allowedNumber}${allowedNumber}`;

export type Code = `${allowedFormat}-${allowedFormat}-${allowedFormat}`;

export function codeToDecimal(code: Code) {
  return code
    .split('-')
    .map((num) => parseInt(num, 2))
    .join('');
}
