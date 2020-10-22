import React from 'react';
import App from "../App"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './login.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import axios from "axios";
localStorage.setItem("islogged", "false");

export class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.post('https://ietiback-lab8.herokuapp.com/user/login', {
            username: 'test@mail.com',
            password: 'password'
        })
            .then(function (response) {
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                            <form onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="mail" name="mail" autoComplete="email" autoFocus value={this.state.mail} onChange={this.handleChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                          
                                <Button type="submit" variant="outlined" color="primary" >
                        
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
                </React.Fragment>
                </div>
        );
    }
    handleChange(e) {
        var property = e.target.name
        this.setState({ [property]: e.target.value });
    }   

 
    async handleSubmit(e) {
        e.preventDefault();
        console.log("entra al boton");
        var token = null;
        await axios.post('https://ietiback-lab8.herokuapp.com/user/login', {
            username: this.state.mail,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response.data.accessToken);
                if (response != null) {
                    token = response.data.accessToken
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("token: " + token)
        if (token !== null) {
            console.log("entra al if")
            this.props.handleClick(e);
        } else {
            alert("Datos incorrectos, favor verifique")
            console.log(this.state);
            this.setState({ mail: '', password: '' });
            
      
        }
  
        
    
  
    }
}

export default Login;