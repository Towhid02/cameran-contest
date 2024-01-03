import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseGallery = () => {

    const axiosPublic = UseAxiosPublic();

    const {data: gallery = [], isPending: loading, refetch} = useQuery({
        queryKey: ['gallery'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/gallery');
            return res.data;
        }
    })

    return [gallery, loading, refetch ];
};

export default UseGallery;