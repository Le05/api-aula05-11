const express = require('express');
const consign = require('consign');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


consign({cwd: 'src'})
.then('database')
.then('controllers')
.then('routes')
.into(app);

require('./src/routes/index')(app);

var port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server running - Port: ${port}`);
  });