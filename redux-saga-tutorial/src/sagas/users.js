import {takeEvery} from 'redux-saga/effects'
import * as actions from '../actions/users'

//WORKER-SAGA
function getUsers () {
    try {
        
    } catch (error) {
        
    }
   
}

//WATCHER-SAGA
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}
