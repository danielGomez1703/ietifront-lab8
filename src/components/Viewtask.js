import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import MiniDrawer from "./MiniDrawer";
import TaskList from "./TaskList"

export class Viewtask extends React.component {

    constructor(props) {
        super(props);
        this.state = {
            items: []       
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {

        return (
            <div className="ViewTask">
                <MiniDrawer />
                <h2> TASKS </h2>
                <Container fixed>
                    <hr />
                    <br />
                    <br />

                    <br />
                    <TaskList taskList={this.state.items} />
                </Container>
                <Fab size="medium" color="primary" aria-label="add" onClick={this.handleClick}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }


    handleClick(e) {
        localStorage.setItem("isAdding", true);
        this.props.handleClick(e);
    }


}
export default Viewtask;