# Deepiri IDE

AI-Powered Digital Productivity IDE - Desktop Application

## Overview

Deepiri Desktop IDE is a native desktop application that provides an IDE-type environment for task management and gamified productivity. It connects to the Deepiri backend services to provide:

- Task management with AI-powered classification
- Challenge generation and gamification
- Real-time progress tracking
- Code editor integration
- File management
- Project organization

## Technology Stack

- **Electron** - Cross-platform desktop framework
- **Node.js** - Backend integration
- **React/Vue** (optional) - UI framework for renderer process
- **Socket.IO Client** - Real-time updates

## Features

### Core Features
- **Task Management**: Create, edit, and manage tasks
- **AI Task Classification**: Automatically classify tasks using NLP
- **Challenge Generation**: Convert tasks into gamified challenges
- **Code Editor**: Built-in code editor for coding tasks
- **File Explorer**: Manage project files
- **Real-time Updates**: WebSocket connection for live updates
- **Gamification Dashboard**: Points, badges, leaderboards

### IDE Features
- Multi-file editing
- Syntax highlighting
- Code completion
- Terminal integration (optional)
- Git integration (optional)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Deepiri backend services running (see `../deepiri/README.md`)

### Installation

```bash
# Install dependencies
npm install

# Start in development mode
npm run dev

# Build for production
npm run build

# Build for specific platform
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## Configuration

### Environment Variables

Create `.env` file:

```env
API_URL=http://localhost:5000/api
AI_SERVICE_URL=http://localhost:8000
PYAGENT_API_KEY=your_api_key_here
```

### API Connection

The desktop IDE connects to:
- **Backend API**: `http://localhost:5000/api` (default)
- **AI Service**: `http://localhost:8000` (default)
- **WebSocket**: `ws://localhost:5000` (for real-time updates)

## Project Structure

```
desktop-ide-deepiri/
├── src/
│   ├── main.js          # Electron main process
│   ├── preload.js       # Preload script (bridge)
│   └── renderer/        # Renderer process (UI)
│       ├── index.html
│       ├── components/
│       ├── pages/
│       └── styles/
├── assets/              # Icons and assets
├── package.json
└── README.md
```

## Development

### Running in Development

```bash
npm run dev
```

This starts Electron with dev tools enabled and connects to local backend services.

### Building

```bash
# Build for current platform
npm run build

# Build for specific platform
npm run build:win
npm run build:mac
npm run build:linux
```

## API Integration

### Task Classification

```javascript
const result = await window.electronAPI.classifyTask(
  'Write a report on AI trends',
  'Research and write a comprehensive report'
);
```

### Challenge Generation

```javascript
const challenge = await window.electronAPI.generateChallenge({
  title: 'Write a report',
  description: 'Research and write a comprehensive report',
  type: 'creative',
  estimatedDuration: 60
});
```

### Backend API Calls

```javascript
const result = await window.electronAPI.apiRequest({
  method: 'POST',
  endpoint: '/tasks',
  data: { title: 'New Task', description: 'Task description' }
});
```

## Features in Development

- [ ] Code editor with syntax highlighting
- [ ] File explorer
- [ ] Terminal integration
- [ ] Git integration
- [ ] Project templates
- [ ] Theme customization
- [ ] Plugin system

## Integration with Backend

The desktop IDE uses the same backend services as the web app:
- User authentication
- Task management
- Challenge generation
- Gamification features
- Analytics

All API endpoints are shared between web and desktop versions.

## Troubleshooting

### Connection Issues
- Ensure backend services are running
- Check API_URL and AI_SERVICE_URL in .env
- Verify firewall settings

### Build Issues
- Clear node_modules and reinstall
- Check Electron version compatibility
- Verify build tools are installed

## License

MIT

## Team

See `../deepiri/README_AI_TEAM.md` and `../deepiri/README_BACKEND_TEAM.md` for team responsibilities.

# deepiri-desktop
