const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let notes = [
  {
    id: 1,
    title: "Water Bottle",
    content: "It hydrates you and keeps you healthy",
    createdAt: new Date().toISOString()
  }
];

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  const note = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString()
  };
  notes.push(note);
  res.status(201).json(note);
});

// Update a note
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found.' });
  }
  notes[index] = { ...notes[index], title, content };
  res.json(notes[index]);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Note not found.' });
  }
  notes.splice(index, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});