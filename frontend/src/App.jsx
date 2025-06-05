import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import AppAppBar from './components/AppAppBar/AppAppBar'
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { GaleryPage } from './pages/GaleryPage/GaleryPage';
import { AnimalPage } from './pages/AnimalPage/AnimalPage';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'
import StyledScrollbar from './styles/StyledScrollbar';
import FormularioAnimalPage from './pages/FormularioAnimalPage/FormularioAnimalPage';
import FormularioRegistroPage from "./pages/FormularioRegistroPage/FormularioRegistroPage";
import BottomBar from "./components/Bottombar/BottomBar";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
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
          <Route path={"/animal/new"} element={<FormularioAnimalPage/>}/>
          <Route path={"/registro/new"} element={<FormularioRegistroPage/>}/>
          <Route path={"/mi-perfil"} element={<ProfilePage/>}/>
          <Route path={"/signup"} element={<SignupPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>
        <BottomBar/>
      </Router>
    </>
  )
}

export default App
