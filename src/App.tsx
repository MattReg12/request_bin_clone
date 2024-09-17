import EndpointSummary from './components/EndpointSummary';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bin/:binId' element={<EndpointSummary />} />
        <Route path='/bin/:binId/:requestId' element={<EndpointSummary />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App
