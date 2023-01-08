import React, { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Note from './Note'
import CreateNode from './CreateNode'


const App = () =>{
    const [addItem , setaddItem] = useState([])
    const addNote = (note) =>{
        // alert("i am clicked ")
        setaddItem((prevData)=>{
            return [...prevData , note]
        })
        console.log(note)
    }

    const onDelete = (id) => {
        setaddItem((olddata) =>
            olddata.filter((currdata , inde) => {
               return inde !== id; 
            })
        )
    }
    
    return(
        <>
           <Header/>
           <CreateNode
           passNote={addNote} />
        

           {addItem.map((val ,index) => {
            return <Note
            key={index}
            id={index}
            title={val.title}
            content = {val.content}
            deleteItem = {onDelete}
            />
           })}
           <Footer/>
 
        </>
    )
}

export default App;