const fetch = require("node-fetch");
const fs = require("fs");

const url =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=roman-emperors&q=&rows=70&sort=index&facet=birth_cty&facet=birth_prv&facet=cause&facet=killer&facet=dynasty&facet=era";

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let romanEmperors = JSON.stringify(res);
    fs.writeFile("./db/data.json", romanEmperors, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
