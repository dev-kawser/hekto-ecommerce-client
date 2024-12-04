import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../ui/shared/Loading";

const ManageUsers = () => {
    const { data: users, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axiosPublic.get("/users");
            return response.data;
        },
    });

    if (isLoading) return <Loading />;
    if (isError)
        return (
            <div className="text-center text-red-600 mt-5">
                Failed to load users. Please try again.
            </div>
        );

    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-5">Manage Users</h2>
            {users?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-purple text-white">
                            <tr>
                                <th className="p-3 border border-gray-300">#</th>
                                <th className="p-3 border border-gray-300">Photo</th>
                                <th className="p-3 border border-gray-300">Name</th>
                                <th className="p-3 border border-gray-300">Email</th>
                                <th className="p-3 border border-gray-300">Role</th>
                                <th className="p-3 border border-gray-300">Address</th>
                                <th className="p-3 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, index) => (
                                <tr key={user._id} className="text-center">
                                    <td className="p-3 border border-gray-300">{index + 1}</td>
                                    <td className="p-3 border border-gray-300">
                                        <img
                                            src={user.photo}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full mx-auto"
                                        />
                                    </td>
                                    <td className="p-3 border border-gray-300">{user.name}</td>
                                    <td className="p-3 border border-gray-300">{user.email}</td>
                                    <td className="p-3 border border-gray-300 capitalize">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${user.role === "admin"
                                                ? "bg-green-400 text-green-900"
                                                : "bg-blue text-white"
                                                }`}>
                                            {user.role === "admin" ? "Admin" : "User"}
                                        </span>
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        {user.address}, {user.city}, {user.mobileNumber}
                                    </td>
                                    <td className="p-3 border border-gray-300">
                                        <button
                                            className="bg-red text-white px-3 py-1 rounded hover:bg-red-700">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-lg text-gray-600">No users found.</p>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;
