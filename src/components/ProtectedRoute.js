import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { checkLogin } from 'services/api/auth/actions'

const ProtectedRoute = props => {
    if (!checkLogin()) {
        return <Redirect to = '/auth' />
    } else {
        return <Route { ...props } />
    }
}

export default ProtectedRoute