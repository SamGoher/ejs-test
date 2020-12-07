// single page app `just for testing ejs templating engine

// application requirement
const path = require(`path`);
const express = require(`express`);
const app = express();

// using ejs
app.set(`view engine`, `ejs`);

// using static files `css, js and images`
app.use(express.static(path.join(__dirname, `./public`)));

// @route   GET `localhost:3000/`
// @desc    rendering index page with data variable
// @access  public
app.get(`/`, (req, res) => {
  let data2 = {
    name: `bebo`,
    age: 23
  };

  res.render(`index`, {
    data: `i love Sara Soueidan`,
    data2
  })
});

// starting our server by listening to port 3000
app.listen(3000, console.log(`server listening to port 3000 ...`));