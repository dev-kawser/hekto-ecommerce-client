import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./useAxiosPublic";
import useCurrentUser from "./useCurrentUser";


const useMyCarts = () => {

    const { currentUser } = useCurrentUser();

    const { data: myCarts, refetch } = useQuery({
        queryKey: "myCarts",
        queryFn: async () => {
            const response = await axiosPublic.get(`/carts/${currentUser?.email}`)
            return response.data;
        }
    })

    // Sort carts by date in descending order (recent first)
    const sortedMyCarts = myCarts?.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { sortedMyCarts, myCarts, myCartsRefetch: refetch };
};

export default useMyCarts;