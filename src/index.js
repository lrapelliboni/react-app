import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const preloadState = () => {
    return {
        cart: {
            total: 0,
            items: [
                // {"id":1010,"title":"SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação...","description":"Reforçado com uma controladora de última geração para velocidades de leitura e gravação de até 500MB/s e 450MB/s, este SSD é 10x mais rápido do que um disco rígido tradicional para melhor desempenho, resposta ultra-rápida em multitarefas e um computador mais rápido de modo geral.","price":269.9,"image":"http://placehold.it/200x200","quantity":1},
                // {"id":1010,"title":"SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação...","description":"Reforçado com uma controladora de última geração para velocidades de leitura e gravação de até 500MB/s e 450MB/s, este SSD é 10x mais rápido do que um disco rígido tradicional para melhor desempenho, resposta ultra-rápida em multitarefas e um computador mais rápido de modo geral.","price":269.9,"image":"http://placehold.it/200x200","quantity":2}
            ]
        },
        store: {
            items: []
        }
    }
}
const store = configureStore(preloadState())

render(<Root store={store} />, document.getElementById('root'))
