import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../module/sagas";
import globalConfigReducer from "../module/globalConfigReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default () => {
    const store = createStore(
        combineReducers({
            globalConfig: globalConfigReducer
        }),
        composeEnhancers(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);
    return store;
};
