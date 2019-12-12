import { connect } from 'react-redux'
import TopMenu from '../components/TopMenu'

const mapStateToProps = (state, ownProps) => ({
    items: state.cart.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu)