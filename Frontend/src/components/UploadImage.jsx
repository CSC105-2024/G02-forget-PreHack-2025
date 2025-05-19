import React, {Fragment, useState} from "react";
import { FiUpload } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const UploadImage = ({showUpload}) => {
    const [file, setFile] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleChange = async(e) => {

        const file = e.target.files[0]
        
        setLoading(true);

        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'FoodImage'); //your upload preset name
        data.append('cloud_name', 'dulhv9arc'); //your cloud name
        
        //cloud name in url
        const result  = await fetch('https://api.cloudinary.com/v1_1/dulhv9arc/image/upload', {
            method: 'POST',
            body: data,
        })

        const img = await result.json();
        console.log(img.url)

        setFile(img.url);
        setLoading(false);
        setSuccess(true);
    }

    return (
        <>
        <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
            <div className='flex justify-center'>
                <div className="bg-white border-3 border-dashed border-[#A9A9A9] w-175 px-5 py-20 rounded-lg drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-end -mt-15 mr-5">
                        <ImCross onClick={() => showUpload(false)} className="text-[24px] cursor-pointer"/>
                    </div>
                    <div className="flex flex-col items-center my-10">
                        {loading ? <p className="text-[64px] mb-8">Loading...</p> : <FiUpload className="text-[120px] mb-8"/>}
                        <label htmlFor="file-upload" className="text-[20px] border-1 text-white bg-black px-5 py-1 rounded-lg cursor-pointer">Upload File</label>
                        <input type="file" id="file-upload" onChange={handleChange} className="hidden"/>
                        <img src={file} />
                        {success && <p className="text-green-600 text-[24px] font-bold">Success!!</p>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default UploadImage