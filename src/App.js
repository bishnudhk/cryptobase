import React from 'react'
import Navbar from './component/Navbar';
import {ThemeProvider} from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
       <Navbar/>
    </ThemeProvider>
  )
}

export default App