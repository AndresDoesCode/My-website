import { Route,Routes } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import Layout from './Layout.jsx'
import AboutUs from './AboutUs.jsx'
import HowToUse from './HowToUse.jsx'
import CryptoTracking from './CryptoTracking.jsx'

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/how-to-use' element={<HowToUse/>}/>
        <Route path='/crypto-tracking' element={<CryptoTracking></CryptoTracking>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
