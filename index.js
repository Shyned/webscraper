const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");
const url = `https://www.rd.com/article/ghost-stories/`;
const app = express();
axios(url)
  .then((response) => {
    const stories = response.data;
    const $ = cheerio.load(stories);
    const content = [];
    $(".post-body").each(function () {
      const post = $(this).text();
      content.push(post);
    });
    console.log(content);
  })
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`sever running on Port ${PORT} `));
