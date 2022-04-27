import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Layout/Navbar'
import Sidebar from '../Layout/Sidebar'
import Home from '../ProjectPages/Home'

// AUTH ROUTES
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'

import history from '../browserHistory';
import Surround from 'ProjectPages/Surround';
import Trap from 'ProjectPages/Trap';
import About from 'ProjectPages/About';

const ProjectRoutes = ({ user, setUser, clearUser, posts, setPosts }) => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
      setIsOpen(!isOpen)
  }

  return (
  <main>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} user={user}/>
    <Navbar toggleSidebar={toggleSidebar} user={user}/>

    <Routes history={history}>
      <Route
        path='/sign-up'
        element={
          <SignUp setUser={setUser} />
        }
      />
      <Route
        path='/sign-in'
        element={
          <SignIn setUser={setUser} />
        }
      />
      <Route
        path='/sign-out'
        element={
          <SignOut
            clearUser={clearUser}
            user={user}
          />
        }
      />
      <Route
        path='/change-password'
        element={
          <ChangePassword user={user} />
        }
      />
      <Route
        path='/'
        element={<Home 
          posts={posts}
          setPosts={setPosts} />}
      />
      <Route
        path='/surround/'
        element={<Surround />}
      />
            <Route
        path='/trap/'
        element={<Trap />}
      />
            <Route
        path='/about/'
        element={<About />}
      />
    </Routes>
  </main>
);
}

export default ProjectRoutes;
