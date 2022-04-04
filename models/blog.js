const mongoose = require ('mongoose');
// call Schema from mongoose
mongoose Schema =  mongoose.Schema; 

const blogSchema = new Schema ({
    title : {
       type : String ,
       require : true
    } ,
    snippet : {
        type : String ,
       require : true
    },
    body : {
       type : String ,
       require : true
   }

}, {timestamps : true} );

// create model and  insert schema( blogSchema) in model
const Blog = mongoose.model('Blog' , blogSchema);
 
module.exports = Blog;
