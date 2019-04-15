import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buyItems: ['pane','pasta','farina'],
            message: ''
        }
    }

    addItem(e) {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        const isOnTheList = buyItems.includes(newItem);
        
        if(isOnTheList) {
            this.setState({
                message: 'it is already on the list'
            });
        } else {
            newItem !== '' && this.setState({
                buyItems: [...buyItems, newItem],
                message: ''
            });
        }

        this.addForm.reset();
    }

    removeItem(item){
        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        });

        this.setState({
            buyItems: [...newBuyItems]
        });

        if(newBuyItems.length === 0) {
            this.setState({
                message: 'Add an item'
            })
        }
    }

    clearAll() {
        this.setState({
            buyItems: [],
            message: 'Add an item'
        })
    }

    render() {
        const {buyItems, message} = this.state;
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
                                {
                                    (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
                                }
                                {
                                    buyItems.length > 0 &&
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" className="text-right">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                buyItems.map(item => {
                                                    return (
                                                        <tr key={item}>
                                                            <th scope="row">{item}</th>
                                                            <td className="text-right"><button type="button" className="btn btn-light" onClick={(e) => {this.removeItem(item)}} ><FontAwesomeIcon icon="trash" /></button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        {
                                            buyItems.length > 1 &&
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="2" className="text-right">
                                                        <button type="button" className="btn btn-link" onClick={(e) => {this.clearAll()}} >Remove all <FontAwesomeIcon icon="trash" /></button>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        }
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
