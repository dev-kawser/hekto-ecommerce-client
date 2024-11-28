import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosPublic from "./useAxiosPublic";

const useCurrentUser = () => {
    const { user } = useAuth();

    const { data: currentUser, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            if (!user?.email) return null;
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
        onError: (err) => {
            console.error("Error fetching user data:", err);
        },
    });

    return { currentUser, refetchCurrentUser: refetch };
};

export default useCurrentUser;