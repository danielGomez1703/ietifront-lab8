import React from 'react';
import { Task } from './Task'
import Box from '@material-ui/core/Box';

export class TaskList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const taskList = this.props.taskList.map((task, i) => {
            return ( 
                    <Task key={i} index={i} descripcion={task.descripcion} status={task.status} dueDate={task.dueDate} responsible={task.responsible} />
            );
        });
        return (
            <div>
                <Box color="text.secondary" display="center" flexWrap="wrap"  >     
                    {taskList}
                </Box>
                <br/>
            </div>
        );


    }

}
export default TaskList;