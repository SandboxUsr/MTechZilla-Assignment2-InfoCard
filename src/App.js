import Card from './Components/Card';
import LandingPage from './Components/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/output" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
