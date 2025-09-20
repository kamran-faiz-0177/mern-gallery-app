import React, { useEffect, useState } from "react";
import url from "../utensils";

const Gallery = () => {
    const [image, setImage] = useState([]);

    const handleFetchImage = async () => {
        try {
            const api_url = `${url}/api/gallery/fetch`;
            const response = await fetch(api_url);
            const result = await response.json();
            const { success, message, error, imgList } = result;
            if (success) {
                console.log(message, imgList);
                setImage(imgList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log(id)
            const api_url = `${url}/api/gallery/delete/${id}`;
            const obj = {
                method: "DELETE",
            }
            const response = await fetch(api_url, obj);
            const result = await response.json();
            const { success, message, error, imgList } = result;
            if (success) {
                console.log(message);
                setImage(imgList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleFetchImage();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
                Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {image.map((val, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        <div className="w-full h-56 overflow-hidden">
                            <img
                                src={val.imgUrl}
                                alt={val.title || "Uploaded Image"}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                            />
                        </div>

                        
                        <div className="p-4 flex items-center gap-5 justify-center">
                            <p className="text-center text-gray-700 font-semibold truncate">
                                {val.title || "Untitled"}
                            </p>
                            <button className="bg-red-700 text-white w-[100px] h-[30px] rounded-sm" onClick={() => handleDelete(val._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
