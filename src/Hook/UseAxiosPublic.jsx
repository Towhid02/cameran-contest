import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://contest-server-six.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;