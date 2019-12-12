import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/store.css';

class Store extends Component {
    componentDidMount() {
        const { fetchStoreItems } = this.props;
        fetchStoreItems();
    }

    createList() {
        const { items, addItem } = this.props;
        return items.map((item) => {
            return (
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <div className="text-center" style={{ marginTop: '20px' }}>
                            <img width="200" height="200" src={item.image} alt={item.title} />
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="javascript:void(0);">{(item.title).substring(0, 50) + '...'}</a>
                            </h4>
                            <h5>{(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                            <p class="card-text">{(item.description).substring(0, 100) + '...'}</p>
                        </div>
                        <div class="card-footer text-center">
                            <button className="btn btn-primary" onClick={() => addItem(item)}>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h1>Produtos</h1>
                <div className="row store-items">
                    {this.createList()}
                </div>
            </div>
        )
    }
}

Store.propTypes = {
    items: PropTypes.array.isRequired,
    fetchStoreItems: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}

export default Store