/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";


const AdminRoutes = ({ children }) => {

    const { currentUser } = useCurrentUser();
    const location = useLocation()

    if (currentUser?.role === 'admin') {
        return children
    }
    return <Navigate to="/dashboard/welcome" state={location?.pathname || "/"}></Navigate>
};

export default AdminRoutes;