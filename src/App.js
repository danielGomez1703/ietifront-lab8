import React, {Component} from 'react';

import { BrowserRouter as Router, Link, Route, Redirect ,Switch} from 'react-router-dom'

import Login from "./components/Login";
import logo from './logo.svg';
import TaskApp from './components/TaskApp';
import AddTask from "./components/AddTask";

localStorage.setItem("loging", false);
localStorage.setItem("items", []);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
            };
        this.handleClick = this.handleClick.bind(this); 
    }

    render() {

        const LoginView = () => (
            <Login handleClick={this.handleClick} />
        );

        const TodoAppView = () => (
            <TaskApp />
        );

        const view = this.state.isLogged ? TodoAppView : LoginView
        console.log(" login " + this.state.isLogged);
        return (
                <div className="App">

                    <Router>
                   
                            <br />
                            <br />
                        <Route exact path="/" component={view} />
                        <Route path="/newTask">
                                <AddTask />
                            </Route> 
                     </Router>
                </div>

        );
    
    }

    handleClick(e) {
        localStorage.setItem("login", true);
        this.setState({ isLogged: true })
    }


}

export default App;
