import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from'./components/Home';
import About from './components/About';
import Contact from "./components/Contact";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/about">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link to="/contact">Liên hệ</Link>
                            </li>
                        </ul>
                    </nav>
                        {/* Nội dung */}
                    <Routes>
                        <Route exact  path = "/" component={<Home/>}/>
                        <Route path="/about" component={<About/>}/>
                        <Route path="/contact" component={<Contact/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}


export default App;
