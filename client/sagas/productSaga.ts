import {delay} from 'redux-saga';
import { take,call,put, cancelled } from 'redux-saga/effects';
import {ProjectAPI} from '../api/dataAPI';
import {Actions} from '../actions/actions';
export default function* getNewArrivals(){
  try{
    yield take('GET_NEW_ARRIVALS');
    const response=yield call(ProjectAPI.getNewArrivals);
    yield put(Actions.loadNewArrivals(response.body));
  }
  finally{
    console.log("Cancelled", yield cancelled())
  }
}