import app from "./src/app";
import insertUser from "./src/domain/user/UserRepository";
import initalizeDatabase from "./src/loaders/db";

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8000, async () => {
  await initalizeDatabase();
});
