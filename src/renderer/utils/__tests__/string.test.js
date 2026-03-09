import { describe, it, expect } from 'vitest';
import { truncate, capitalize, escapeRegex, pluralize } from '../string';

describe('string', () => {
  it('truncate', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hello world', 8)).toBe('hello w…'); // maxLen is total length including suffix
    expect(truncate(null, 5)).toBe('');
  });

  it('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });

  it('escapeRegex', () => {
    expect(escapeRegex('a.b')).toBe('a\\.b');
  });

  it('pluralize', () => {
    expect(pluralize(1, 'item')).toBe('item');
    expect(pluralize(2, 'item')).toBe('items');
    expect(pluralize(0, 'item', 'items')).toBe('items');
  });
});
