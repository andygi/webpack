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
                {
                    buyItems.map(item => {
                        return <p key={item}>{item}</p>
                    })
                }
            </div>
        )
    }

}
