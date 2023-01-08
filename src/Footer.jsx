import React from 'react';


const date = new Date().getFullYear();
const Footer = () =>{
    return(
        <>
        <div className='Footer'>
        <p>Copyright &copy;{date}</p> 
        </div>
        </>
    )
}

export default Footer;