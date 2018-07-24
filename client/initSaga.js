import sagas from './sagas';
import {all, fork} from 'redux-saga/effects' 
export default function* rootSaga(){
   yield sagas.map((saga)=> fork(saga))
}

