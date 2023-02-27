import React from 'react'
import './App.css';
import LandingPage from './Layout/LandingPage';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AddNewPost from './Layout/AddNewPost';
import { Link } from 'react-router-dom';
// import ViewPost from './Layout/ViewPost';
import { ShowPosts } from './Layout/ShowPosts';
// import ViewPost from './Layout/ViewPost';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
   
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/view' element={ <ShowPosts/> } />       
        <Route path='/post' element={ <AddNewPost/> } />
    </Routes>
   </BrowserRouter>
    </div>
  )
}
export default App;