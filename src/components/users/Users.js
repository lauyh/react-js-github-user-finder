import React from 'react'
import UserItems from './UserItems'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'

function userComponent (users) {
    return (
    <div style={userStyle}>
        {users.map(user => 
            (<UserItems key={user.id} user={ user }/>)
        )  }
    </div>)
}
const Users = ({loading, users}) => {

    return (
        loading ? <Spinner/> : userComponent(users)
    )
    
}

// add rules
Users.propTypes = {
    users: PropTypes.array.isRequired,
}

// css style
const userStyle ={ 
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
