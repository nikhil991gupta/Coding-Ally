import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import './index.css'
import Footer from "./components/Footer"
import Products from './Products.jsx'
import MockInterview from './components/MockInterview.jsx'
import GroupDiscussion from './components/GroupDicussion.jsx'
import InterviewTips from './components/InterviewTips.jsx'
import CodeEditor from './components/CodeEditor.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<Router>
<div>
  <Routes>
    <Route exact path='/' element={<App/>}></Route>
  </Routes>
  <Routes>
    <Route exact path='/Products' element={<Products />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/About' element={<About />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/MockInterview' element={<MockInterview />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/GroupDiscussion' element={<GroupDiscussion/>}></Route>
  </Routes>
  <Routes>
    <Route exact path='/InterviewTips' element={<InterviewTips />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/CodeEditor' element={<CodeEditor />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/SignIn' element={<SignIn />}></Route>
  </Routes>
  <Routes>
    <Route exact path='/SignUp' element={<SignUp />}></Route>
  </Routes>

   <Footer />
</div>


</Router>

    {/* <About /> */}
  </React.StrictMode>,
)
