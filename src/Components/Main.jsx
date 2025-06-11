import React from "react";

function Main({ fullNav }) {
  const options = [
    "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Live",
    "UPSC",
    "English",
    "React",
    "Javascript",
  ];

  const videoData = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      duration: "12:34",
      avatar: "https://via.placeholder.com/40",
      title: "Sample Video Title That Might Span Two Lines",
      channel: "Channel Name",
      views: "1.2M",
      uploaded: "2 days ago",
    },
    {
      id: 2,
      thumbnail: "https://source.unsplash.com/random/400x300?tech",
      duration: "10:20",
      avatar: "https://via.placeholder.com/40",
      title: "Another Interesting Video on Technology Trends",
      channel: "TechWorld",
      views: "982K",
      uploaded: "1 week ago",
    },
    // Add more video objects as needed
  ];

  return (
    <div className="flex flex-col overflow-x-hidden w-full bg-black">
      {/* Fixed filter bar */}
      <div
        className={`fixed top-16 ${
          fullNav ? "left-60" : "left-0"
        } right-0 z-10 bg-gray-800 text-white px-4 py-2 overflow-x-auto whitespace-nowrap shadow`}
      >
        <div className="flex space-x-4">
          {options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-1 bg-gray-700 hover:bg-gray-800 rounded-2xl text-sm transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Main content below filter bar */}
      <div
        className={`mt-24 p-4 grid gap-6 ${
          fullNav ? "ml-60 grid-cols-3" : "ml-16 grid-cols-4"
        }`}
      >
        {videoData.map((video) => (
          <div key={video.id} className="text-white">
            {/* Video Thumbnail */}
            <div className="relative w-full h-48">
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 px-2 py-0.5 text-xs rounded">
                {video.duration}
              </div>
            </div>

            {/* Video Details */}
            <div className="flex mt-3 gap-3">
              {/* Channel Avatar */}
              <img
                src={video.avatar}
                alt="Channel Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Title and Metadata */}
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm line-clamp-2">
                  {video.title}
                </h2>
                <h4 className="text-gray-400 text-sm">{video.channel}</h4>
                <div className="text-gray-500 text-xs">
                  <span>{video.views} views</span> •{" "}
                  <span>{video.uploaded}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
