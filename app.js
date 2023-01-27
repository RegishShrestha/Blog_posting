const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "regish", snippet: "lorem asdflsadfnsa fjasdfklsadl" },
    { title: "regish", snippet: "lorem asdflsadfnsa fjasdfklsadl" },
    { title: "regish", snippet: "lorem asdflsadfnsa fjasdfklsadl" },
  ];
  //   res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "create" });
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
