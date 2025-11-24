import { Route,Routes } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import Layout from './Layout.jsx'
import AboutUs from './AboutUs.jsx'

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
