const express = require('express');

// express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/' , (req, res) => {
    // displaye html tag
        // res.send('<p>html tag in express , Anyway am Luc . Thx</p>'); 
    //call html file
    res.sendFile('./view/index.html' , { root : __dirname});
});

app.get('/about' , (req, res) => {
    // displaye html tag
        // res.send('<p>html tag in express , Anyway am Luc . Thx</p>');
    //call html file
    res.sendFile('./view/about.html' , { root : __dirname});
});

app.get('/about-me' , (req ,res) => {
    res.redirect('/about');
});

app.use((req ,res ) => {
  res.status(404).sendFile('./view/404.html' , {root : __dirname});
});

