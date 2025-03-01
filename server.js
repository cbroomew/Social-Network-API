const express = require('express');
const db = require('./config/connect');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json()); // ✅ Ensures JSON request bodies are parsed
app.use(express.urlencoded({ extended: true })); // ✅ Ensures URL-encoded data is parsed
app.use('/api', routes);

// ✅ Add a confirmation message for root
app.get('/', (req, res) => {
  res.send('🚀 Social Network API is running! Use Postman or Insomnia to test the endpoints.');
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
});
