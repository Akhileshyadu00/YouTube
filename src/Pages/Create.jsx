import React from "react";
import { useParams, Link} from "react-router-dom";
import { MdOutlineFeedback, MdOutlineCancel } from "react-icons/md";

function Create() {
  const { id } = useParams(); // Get user ID from URL

  return (
    <div className="bg-black text-white min-h-screen px-6 pt-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Upload Video for User ID: {id}</h1>
        <div className="flex gap-4 text-2xl">
          <MdOutlineFeedback
            className="cursor-pointer hover:text-gray-400"
            title="Feedback"
          />
          <MdOutlineCancel
            className="cursor-pointer hover:text-red-500"
            title="Cancel"
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-md">
          <form>
            {/* Video Title */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold">
                Video Title
              </label>
              <input
                type="text"
                placeholder="Enter a title..."
                className="w-full p-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold">
                Description
              </label>
              <input
                type="text"
                placeholder="Enter Description..."
                className="w-full p-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold">
                Category
              </label>
              <input
                type="text"
                placeholder="Enter Category..."
                className="w-full p-2 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            {/* Video Upload */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold">
                Video File
              </label>
              <input
                type="file"
                accept="video/*"
                className="w-full text-sm text-gray-300 file:bg-gray-700 file:text-white file:border-none file:px-4 file:py-2 file:rounded cursor-pointer"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition text-center"
              >
                Upload Video
              </button>
              <Link to="/">
              <button
                type="button"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition text-center"
              >
                Home
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
