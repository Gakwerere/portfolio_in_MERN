const http =  require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req , res) => {
    // console.log('request made');
    console.log(req.url ,req.method);

    // set heard content type
    res.setHeader('Content-Type' , 'text/html');

    // path 
    let path= './view/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode = 200;
            break;
        case '/About':
            path += 'About.html';
            res.statusCode = 200;
            break;
        case '/About-me':
             res.setHeader('Location' , '/About');
             res.statusCode = 302;
             res.end();
             break;
        default:
            path +='404.html';
            res.statusCode = 404;
            break;
    }

                // res.write('<title>Luc PortFolio</title>');
              // res.write('<p>Hallooo Am Kanyesaro Luc , a software Developer</p>')
                // res.end();
    // send an html file
    fs.readFile( path ,(err , data)=> {
        if(err){
            console.log(err);    
            res.end(err);
        } else {
            // res.write(data)
            res.end(data)
        }
    });

});

server.listen(3000 , 'localhost' , () =>{
    console.log('Listening for requests on port 3000')
});