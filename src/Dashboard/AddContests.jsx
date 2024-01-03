import { useForm } from "react-hook-form";
import UseAxiosPublic from "../Hook/UseAxiosPublic";
import UseAxiosSecure from "../Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../Shared/SectionTitle";

const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddContests = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const ContestItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                contest: data.contest,
                image: res.data.data.display_url
            }
            // 
            const ContestRes = await axiosSecure.post('/contests', ContestItem);
            console.log(ContestRes.data)
            if(ContestRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the Contest.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };
    return (
        <div>
            <SectionTitle heading="Add Contest"  ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Contest Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Contest Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="popular">Popular</option>
                                <option value="normal">Normal</option>
                                
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* contest details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Details</span>
                        </label>
                        <textarea {...register('contest')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Contest 
                    </button>
                </form>
            </div> 
        </div>
    );
};

export default AddContests;