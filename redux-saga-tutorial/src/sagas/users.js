import { takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

//WORKER-SAGA
function* getUsers() {
    try {
        const result = yield call(api.getUsers) //waits untill it finishes to go to the next line of code
        // console.log(result);
        yield put(  // put me pareceu ser qaudno quer jogar dado para o reducer e colocar no state
            actions.getUsersSuccess({
                items: result.data.data,
            })
        )
    } catch (error) {}
}

//WATCHER-SAGA
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action) {
    // console.log(action)
    // yield
    try {
        yield call(api.createUser, {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        })      
        yield call(getUsers)
    } catch (error) {
        yield call(console.log(error))
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

const userSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)]

export default userSagas
