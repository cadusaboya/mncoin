"use client"

import YouTubeEmbed from './YoutubeEmbed';

const VideoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 pl-16">
      <YouTubeEmbed videoId="VU3F018_l3s" />
      </div>
      <div className="flex-1 px-24 mt-5">
        <h1 className=" text-xl font-extrabold text-gray-600 mt-5">Watch our video presentation</h1>
        <p className="mt-1 text-gray-600 pr-48">
           This video was filmed this year using a drone to capture the vastness of our mining operations. It showcases the scale of our operations and the technology we use to extract manganese.
        </p>

        <h1 className=" text-xl font-extrabold text-gray-600 pt-28">Leaders in the mining and tech fields</h1>
        <p className="mt-1 text-gray-600 pr-48">
            Our founders consist in a team of mining experts and tech entrepreneurs. We have a combined experience of over 50 years in the mining industry and have been involved in the development of blockchain technology for over a decade.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;