import { useEffect } from 'react'
import { getUsersRequest, createUserRequest } from '../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import UsersList from './UsersList'
import NewUserForm from './NewUserForm'

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
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    function handleSubmit({ firstName, lastName }) {
        // console.log({firstName, lastName})
        dispatch(
            createUserRequest({
                firstName,
                lastName
            })
        )
    }

    useEffect(() => {
        dispatch(getUsersRequest())
    }, [dispatch])

    return (
        <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
            <NewUserForm onSubmit={handleSubmit} />
            <UsersList users={users.items} />
        </div>
    )
}

export default App
