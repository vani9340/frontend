import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import {Link} from 'react-router-dom';
// import ViewPost from "./ViewPost";
function AddNewPost(){
    const [username,setUsername] = useState("")
    const [address,setAddress] = useState("")
    const [filename,setfilename] = useState('')
    const [description,setDescription] = useState("")

    
const uploadPost =()=>{
  const formData = new FormData();
  formData.append("filename",filename)
  formData.append("username",username)
  formData.append("address",address)
  formData.append("description",description)

  formData.forEach((val, key) => {
    console.log(val, key)
  })


console.log(formData)
  fetch("https://localhost:8080/api",{
    method:'POST',
    body: formData
  })
}
    return(
        <>
        <Navbar/>
        <div style={{height:"250px",width:"450px"}} className="form">
        <form>
        <div className="inside-form">
        <input className="dir-text" readOnly type="text" value={filename===""?"No File Chosen":filename} onChange={(e)=>setfilename(e.target.value)} />
        <span className="btn-browse">
        <input type="file" onChange={(e)=>setfilename(e.target.files[0])} />        
        </span>
        <input placeholder="Author" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input placeholder="Location" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <input placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <Link to={"/view"}>
        <button onClick={uploadPost}>Post</button>
        </Link>
        </div>
        </form>
        </div>
        </>
    )
}
export default AddNewPost;


//onClick={uploadPost}