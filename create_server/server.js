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
            break;
        case '/About':
            path += 'About.html';
            break;
        default:
            path +='404.html';
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