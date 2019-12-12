import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/cart.css';
import {
    Link
} from "react-router-dom";

class Cart extends Component {
    createList() {
        const { items, removeItem, addQuantity, removeQuantity } = this.props;
        return items.map((item) => {
            return (
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src={item.image} alt="prewiew" width="120" height="80" />
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>{item.title}</strong></h4>
                        <h4>
                            <small>{item.description}</small>
                        </h4>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                            <h6><strong>{(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="quantity">
                                <input onClick={() => addQuantity(item)} type="button" value="+" className="plus" />
                                <input type="text" value={item.quantity} className="qty" size="4" disabled={true} />
                                <input onClick={() => removeQuantity(item)} type="button" value="-" className="minus" />
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 text-right">
                            <button onClick={() => removeItem(item)} type="button" className="btn btn-outline-danger btn-xs">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Carrinho</h1>
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link className="btn btn-primary btn-sm pull-right" to="/">Continuar Comprando</Link>
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {this.createList()}
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    removeItem: PropTypes.func.isRequired,
    addQuantity: PropTypes.func.isRequired,
    removeQuantity: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}

export default Cart