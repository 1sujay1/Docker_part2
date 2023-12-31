const express = require("express");
const app = express();
let myGoal = "Learn Docker!!!";
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <section class="headerSection">
      <h2>My Tutorial GOAL</h2>
      <h3>${myGoal}</h3>
    </section>
    <form  action="/my-goal" method="post">
      <div class="form-control">
        <label for="">My Goal</label>
        <input type="text" name="goal" />
      </div>
      <button class="formBtn">Reach Goal</button>
    </form>
  </body>
</html>

    `);
});

app.post("/my-goal", (req, res) => {
  const reqGoal = req.body.goal;
  console.log("reqGoal", reqGoal);
  myGoal = reqGoal;
  res.redirect("/");
});

app.listen(8000, () => {
  console.log("Listening");
});
