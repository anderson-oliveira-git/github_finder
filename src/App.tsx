import { Outlet } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi';
import React from 'react'

import appStyles from './App.module.css'

function App() {
  return (
    <React.Fragment>
        <div className={appStyles.app}>
            <h1>Github <FiGithub/> finder</h1>
            <Outlet/>
        </div>
    </React.Fragment>
  )
}

export default App
