import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/top-menu.css'
import classNames from 'classnames'
import {
    Link
} from "react-router-dom";

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    calculateSum() {
        const { items } = this.props;
        let sum = items.reduce(function (prevVal, elem) {
            return prevVal + (elem.quantity * elem.price);
        }, 0);
        return sum.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    calculateQuantity() {
        const { items } = this.props;
        let sum = items.reduce(function (prevVal, elem) {
            return prevVal + elem.quantity;
        }, 0);
        return sum;
    }

    createList() {
        const { items } = this.props;
        return items.map((item) => {
            return (
                <li className="clearfix">
                    <span className="item-name">{(item.title).substring(0, 50) + '...'}</span>
                    <span className="item-price">{(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                    <span className="item-quantity">Quantidade: {item.quantity}</span>
                </li>
            );
        })
    }

    toggleCartList() {
        const { open } = this.state;
        this.setState({
            open: !open
        })
    }

    createMenu() {
        const { open } = this.state;
        return (
            <div>
                <nav>
                    <div className="top-menu-container">
                        <ul className="navbar-right">
                            <li><a href="javascript:void(0);" onClick={() => this.toggleCartList()} id="cart"><i className="fa fa-shopping-cart-menu"></i> Carrinho <span className="badge">{this.calculateQuantity()}</span></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="top-menu-container">
                    <div className={
                        classNames({
                            'shopping-cart-menu': true,
                            'active': open
                        })
                    }>
                        <div className="shopping-cart-menu-header">
                            <i className="fa fa-shopping-cart-menu cart-icon"></i><span className="badge">{(this.calculateQuantity() > 0) ? this.calculateQuantity() + ' Item (s)' : 'Seu carrinho está vazio'}</span>
                            <div className="shopping-cart-menu-total">
                                <span className="lighter-text">Total:</span>&nbsp;
                                <span className="main-color-text">{this.calculateSum()}</span>
                            </div>
                        </div>

                        <ul className="shopping-cart-menu-items">
                            {this.createList()}
                        </ul>
                        <Link onClick={() => this.toggleCartList()} className="btn btn-primary" to="/cart">Ver Carrinho</Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.createMenu()
        )
    }
}

TopMenu.propTypes = {
    items: PropTypes.array.isRequired
}

export default TopMenu


