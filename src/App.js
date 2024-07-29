import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Header1 from './components/Header1'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PracticePage from './pages/PracticePage'
import AttorneysPage from './pages/AttorneysPage'
import './index.css'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      {/* <div className='App'> */}
      <Header1 />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/practice' element={<PracticePage />} />
        <Route path='/attorneys' element={<AttorneysPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTopBtn />
      {/* </div> */}
    </Router>
  )
}

export default App
