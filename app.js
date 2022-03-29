const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine' , 'ejs');

//listen for requests
app.listen(3000);

// Middleware and Static File
        // app.use((req , res  ,next) => {
        //     console.log('new request');
        //     console.log('host', req.hostname);
        //     next();
        // })
app.use(morgan('dev'));

app.use(express.static('Public'));

app.get('/' , (req, res) => {

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];

    // displaye html tag
        // res.send('<p>html tag in express , Anyway am Luc . Thx</p>'); 
    //call html file
   // res.sendFile('./view/index.html' , { root : __dirname});
   res.render('index' , { title : 'Home' , blogs});
});

app.get('/about' , (req, res) => {

   

    // displaye html tag
        // res.send('<p>html tag in express , Anyway am Luc . Thx</p>');
    //call html file
     //res.sendFile('./view/about.html' , { root : __dirname});
     res.render('about' , {title : 'About Me'});
});


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Add a new blog' });
  });

//404 page
app.use((req ,res ) => {
//   res.status(404).sendFile('./view/404.html' , {root : __dirname});
     res.status(404).render('404', { title: '404' });
});

