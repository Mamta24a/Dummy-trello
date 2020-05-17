import React, { Component } from 'react';
import Columns from '../Columns/Columns';

class Boards extends Component {
    render() {
        return (
            <>
                <h3 className="margin-tb-1 text-green bold">Project Name</h3>
                <div className="column-div">

                    {/********************* to do *****************/}
                    <Columns stage={"todo"} />

                    {/********************* In Progress *****************/}
                    <Columns stage={"inProgress"} />

                    {/********************* Done *****************/}
                    <Columns stage={"done"} />

                </div>
            </>
        );
    }
}

export default Boards;



