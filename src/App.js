import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavouriteCompanies from './components/FavouriteCompanies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Favourites" element={<FavouriteCompanies/>}/>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
