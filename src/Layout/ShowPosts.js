import {useEffect, useState} from 'react'
import Navbar from './navbar'
import Card from './card'

export const ShowPosts = () =>{
    const [serverResponse,setServerResponse] = useState(null)
   
    const fetchAllPosts = async() => {
        const resp = await fetch('http://localhost:8080/all')
        .then(response =>{
            response.json()
            .then(posts=>{
                setServerResponse(posts)
                console.log(posts)
            })
        })
        // setServerResponse(await resp.json())
       

    }
    useEffect(() =>{
         fetchAllPosts()
    },[])
    if(serverResponse === null){
        return <h1>Loading...</h1>
    }
 
    return(
        <>
        <Navbar/>
            {/* {
                serverResponse?.result?.map?.((post,index)=>{
                    return <img style={{border:'2px solid blue'}} src={`http://localhost:8080/images/${post.filename}`} key={index} alt="img"/>
                })
            } */}
            {/*  */}
            {
                serverResponse?.result?.map((post,index)=>{
                    return <Card key={index} postdetails={serverResponse.result[index]}/>
                })
            }
        </>
    )
}