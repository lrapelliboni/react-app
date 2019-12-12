import { connect } from 'react-redux'
import Store from '../components/Store'
import { fetchStoreItems, addItem } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    items: state.store.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchStoreItems: () => dispatch(fetchStoreItems()),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store)