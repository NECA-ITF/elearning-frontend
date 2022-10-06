
import { Outlet,Navigate } from 'react-router-dom'
function PrivateRoutes({auth}) {
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes