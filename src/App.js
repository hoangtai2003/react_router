import { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu/>
                        {/* Nội dung */}
                        <Switch> 
                            {this.showContentsMenus(routes)}
                        </Switch>
                </div>
            </Router>
        );
    }
    showContentsMenus = (routes) => {
        var result = null;
        if (routes?.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key = {index}
                        exact = {route.exact}
                        path = {route.path} 
                        component = {route.main}/>
                )
            });
        }
        return result;
    }
}


export default App;
