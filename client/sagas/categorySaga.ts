import {delay} from 'redux-saga';
import { take,call,put } from 'redux-saga/effects';
import {ProjectAPI} from '../api/dataAPI';
import {Actions} from '../actions/actions';
export default function* getCategory(){
   yield take('GET_CATEGORY_DATA');
   const response=yield call(ProjectAPI.getCategoryData);
   yield put(Actions.loadCategory(response.data));
}