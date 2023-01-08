import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"

import React,{ useState } from 'react'

const CreateNode = (props) => { 
const [expand, setexpand] = useState(false)

    const [note , setNote]= useState({
        title: "",
        content: "",
    })

   const InputEvent = (event) =>{

    const {name , value} = event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]: value,
        }
    })
    console.log(note);
   }

    const addEvent= () =>{
     props.passNote(note);
     setNote({
        title: "",
        content: "",
    })
     
    }

       const expandit = () =>{
      setexpand(true)
       }
       
       const backtonormal = () =>{
        setexpand(false)
         }

    return (  
        <>
            <div className="add_note">
            { expand ?
                <input
                  type="text"
                  name = "title"
                  value={note.title}
                  onChange={InputEvent}
                  placeholder="Title"
                  autoCapitalize="off"
                />: null}

                <textarea 
                  rows="" 
                  colomn="" 
                  name ="content"
                  value={note.content}
                  onChange={InputEvent}
                  placeholder="Write a note..." 
                  onClick={expandit}
                  onDoubleClick = {backtonormal}
                />
               {expand ?
                <Button className="plus_icon" onClick={addEvent}>
                    <AddIcon />
                </Button>: null}
            </div>
        </>  
    )
}

export default CreateNode;