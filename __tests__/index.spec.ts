import { concat } from '../src';

test('basic 1', () => {
  const a = [1, 2, 3, 4] as const
  const b = [5, 6, 7, 8] as const
  const c = concat(a, b);
  const d: [1, 2, 3, 4, 5, 6, 7, 8] = c

  expect(d).toStrictEqual([...a, ...b]);
});

test('basic 2', () => {
  const a = [1, 2, 3, 4] as const
  const b: string[] = ['hello', 'world']
  const c = concat(a, b);
  const d: [1, 2, 3, 4, ...string[]] = c

  expect(d).toStrictEqual([...a, ...b]);
});

test('basic 3', () => {
  const a: string[] = ['hello', 'world']
  const b = [5, 6, 7, 8] as const
  const c = concat(a, b);
  const d: (string | 5 | 6 | 7 | 8)[] = c

  expect(d).toStrictEqual([...a, ...b]);
});
