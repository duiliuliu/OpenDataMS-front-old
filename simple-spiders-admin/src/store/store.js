import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import createSagaMiddleware, {
    END
} from 'redux-saga'
import rootReducer from '../reducer';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                sagaMiddleware,
            ),
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer').default
            store.replaceReducer(nextRootReducer)
        })
    }
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}