
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
// import FishIcon from '@mui/icons-material/Fish';
import FishIcon from '../assets/Icons/Fish';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';

export const routes = [
  { text: 'Inicio', icon: <HomeIcon fontSize="medium" />, route: '/' },
  { text: 'Buscar', icon: <SearchIcon fontSize="medium" />, route: '/buscar' },
  { text: 'Listado', icon: <FishIcon fontSize="medium" />, route: '/listado' },
  { text: 'Galería', icon: <CollectionsIcon fontSize="medium" />, route: '/galeria' },
  { text: 'Contáctanos', icon: <InfoIcon fontSize="medium" />, route: '/contacto' },
];

