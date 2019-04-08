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
            </div>
        )
    }

}
