import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Cart from './Cart'
import Store from './Store'
import TopMenu from './TopMenu'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <TopMenu />
      <Route path="/" exact={true} component={Store} />
      <Route path="/cart" component={Cart} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root