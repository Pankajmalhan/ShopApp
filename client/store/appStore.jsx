import {createStore, applyMiddleware,compose    } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from '../reducers/reducers';
import INITIAL_STATE from '../state/defaultState';

/*********** Create Logger   *******************/
const logger=createLogger();
const loggerMiddleware = createLogger();
var middleWares=[thunk,promiseMiddleware,logger];
const composables = [applyMiddleware(...middleWares),
    window.devToolsExtension ?window.devToolsExtension() : f=>f
    ];
const enhancer = compose(... composables);
const store = createStore(
    allReducers,
    INITIAL_STATE,
    enhancer
);

module.exports=store;