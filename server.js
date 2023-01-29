const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", async (req, res) => res.json({ msg: "pong" }));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
