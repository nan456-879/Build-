import React from 'react'
 import About from './About'
 import Consultancy from './Consultancy'
   import Ourwork from './Ourwork'
  import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
// import Work from './Work'
// import Star from './Star'
// import Home from './Home'
const App = () => {
  return (
     <div>
      <Router>
      
       <About/> 
     <Routes>
     <Route path='/Ourwork' element={<Ourwork/>}></Route>
     <Route path='/About' element={<About/>}></Route>
     <Route path='/Consultancy' element={<Consultancy/>}></Route>
     </Routes>
     </Router>
       {/* <Ourwork/>  */}
      {/* <Work/> */}
       {/* <Star/> */}
    {/* <Home/> */}
    </div>
  )
}

export default App