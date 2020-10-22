import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import HomeViews from "./HomeViews";
import 'react-datepicker/dist/react-datepicker.css';
import AddTask from "./AddTask"
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'
import axios from "axios"

class TaskApp extends Component {

    constructor(props) {
            super(props);
            this.state = {
            adding: false,
            items: []

        };
        this.handleClick = this.handleClick.bind(this);
    }
   async componentDidMount() {
        var list = []
        await axios.get('https://ietiback-lab8.herokuapp.com/task/getTasks', {
            username: this.state.mail,
            password: this.state.password
        })
            .then(function (response) {
                const data = response.data;
                console.log(response);
                list = [];
                data.forEach(function (task) {
                    list.push({
                        "id": task.id,
                        "status": task.status,
                        "descripcion": task.descripcion,
                        "responsible": {
                            "name": task.responsible.name,
                            "mail": task.responsible.mail
                        },
                        "dueDate": task.dueDate
                    })

                });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ items: list });

    }


    render() {
        const homeView = () => (
            <HomeViews handleClick={this.handleClick} items={this.state.items}/>
        );
        const AddView = () => (
            <AddTask handleClick={this.handleClick} />
        );
        console.log("isAdding  return " + this.state.adding);
        const view = this.state.adding ? AddView : homeView
        

        return (
                <div className="TaskApp">
                    <Router>
                        <br />
                        <br />
                        <Route exact path="/" component={view} />
                    </Router>
                </div>
        );

    }

    handleClick(e) {
        console.log(" is adding " + localStorage.getItem("isAdding"));
        console.log(e);
       
        if (this.state.adding) {
            console.log("entra al if" + e);
            this.setState({
                adding: false,
                items: this.state.items.concat(e)
            })
        }
        else {
            
            this.setState({
                adding: true
               
            });
        }
    }

}

export default TaskApp;