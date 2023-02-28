import React from 'react'
import './App.css';
import LandingPage from './Layout/LandingPage';
import {BrowserRouter,Routes, Route,Outlet} from "react-router-dom";
import AddNewPost from './Layout/AddNewPost';
import { ShowPosts } from './Layout/ShowPosts';
import Header from './Layout/header';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route Path='/header' element={<><Header/><Outlet/></>}>
        <Route path='/view' element={ <ShowPosts/> } />       
        <Route path='/post' element={ <AddNewPost/> } />
        </Route>
    </Routes>
   </BrowserRouter>
    </div>
  )
}
export default App;