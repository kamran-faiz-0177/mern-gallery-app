import React from "react";
import url from "../utensils";
import { useNavigate } from "react-router-dom";


const Upload = () => {
    const navigate = useNavigate();

    const handleSubmit = async (req, res) => {
        try {
            const api_url = `${url}/api/gallery/upload`;
            const obj = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ abc }),
            }
            const response = await fetch(api_url, obj);
            const result = response.json();
            const { success, message, error } = result;
            if (success) {
                console.log(message);
                navigate("/upload");
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-800">Upload Image</h1>

                {/* Upload box */}
                <label
                    htmlFor="file-upload"
                    className="flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
                >
                    <svg
                        className="w-12 h-12 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5.002 5.002 0 0115 7h1a5 5 0 010 10h-1m-4-3v6m0-6l-3 3m3-3l3 3"
                        />
                    </svg>
                    <span className="text-gray-600 text-sm">Click to upload or drag & drop</span>
                    <input id="file-upload" type="file" className="hidden" />
                </label>

                {/* Button */}
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Upload;
