import React from 'react'
import Header from './containers/header'
import Login from './containers/login'
import Register from './containers/register'
import Home from './containers/home'
import AdminEdit from './containers/adminEdit'
import List from './containers/list'
import AddUser from './containers/addUser'
import {Routes, Route} from 'react-router-dom'
import RequireDataAuth from './helpers/require-auth-data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
        <Route exact path="/" element={<RequireDataAuth child={Home} auth={true}/>}/>
        <Route exact path="/list" element={<RequireDataAuth child={List} auth={true}/>}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/admin/updateProfil/:id" element={<RequireDataAuth child={AdminEdit} auth={true}/>}/>
        <Route exact path="/admin/addUser" element={<RequireDataAuth child={AddUser} auth={true}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;



