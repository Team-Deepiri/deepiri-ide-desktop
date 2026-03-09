/**
 * Map file extension to Monaco/editor language id.
 * Shared so components and tests can resolve language without importing the full editor.
 */
const LANGUAGE_MAP = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  json: 'json',
  md: 'markdown',
  html: 'html',
  css: 'css',
  scss: 'scss',
  yaml: 'yaml',
  yml: 'yaml',
  sh: 'shell',
  bash: 'shell',
  rs: 'rust',
  go: 'go',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  h: 'c',
  hpp: 'cpp'
};

export function getLanguage(filename) {
  const ext = (filename || '').split('.').pop() || '';
  return LANGUAGE_MAP[ext] || 'plaintext';
}
