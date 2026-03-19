const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const SECRET = process.env.JWT_SECRET || 'votre_secret_temporaire';
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Serve static files from the frontend directory
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

const usersPath = process.env.VERCEL ? '/tmp/users.json' : path.join(__dirname, 'users.json');

function readUsers() {
  try {
    if (!fs.existsSync(usersPath)) {
      fs.writeFileSync(usersPath, '[]');
      return [];
    }
    return JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  } catch {
    return [];
  }
}

function writeUsers(users) {
  try {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
  } catch (e) {
    console.error('Erreur écriture users:', e.message);
  }
}

// Routes
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email déjà utilisé' });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ email, password: hashedPassword });
  writeUsers(users);
  const token = jwt.sign({ email }, SECRET, { expiresIn: '2h' });
  res.json({ token, email });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: 'Utilisateur inconnu' });
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ error: 'Mot de passe incorrect' });
  }
  const token = jwt.sign({ email }, SECRET, { expiresIn: '2h' });
  res.json({ token, email });
});

// Middleware d'authentification
function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token manquant' });
  try {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
}

// Route protégée exemple
app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ email: req.user.email });
});

// Catch all route for SPA (local only - Vercel sert les statiques depuis public/)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Serveur backend sur http://localhost:${PORT}`);
    console.log(`Serving frontend from: ${frontendPath}`);
  });
}

module.exports = app;