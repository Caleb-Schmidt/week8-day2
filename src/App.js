import './App.css';
import {useContext} from 'react';
import AdminMenu from './components/AdminMenu';
import NavBar from './components/NavBar';
import Login from './views/Login';
import {Route, Routes} from 'react-router-dom';
import SnackBar from './components/SnackBar';
import {AppContext} from './context/AppContext';
import Box from '@mui/material/Box';




const HomePage = () => (<h1>Welcome To The Bookstore!</h1>)

function App() {
  const {user} = useContext(AppContext)
    // <Route path = "/register" element = {<Register />} />

  return (
    <>
      <SnackBar/>
      <NavBar>
        <Box sx = {{minHeight:'90vh'}}>
          <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/login" element = {<Login />} />
          </Routes>
        </Box>
      {user?.is_admin?<AdminMenu/>:<></>}
      </NavBar>
    </>
  );
}

export default App;
