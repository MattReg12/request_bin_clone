import React from 'react';
import EndpointSummary from './components/EndpointSummary';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  function isValidUrl(input: string) {
    try {
      new URL('localhost:5173' + input)
      return true;
    } catch (error) {
      return false;
    }
  }

  React.useEffect(() => {
    if (!isValidUrl(window.location.pathname)) {
      alert('You sneaky dog. Going home')
      navigate('/')
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bin/:binId' element={<EndpointSummary />} />
      <Route path='/bin/:binId/:requestId' element={<EndpointSummary />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}
