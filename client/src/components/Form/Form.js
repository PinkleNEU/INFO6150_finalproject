import React from 'react';
import './Form.css';
import axios from 'axios';


    const Form= () => {
      const handleSubmit= (e) =>
  {
    e.preventDefault();
    const title=e.target.title.value;
    const location=e.target.location.value;
    const description=e.target.description.value;
    const addImage=e.target.description.value; 
    axios.post("http://localhost:3001/api/addData", {title, location, description,addImage}) //post request
    //console.log("title: "+title, "\n", "location: "+location,"\n", "Description: "+description );
   

  }

    return ( 
        <form className='form' onSubmit={handleSubmit}>
          <h3  style={{color:'brown', textAlign:'center', fontSize:'30px', padding:'25px'}}> Add you memory</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Title" required/>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" className="form-control" id="exampleInput" placeholder="Location" required/>
        </div>
        
        <div className="form-group">
          <label >Description</label>
          <input type="textarea" name="description" className="form-control" id="exampleInput" placeholder="Describe this memory"  style={{height:'90px', padding:'0'}} required/>
        </div>

        <div className="form-group">
          <label>Add your image</label>
          <input type="file" name="addImage" className="form-control" id="exampleInput" placeholder="Your image" required/>
        </div>
        
        <button className="btn btn-primary">Submit</button>
      </form>
      );
};
export default Form;