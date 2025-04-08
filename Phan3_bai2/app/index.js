const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://mongo:27017';
const DB_NAME = 'mydb';

app.get('/', async (req, res) => {
  const client = new MongoClient(MONGO_URL);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const data = await db.collection('items').find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
