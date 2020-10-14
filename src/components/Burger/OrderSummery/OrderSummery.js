import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component {
    componentWillUpdate() {
        console.log('[OrderSummery] will update');
    }


    render () {

        const ingredientSummery = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        })

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to checkout? </p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTENUE</Button>
        </Aux>
        );
    }
}

export default OrderSummery; 