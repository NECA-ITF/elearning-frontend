import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

function PrivateRoutes() {
    //declare the auth
    let auth = {token:false}
    //ddeclare the navigate
    const navigate = useNavigate()
    return (
        auth.token ? <Outlet /> : navigate("/login")
    )
}

export default PrivateRoutes