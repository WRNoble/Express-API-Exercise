const express = require("express");
const data = require("./data");
const app = express();

//display the roman emperor as the page loads GET
app.get("/", (request, response) => {
  response.json(data);
});

//allow the user to see only one Roman Emperor on a page /emperor/:id
app.get("/emperor/:name", (request, response) => {
  const emperor = data.fields.find(
    (emperor) => emperor.fields.name == request.params.name
  );
  response.json(emperor);
});

//allow for the user to update the api with PUT /emperor/:id

app.listen(3000, () => console.log("Quote API listening on port 3000!"));
