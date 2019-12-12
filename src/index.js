import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const preloadState = () => {
    return {
        cart: {
            items: []
        },
        store: {
            items: [],
            loaded: false
        }
    }
}
const store = configureStore(preloadState())

render(<Root store={store} />, document.getElementById('root'))
