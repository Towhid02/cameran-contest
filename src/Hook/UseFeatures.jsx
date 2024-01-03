import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";



const UseFeatures = () => {
    const axiosPublic = UseAxiosPublic();

   
    const {data: features = [], isPending: loading, refetch} = useQuery({
        queryKey: ['features'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/features');
            return res.data;
        }
    })
    return [features,
         loading, 
         refetch
         ];
};

export default UseFeatures;