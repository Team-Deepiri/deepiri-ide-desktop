/**
 * Keybinding definitions for Keyboard Shortcuts panel and runtime.
 */
export const KEYBINDING_CATEGORIES = {
  File: 'File',
  View: 'View',
  Editor: 'Editor',
  Visual: 'Visual',
  Task: 'Task'
};

export const DEFAULT_KEYBINDINGS = [
  { command: 'Create anything (launcher)', keys: 'Ctrl+Shift+N', category: 'File' },
  { command: 'Open Folder', keys: 'Ctrl+O', category: 'File' },
  { command: 'New File', keys: 'Ctrl+N', category: 'File' },
  { command: 'Save', keys: 'Ctrl+S', category: 'File' },
  { command: 'Command Palette', keys: 'Ctrl+Shift+P', category: 'View' },
  { command: 'Quick Open (Go to File)', keys: 'Ctrl+P', category: 'View' },
  { command: 'Toggle Primary Sidebar', keys: 'Ctrl+B', category: 'View' },
  { command: 'Toggle Panel', keys: 'Ctrl+J', category: 'View' },
  { command: 'Go to Line', keys: 'Ctrl+G', category: 'View' },
  { command: 'Go to Symbol in Editor', keys: 'Ctrl+Shift+O', category: 'View' },
  { command: 'Focus Search in Files', keys: 'Ctrl+Shift+F', category: 'View' },
  { command: 'Find in File', keys: 'Ctrl+F', category: 'Editor' },
  { command: 'Replace in File', keys: 'Ctrl+H', category: 'Editor' },
  { command: 'Format Document', keys: 'Alt+Shift+F', category: 'Editor' },
  { command: 'Zoom In', keys: 'Ctrl+Plus', category: 'View' },
  { command: 'Zoom Out', keys: 'Ctrl+Minus', category: 'View' },
  { command: 'Reset Zoom', keys: 'Ctrl+0', category: 'View' },
  { command: 'Visual: Duplicate node', keys: 'Ctrl+D', category: 'Visual' },
  { command: 'Visual: Copy / Paste', keys: 'Ctrl+C / Ctrl+V', category: 'Visual' },
  { command: 'New Task', keys: 'Command palette', category: 'Task' }
];
