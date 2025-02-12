import { BrowserRouter, Routes, Route } from "react-router-dom"
import CountryList from "./pages/CountryList"
import CountryDetail from "./pages/CountryDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:country" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
