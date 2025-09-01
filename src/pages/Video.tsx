import React from 'react';

const videos = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/video/upload/v1756679783/giacomo/ZO9XbgRtea1q04wRRzTUEgSkPPs_WdhJF839uIxBYITStVDejwijR2zuHoeRmjq9wFCAVAA.mp4", alt: "Video 1" },
  { id: 2, src: "https://res.cloudinary.com/thinkdigital/video/upload/v1756679760/giacomo/oka9UtI7DpeIPVRkx8LEMiMjs_Ix-5UB80JQZ8WnO6vurjeuxauPyNDJJIdNcFV0JfUoA.mp4", alt: "Video 2" },
];

const Video = () => {
  return (
    <div className="snap-container">
      {videos.map((video, index) => (
        <div key={video.id} className="snap-item" style={{ marginBottom: index === videos.length - 1 ? 0 : 110 }}>
          <video src={video.src} controls autoPlay loop className="max-h-full max-w-full" />
        </div>
      ))}
    </div>
  );
};

export default Video;
