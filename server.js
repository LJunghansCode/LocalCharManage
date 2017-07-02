const express  = require('express'),
      path     = require('path'),
      bp       = require('body-parser'),
      session  = require('express-session'),
      bcrypt   = require('bcrypt'),
      dir      = __dirname,
      port     = 3000,
      app      = express();

app.use(session({
    secret: 'lucaHome',
    resave: false,
    saveUninitialized: true
}));
app.use( express.static( path.join( dir, 'App' )));
app.use( express.static( path.join( dir, 'node_modules' )));
app.use( bp.json() );
require('./server/Config/mongoose.js');
require('./server/Config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
