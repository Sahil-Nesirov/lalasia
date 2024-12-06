import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Routing from './layout/Routing'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
