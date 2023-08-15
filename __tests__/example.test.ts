import { isEqual } from '../src/compare';

describe('isEqualTests', () => {
test('одиночные одинаковые символы', () => {
  expect(isEqual('a', 'a')).toBe(true);
  expect(isEqual('a', 'b')).toBe(false);
  });
});
// test('Количество символов одинаково, но не равны', () => {
//   expect(isEqual('a', 'a')).toBe(true);
//   expect(isEqual('a', 'b')).toBe(false);
// });
// test('Символы совпадают, но у первого больше символов', () => {
//   expect(isEqual('a', 'a')).toBe(true);
//   expect(isEqual('a', 'b')).toBe(false);
// });
//   test('символы совпадают, но у второго больше символов', () => {
// (isEqual('abb', 'abbb'), false);
//   });
//   test('пустые строки', () => {
// (isEqual('', ''), true);
//   });
//   test('пустые и непустая строка', () => {
// (isEqual('', 'a'), false);
// (isEqual('a', ''), false);
// (isEqual('', 'abc'), false);
//   });
//   test('сложные одинаковые строки', () => {
// (isEqual(complexText, complexText), true);
//   });
//   test('сложные строки различной длины', () => {
//     assertToBe(isEqual(complexText + 'a', complexText), false);
//     assertToBe(isEqual(complexText + '\n', complexText), false);
//     assertToBe(isEqual(complexText + ZERO_CODE_CHAR, complexText), false);
//   });
//   test('несоответствие типа второго аргумента приводит к исключению', () => {
//     assertThrow(() => isEqual('2', 2), 'argument must be type of string');
//     assertThrow(() => isEqual('2', true), 'argument must be type of string');
//     assertThrow(() => isEqual('2', []), 'argument must be type of string');
//     assertThrow(() => isEqual('2', null), 'argument must be type of string');
//     assertThrow(() => isEqual('2'), 'argument must be type of string');
//   });
//   test('несоответствие типа первого аргумента приводит к исключению', () => {
//     assertThrow(() => isEqual(2, '2'), 'argument must be type of string');
//     assertThrow(() => isEqual(true, '1'), 'argument must be type of string');
//     assertThrow(() => isEqual([], '1'), 'argument must be type of string');
//     assertThrow(() => isEqual(null, '1'), 'argument must be type of string');
//     assertThrow(() => isEqual(undefined, '1'), 'argument must be type of string');
//   });