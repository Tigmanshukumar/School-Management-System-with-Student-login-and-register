const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({email: req.user.email}).populate("posts");
  console.log(user);
  res.render("profile", { user });
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({email: req.user.email});
  let { patientName, address, phoneNumber, disease } = req.body;
  let post = await  postModel.create({
    username: user._id,
    patientName,
    address,
    phoneNumber,
    disease 
  })
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.redirect("/404");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      
      let token = jwt.sign({ email: user.email, userid: user._id }, "shhhh");

      
      res.cookie("token", token);

      res.redirect("/profile");
    } else {
      res.redirect("/404");
    }
  } catch (err) {
    res.status(500).send("Login error");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({ username, password: hash, email });

    let token = jwt.sign({ email: email, userid: user._id }, "shhhh");

    res.cookie("token", token);

    res.redirect("/login");
  } catch (err) {
    res.status(500).send("Error signing up");
  }
  
});

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (!req.cookies.token) {
    return res.redirect("/");
  }
  
  try {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/");
  }
}


app.listen(3000);
