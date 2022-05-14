
import mongoose from 'mongoose';

//create all schemas

const MemoriesSchema= new mongoose.Schema ({
    //pass object here

    //BSON format
    title:{
        type:String,
        required:true,
    },  
    location:
    {
        type:String,
        required:true,
    },
    description:
    {
        type:String,
        required:true,
    },
    addImage:
    {
        type:String,
        required:true,
}});

//pass to model in mongoose so that it is created in database itself

// model created called "MemoriesData", and schema (blueprint of model)
const Memories=mongoose.model("MemoriesData", MemoriesSchema)

//acccess this file for CRUD
// module.exports=Memories;

export default Memories;