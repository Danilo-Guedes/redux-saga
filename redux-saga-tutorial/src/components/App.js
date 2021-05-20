import { useEffect } from 'react'
import { getUsersRequest } from '../actions/users'
import { useDispatch } from 'react-redux'

/*
LEARNING ABOUT GENERATORS
function* testing() {
    while (true) {
        yield 1
        yield 2
        yield 3
    }
}
*/

function App() {
    /*
    // const iterator = testing()
    // console.log(iterator.next())
    // console.log(iterator.next())
    // console.log(iterator.next())
    // console.log(iterator.next())
*/

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersRequest())
    }, [dispatch])

    return <div>DANILO</div>
}

export default App
