import { useState } from 'react'
import viteLogo from '/vite.svg'
import Layout from './Layout.jsx'

function App() {
  return (
    <>
    <Layout top={<p>Test</p>} left={<p>Test</p>} center={<p>Test</p>} right={<p>Test</p>}/>
    </>
  )
}

export default App
