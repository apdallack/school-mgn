// import React from 'react'
// import './index.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from "./Pages/Home"
// import Menu from "./Pages/Menu"
// import Service from "./Pages/Service"
// import About from "./Pages/About"
// import Navbar from "./Pages/Navbar"

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route index element ={< Navbar />} />
//         {/* <Route path='/Navbar' element ={< Navbar />}/> */}
//         <Route path='/Navbar' element ={< Navbar />}/>
//         <Route path='/Home' element ={< Home />}/>
//         <Route path='/Menu' element ={< Menu />}/>
//         <Route path='/Service' element ={< Service />}/>
//         <Route path='/About' element ={< About />}/>
//       </Routes>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
// import './index.css';
import './Form.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login" 
import Signingup from "./Components/Signingup" 


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route index element ={<Login />}/>
       <Route path='/Login' element ={<Login />}/>
       <Route path='/Signingup' element ={<Signingup />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}

export default App

