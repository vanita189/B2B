import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home  from './Components/Home/Home';
import Solutions from './Components/Solutions/Solutions'
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Book from './Components/Book/Book'
import Start from './Components/Start/Start';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}>Home</Route>
        <Route path="/Aboutus" element={<Aboutus/>}>Aboutus</Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Blog" element={<Blog/>}>Blog</Route>
        <Route path="/Start" element={<Start/>}></Route>
        <Route path="/Book" element={<Book/>}>Book</Route>
      </Routes>
    </div>
  );
}

export default App;
