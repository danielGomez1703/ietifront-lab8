import React from "react";
import MiniDrawer from "./MiniDrawer";
import TaskList from "./TaskList"
import { Container } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export class HomeViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        console.log("tasklist" + this.state.items)
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
        localStorage.setItem("isAdding", false);
        this.props.handleClick(e);
    }
}
export default HomeViews;