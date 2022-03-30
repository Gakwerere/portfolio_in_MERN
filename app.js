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
        {title: 'Biography', snippet: ' This is my Biography ...Lorem ipsum dolor sit amet consectetur'},
        {title: 'My Experience', snippet: 'This is my Experience... Lorem ipsum dolor sit amet consectetur'},
        {title: 'How am I', snippet: '  Lorem ipsum dolor sit amet consectetur'},
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


app.get('/create', (req, res) => {
    res.render('create', { title:'Add a new blog' });
  });

//404 page
app.use((req ,res ) => {
//   res.status(404).sendFile('./view/404.html' , {root : __dirname});
     res.status(404).render('404', { title: '404' });
});

