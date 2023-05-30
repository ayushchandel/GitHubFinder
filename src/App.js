import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GitHubContextProvider } from './context/Github/GitHubContext';
import AlertContext, { AlertProvier } from './context/Alert/AlertContext';
import User from './pages/User';


function App() {
  return (
    <GitHubContextProvider>
      <AlertProvier>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <NavBar></NavBar>
      <main className='container pb-10 px-5 max-auto'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/user/:login" element={<User></User>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </main>
      <Footer></Footer>
      </div>
    </Router>
    </AlertProvier>
    </GitHubContextProvider>
  );
}

export default App;
