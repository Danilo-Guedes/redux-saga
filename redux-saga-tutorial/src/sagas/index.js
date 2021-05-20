import UsersSagas from './users'
import {all} from 'redux-saga/effects' 

export default function* rootSaga() {
    yield all([  // all is allowing all forked procees be created in paralel
        ...UsersSagas
    ])
}

