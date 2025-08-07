import './reset.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import { useState } from 'react';
import Experience from './pages/Experience/Experience.js'
import Projects from './pages/Projects/Projects.js'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'


function Header () {
    let location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const isHome = () => {
        return location.pathname === '/';
    }
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <header className="header">
            <div className={`header-container max-width-1200 ${isHome() && 'light-header'}`}>
                <Link to="/">
                    <h1>Alex Chiang</h1>
                </Link>
                <div className="mobile-menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "current-page" : ""} to="Experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "current-page" : ""} to="Projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "current-page" : ""} to="Blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

function App() {
    
    return (
    <Router basename="/web-portfolio">
        <div className="App">
            <Header />
            <Routes>
                <Route path="/Experience" element={<Experience />} />
                <Route path="/Projects"  element={<Projects />}/>
                <Route path="/Blog"  element={<Blog />}/>
                <Route path="/"  element={<Home />}/>
                <Route path="*" element={<Home />}/>
            </Routes>
            <footer>
                <p>Thank you for visiting</p>
                <p>t159753g@gmail.com</p>
                <p>Alex Chiang ©2021</p>
            </footer>
        </div>
    </Router>
  );
}

export default App;
