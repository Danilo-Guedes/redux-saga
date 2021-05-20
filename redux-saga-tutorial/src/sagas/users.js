import {takeEvery, call, fork} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

//WORKER-SAGA
function* getUsers () {
    try {
        const result = yield call(api.getUsers) //waits untill it finish to go to the next line of code
        console.log(result);
    } catch (error) {
        
    }
   
}

//WATCHER-SAGA
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const userSagas = [
    fork(watchGetUsersRequest)
]

export default userSagas

