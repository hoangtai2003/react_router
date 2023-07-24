import { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from'./components/Home';
import About from './components/About';
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu/>
                        {/* Nội dung */}
                    <Routes>
                        <Switch> 
                            <Route exact  path = "/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route element = {<NotFound/>} />
                        </Switch>
                    </Routes>
                </div>
            </Router>
        );
    }
}


export default App;
