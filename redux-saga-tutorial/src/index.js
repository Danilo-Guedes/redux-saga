import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import axios from 'axios'

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const sagaMiddleware = createSagaMiddleware()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 


const store = applyMiddleware(sagaMiddleware)(createStore)(reducers, devTools)
// const store = createStore(reducers, devTools, applyMiddleware(sagaMiddleware)) // do not function in this way

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)


