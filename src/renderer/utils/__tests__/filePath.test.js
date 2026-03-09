import { describe, it, expect } from 'vitest';
import { basename, dirname, extname } from '../filePath';

describe('filePath', () => {
  it('basename', () => {
    expect(basename('/a/b/c.js')).toBe('c.js');
    expect(basename('c.js')).toBe('c.js');
  });

  it('dirname', () => {
    expect(dirname('/a/b/c.js')).toBe('a/b');
  });

  it('extname', () => {
    expect(extname('/a/b/c.js')).toBe('.js');
    expect(extname('noext')).toBe('');
  });
});
