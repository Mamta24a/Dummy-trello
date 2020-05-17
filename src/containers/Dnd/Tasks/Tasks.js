import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo,
            inProgress: props.inProgress,
            done: props.done,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todo: nextProps.todo,
            inProgress: nextProps.inProgress,
            done: nextProps.done,
        })
    }

    editTask = (stage, id) => {
        document.getElementById(stage + "InputDiv" + id).style.display = "inline-block";
        document.getElementById(stage + id).style.display = "none";
        document.getElementById(stage + "Action" + id).style.display = "none";
    }

    saveTask = (stage, id) => {
        document.getElementById(stage + "InputDiv" + id).style.display = "none";
        document.getElementById(stage + "Action" + id).style.display = "inline-block";
        document.getElementById(stage + id).style.display = "inline-block";
        this.state[stage].splice(id, 1, { "id": id, "text": document.getElementById(stage + "Input" + id).value });
        this.props.updateState(stage, this.state[stage]);
    }

    deleteTask = (stage, id) => {
        let filteredArray = this.state[stage].filter((item, i) => item.id !== id);
        this.props.updateState(stage, filteredArray);
    }

    render() {
        let { task, i, stage } = this.props;
        return (
            <div className="task" key={i}>
                <div
                    className="taskView"
                    style={{ display: "inline-flex" }}
                    id={`${stage}${i}`}
                >
                    {task}
                </div>
                <div style={{ display: "none" }} id={`${stage}InputDiv${i}`}>
                    <textarea
                        autoFocus
                        className="taskInput"
                        type="text"
                        value={task}
                        placeholder="Enter a new task here..."
                        id={`${stage}Input${i}`}
                    /><br />
                    <Button
                        variant="success"
                        size="sm"
                        onClick={(e) => { this.saveTask(stage, i) }}
                    >
                        Save
                    </Button>
                </div>
                <small className="float-right" id={`${stage}Action${i}`}>
                    <FontAwesomeIcon
                        onClick={() => { this.editTask(stage, i) }}
                        icon={faPencilAlt}
                        color="gray"
                    />&emsp;
                    <FontAwesomeIcon
                        onClick={() => { this.deleteTask(stage, i) }}
                        icon={faTrashAlt}
                        color="gray"
                    />
                </small>
            </div>
        );
    }
}

export default Tasks;