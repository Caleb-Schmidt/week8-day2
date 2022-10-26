import './App.css';
import AdminMenu from './components/AdminMenu';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import SnackBar from './components/SnackBar';
import Box from '@mui/material/Box';
import {AppContext} from './context/AppContext';
import {useContext} from 'react';
import Login from './views/Login';



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
