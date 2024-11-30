import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./useAxiosPublic";
import useCurrentUser from "./useCurrentUser";
import Loading from "../ui/shared/Loading";


const useMyCarts = () => {

    const { currentUser } = useCurrentUser();

    const { data: myCarts, refetch, isLoading } = useQuery({
        queryKey: ["myCarts"],
        queryFn: async () => {
            const response = await axiosPublic.get(`/carts/${currentUser?.email}`)
            return response.data;
        }
    })

    // Handle loading state
    if (isLoading) {
        return <Loading />;
    }

    // Sort carts by date in descending order (recent first)
    const sortedMyCarts = myCarts?.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { sortedMyCarts, myCarts, myCartsRefetch: refetch, currentUser };
};

export default useMyCarts;