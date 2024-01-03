
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseContest = () => {
    const axiosPublic = UseAxiosPublic();

    const {data: contests = [], isPending: loading, refetch} = useQuery({
        queryKey: ['contests'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/contests');
            return res.data;
        }
    })

    return [contests, loading, refetch ];
};

export default UseContest;




 