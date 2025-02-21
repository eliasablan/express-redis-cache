import express from "express";
import axios from "axios";
import { createClient } from "redis";

const app = express();

const client = createClient({
  host: "localhost",
  port: 6379,
});

app.get("/characters", async (req, res) => {
  const reply = await client.get("characters");

  if (reply) return res.json(JSON.parse(reply));

  const { data } = await axios.get("https://rickandmortyapi.com/api/character");

  const savedResult = await client.set("characters", JSON.stringify(data), {
    EX: 60 * 60, // 1 hour to expire
  });
  console.log(savedResult);

  return res.json(data);
});

async function main() {
  client.connect();
  app.listen(3000);
  console.log("Server is running on port 3000");
}

main();
