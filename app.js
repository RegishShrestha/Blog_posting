const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});
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
