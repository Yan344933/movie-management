import React from 'react';
import { useState } from 'react';

const AddMovie = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errorTitle, setErrorTitle] = useState("");
    const [errorDescription, setErrorDescription] = useState("");

    const validateForm = () =>{
        let validated = true;

        if(title === ""){
            setErrorTitle("Missing title");
            validated = false;
        } else setErrorTitle("");
            
        if(description === ""){
            setErrorDescription("Missing description");
            validated = false;
        } else setErrorDescription("");
            
        return validated;
    }

  return (
    <div className={props.visible === true? '' : 'hide'}>
        <section className="">
                <form>
                    <div className="form-control-container">
    
                        <label htmlFor="title"> Title</label>
    
                        <input className="form-control" type="text" id="title"  value={title} onChange={(e)=> setTitle(e.target.value)} />
                        <span className="error">{errorTitle}</span>
    
                    </div>
    
                    <div className="form-control-container">
                        
                        <label htmlFor="description"> Description</label>
                        <textarea className="form-control" id="description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
    
                        <span className="error">{errorDescription}</span>
                    
                    </div>
                
                    <div className="form-control-container">
                        <button className="btn btn-primary" type="button" onClick={()=> {

                            if(validateForm()){
                                
                                const newMovie = {
                                    id: Math.floor(Math.random() * 500000) + 1,
                                    title, description
                                };
                                props.onAdd(newMovie);

                                setTitle("");
                                setDescription("");
                            }

                        }}>Save movie</button>
                    </div>  
                </form>
            </section>
    </div>
  )
}

export default AddMovie