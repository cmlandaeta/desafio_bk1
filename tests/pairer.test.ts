import { pairJokes } from '../src/services/pair.service';

describe('pairJokes', () => {
  test('empareja correctamente arrays de mismo tamaño', () => {
    const ch = ['C1', 'C2', 'C3'];
    const d = ['D1', 'D2', 'D3'];
    const res = pairJokes(ch, d);
    expect(res.length).toBe(3);
    expect(res[0]).toHaveProperty('chuck', 'C1');
    expect(res[0]).toHaveProperty('dad', 'D1');
    expect(res[0]).toHaveProperty('combinado');
  });

  test('cuando arrays de distinto tamaño, empareja mínimamente', () => {
    const ch = ['C1', 'C2', 'C3', 'C4'];
    const d = ['D1', 'D2'];
    const res = pairJokes(ch, d);
    expect(res.length).toBe(2);
  });
});
