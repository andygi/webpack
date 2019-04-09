import React from 'react';
import PropTypes from 'prop-types';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buyItems: ['pane','pasta','farina']
        }
    }
    render() {
        const {buyItems} = this.state;
        return (
            <div>
                <h1>Shopping list</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyItems.map(item => {
                                return (
                                    <tr>
                                        <th scope="row" key={item}></th>
                                        <td>{item}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        test
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}
