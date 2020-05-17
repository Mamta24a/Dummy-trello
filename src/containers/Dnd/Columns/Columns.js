import React, { Component } from 'react';
import Tasks from '../Tasks/Tasks';
import {
    titleCase,
    arr2KeyValue,
    // keyValue2Arr
} from '../../../Helpers/helperFunction';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const todo = [
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
];
const inProgress = [
    "sample task 5",
    "xsaxasxsacnsjncjancjancjasnxjancjancjansjnsjxnjasncjasncjnsajncjasncjnajcnsajnxjasncjnasjcnjasncjasncxjsancjasncjnasjcnajsncjasncjasncj",
    "sample task sample task sample task sample task sample task sample task 6",
    "sample task 7"
];
const done = [
    "sample task 8",
    "sample task 9"
]

class Columns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: arr2KeyValue(todo),
            inProgress: arr2KeyValue(inProgress),
            done: arr2KeyValue(done)
        };
    }

    addTask = (stage, newTask) => {
        setTimeout(() => {
            document.getElementById(`${stage}${this.state[stage].length - 1}`).style.display = "none";
            document.getElementById(`${stage}Action${this.state[stage].length - 1}`).style.display = "none";
            document.getElementById(`${stage}InputDiv${this.state[stage].length - 1}`).style.display = "inline-block";
        }, 10);
        this.setState({
            [stage]: [...this.state[stage], { "id": this.state[stage].length, "text": "" }]
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
                <RLDD
                    items={this.state[stage]}
                    itemRenderer={(item) => {
                        return (
                            <Tasks
                                task={item.text}
                                i={item.id}
                                stage={stage}
                                todo={todo}
                                inProgress={inProgress}
                                done={done}
                                updateState={this.updateState}
                            />
                        );
                    }}
                    onChange={(e) => { this.handleRLDDChange(e, stage) }}
                />
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