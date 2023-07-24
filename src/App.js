import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from'./components/Home';
import About from './components/About';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Trang chủ</a>
                            </li>
                            <li>
                                <a>Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                        {/* Nội dung */}
                    <Routes>
                        <Route exact  path = "/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}


export default App;
