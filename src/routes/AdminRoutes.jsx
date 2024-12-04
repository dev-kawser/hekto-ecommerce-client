/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";


const AdminRoutes = ({ children }) => {

    const { currentUser } = useCurrentUser();

    if (currentUser?.role === 'admin') {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default AdminRoutes;