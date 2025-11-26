export interface PairedJoke {
  chuck: string;
  dad: string;
  combinado: string;
}

export function pairJokes(chucks: string[], dads: string[]): PairedJoke[] {
  const pairs: PairedJoke[] = [];
  const count = Math.min(chucks.length, dads.length);
  for (let i = 0; i < count; i++) {
    const chuck = chucks[i];
    const dad = dads[i];
    // Combinado: concatenación creativa simple (puedes mejorar)
    const combinado = `${chuck.trim()} Also, ${dad.charAt(0).toLowerCase() === 'a' ? '' : ''}${dad.trim()}`;
    pairs.push({ chuck, dad, combinado });
  }
  return pairs;
}
