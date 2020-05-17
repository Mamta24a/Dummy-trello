import React, { Component } from 'react';
import Tasks from '../Tasks/Tasks';
import { titleCase } from '../../../Helpers/helperFunction';

class Columns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                "sample task 1",
                "sample task 2",
                "sample task 3",
                "sample task 4",
                "sample task 5",
                "sample task 6",
                "sample task 7",
                "sample task 8",
                "sample task 9",
                "sample task 10",
                "sample task 11",
                "sample task 12",
                "sample task 13",
                "sample task 14",
                "sample task 15"
            ],
            inProgress: [
                "sample task 5",
                "xsaxasxsacnsjncjancjancjasnxjancjancjansjnsjxnjasncjasncjnsajncjasncjnajcnsajnxjasncjnasjcnjasncjasncxjsancjasncjnasjcnajsncjasncjasncj",
                "sample task sample task sample task sample task sample task sample task 6",
                "sample task 7"
            ],
            done: [
                "sample task 8",
                "sample task 9"
            ]
        };
    }

    addTask = (stage, newTask) => {
        setTimeout(() => {
            document.getElementById(`${stage}${this.state[stage].length - 1}`).style.display = "none";
            document.getElementById(`${stage}Action${this.state[stage].length - 1}`).style.display = "none";
            document.getElementById(`${stage}InputDiv${this.state[stage].length - 1}`).style.display = "inline-block";
        }, 10);
        this.setState({
            [stage]: [...this.state[stage], ""]
        })
    }

    updateState = (state, value) => {
        this.setState({
            [state]: value
        })
    }

    handleRLDDChange = (newItems, stage) => {
        this.setState({
            [stage]: newItems
        });
    }

    render() {
        let { stage } = this.props;
        let { todo, inProgress, done } = this.state;
        return (
            <div className="column">
                <h5>{titleCase(stage)}</h5>
                {this.state[stage].map((task, i) => (
                    <Tasks
                        task={task}
                        i={i}
                        stage={stage}
                        todo={todo}
                        inProgress={inProgress}
                        done={done}
                        updateState={this.updateState}
                    />
                ))}
                <h6
                    className="text-gray margin-t-1"
                    onClick={() => { this.addTask(stage, "") }}
                >
                    + Add new task
                </h6>
            </div>
        );
    }
}

export default Columns;