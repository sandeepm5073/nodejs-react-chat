const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const req = await.axios(re)
  } catch (error) {
    
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);