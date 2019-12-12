import { connect } from 'react-redux'
import { addItem, removeItem, addQuantity, removeQuantity } from '../actions'
import Cart from '../components/Cart'

const mapStateToProps = (state, ownProps) => ({
    items: state.cart.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addQuantity: (item) => dispatch(addQuantity(item)),
    removeQuantity: (item) => dispatch(removeQuantity(item))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)