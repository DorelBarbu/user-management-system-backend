import express from 'express';
import { requireAuth } from './middleware/RequireAuth';

const app = express();
const PORT = 8000;

app.use(requireAuth)

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("it works");
});
