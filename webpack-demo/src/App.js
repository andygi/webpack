import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buyItems: ['pane','pasta','farina']
        }
    }

    addItem(e) {
        e.preventDefault();
        console.log('e', e);
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        this.setState({
            buyItems: [...this.state.buyItems, newItem]
        });

        this.addForm.reset();
    }

    render() {
        const {buyItems} = this.state;
        return (
            <div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-5">
                        <h1 className="text-center">Shopping list <FontAwesomeIcon icon="cart-arrow-down" /></h1>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-4">
                        <form ref={(input) => {this.addForm = input}} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input ref={(input) => {this.newItem = input}} type="text" className="form-control" name="newItem" id="newItem" aria-describedby="helpId" placeholder="" />
                            </div>
                            <button type="submit" name="" id="" className="btn btn-primary">submit</button>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{marginTop: 2 + 'em'}}>
                    <div className="col col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            buyItems.map(item => {
                                                return (
                                                    <tr key={item}>
                                                        <th scope="row">{item}</th>
                                                        <td><button type="button" className="btn btn-light"><FontAwesomeIcon icon="trash" /></button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
