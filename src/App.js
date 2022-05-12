import './reset.css';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import Experience from './pages/Experience/Experience.js'
import Projects from './pages/Projects/Projects.js'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'


function Header () {
    let location = useLocation();
    const isHome = () => {
        return location.pathname === '/';
    }
    return (
        <header className="header">
            <div className={`header-container max-width-1200 ${isHome() && 'light-header'}`}>
                <Link to="/">
                    <h1>Alex Chiang</h1>
                </Link>
                <ul>
                    <li>
                        <NavLink activeClassName="current-page" to="Experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="current-page" to="Projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="current-page" to="Blog">Blog</NavLink>
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
