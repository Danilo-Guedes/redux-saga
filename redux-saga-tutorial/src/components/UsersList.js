import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

export default function UsersList({users}) {
    return (
        <ListGroup >
           {users.map((user) => {
               return <ListGroupItem key={user.id}>{user.firstName}</ListGroupItem>
           })}
        </ListGroup>
    )
}
