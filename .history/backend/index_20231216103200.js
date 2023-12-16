const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "894118cd-0ac4-4c96-a4d6-78b533be5489"}}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.me).json(e.response.data);
  }
});

app.listen(3001);