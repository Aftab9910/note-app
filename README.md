# Note Svelte Backend

This is the backend service for the Note Tracker application, built to support the Svelte frontend. It provides RESTful APIs for managing notes.

## Features

- Create, read, update, and delete notes
- Simple and lightweight API
- Designed to work seamlessly with the Svelte frontend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/note-sevelte-backend.git
cd note-sevelte-backend
npm install
```

### Running the Server

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| GET    | /notes       | Get all notes         |
| GET    | /notes/:id   | Get a note by ID      |
| POST   | /notes       | Create a new note     |
| PUT    | /notes/:id   | Update a note by ID   |
| DELETE | /notes/:id   | Delete a note by ID   |

## License

MIT

## Author

[Your Name]
