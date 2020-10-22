import React from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class UserProfile extends React.component {

    constructor(props) {
        super(props)
        this.state = {
            name : "",
            passwd : ""
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {

        return (
            <div className="UserProfile">

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
                                    <InputLabel htmlFor="text"> Name </InputLabel>
                                    <Input id="name" name="name" autoComplete="name" autoFocus value={this.state.name} onChange={this.handleChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                        name="passwd"
                                        type="passwd"
                                        id="passwd"
                                    autoComplete="current-password"
                                        value={this.state.passwd}
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
            )
    }


}