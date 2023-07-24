import { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from'./components/Home';
import About from './components/About';
import Contact from "./components/Contact";
// const MenuLink  = ({label, to, activeOnlyWhenExact}) => {
//     return (
//         <Routes>
//             <Route
//                 path={to} exact = {activeOnlyWhenExact} children = {({match}) => {
//                     var active  = match ? 'active abc' : '';
//                     return (
//                         <li className={active}>
//                             <NavLink to = {to} className="my-link">
//                                 {label}
//                             </NavLink>
//                         </li>
//                     )
//                 }}
//             />
//         </Routes>
//     )
// }
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">                       
                            {/* <MenuLink label="Trang chủ" to= "/" activeOnlyWhenExact={true}/>                          
                            <MenuLink label="Giới thiệu" to= "/about" activeOnlyWhenExact={false}/>
                            <MenuLink label="Liên hệ" to= "/contact" activeOnlyWhenExact={false}/>   */}
                            <li>
                                <NavLink to = "/" className="my-link">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to = "/about" className="my-link">Giới thiệu</NavLink>
                            </li>
                            <li>
                                <NavLink to = "/contact" className="my-link">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </nav>
                        {/* Nội dung */}
                    <Routes>
                        <Route exact  path = "/" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}


export default App;
