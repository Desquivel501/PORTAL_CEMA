import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppAppBar from './components/AppAppBar/AppAppBar'
// import ThemeContext from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { GaleryPage } from './pages/GaleryPage/GaleryPage';
import { AnimalPage } from './pages/AnimalPage/AnimalPage';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'
import StyledScrollbar from './styles/StyledScrollbar';

function App() {
  const { colors, toggleTheme } = useTheme();
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledScrollbar/>
      <Router>
        <AppAppBar/>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/buscar"} element={<SearchPage/>}/>
          <Route path={"/contacto"} element={<ContactPage/>}/>
          <Route path={"/galeria"} element={<GaleryPage/>}/>
          <Route path={"/animal/:id"} element={<AnimalPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
