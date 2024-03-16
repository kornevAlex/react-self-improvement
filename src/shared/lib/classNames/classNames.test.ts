import { classNames } from './classNames';
describe('classNames', () => {
  test('empty params', () => {
    expect(classNames('')).toBe('');
  });

  test('with only first params', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additions params', () => {
    expect(classNames('someClass', {}, ['expert', 'test'])).toBe('someClass expert test');
  });

  test('with three params', () => {
    expect(classNames('someClass', { hovered: true }, ['expert', 'test'])).toBe('someClass expert test hovered');
  });

  test('with mods false', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['expert', 'test'])).toBe('someClass expert test hovered');
  });

  test('with mods undefined', () => {
    expect(classNames('someClass', { hovered: true }, ['expert', 'test'])).toBe('someClass expert test hovered');
  });

  test('with addition undefined', () => {
    expect(classNames('someClass', { hovered: true }, ['expert', undefined])).toBe('someClass expert hovered');
  });
});
