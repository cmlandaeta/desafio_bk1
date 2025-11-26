// LCM de una lista de enteros y +1 simple
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function lcmTwo(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a / gcd(a, b)) * b);
}

export function lcmList(nums: number[]): number {
  if (!nums.length) return 0;
  return nums.reduce((acc, n) => lcmTwo(acc, n), nums[0]);
}

export function increment(number: number): number {
  return number + 1;
}
