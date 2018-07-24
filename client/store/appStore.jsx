import {createStore, applyMiddleware,compose    } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from '../reducers/reducers';
import INITIAL_STATE from '../state/defaultState';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../initSaga';
/*********** Create Logger   *******************/
const logger=createLogger();
const loggerMiddleware = createLogger();
const sagaMiddleWare=createSagaMiddleware();
var middleWares=[thunk,promiseMiddleware,logger,sagaMiddleWare];
const composables = [applyMiddleware(...middleWares),
    window.devToolsExtension ?window.devToolsExtension() : f=>f
    ];
const enhancer = compose(... composables);
const store = createStore(
    allReducers,
    INITIAL_STATE,
    enhancer
);
sagaMiddleWare.run(rootSaga);
module.exports=store;