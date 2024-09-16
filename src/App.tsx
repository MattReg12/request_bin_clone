import EndpointSummary from './components/EndpointSummary';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bin' element={<EndpointSummary />} />
        <Route path='/bin/:binId' element={< EndpointSummary />} />
      </Routes>
    </Router>
  )
}

export default App
