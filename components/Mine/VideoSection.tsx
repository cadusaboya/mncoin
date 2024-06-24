import YouTubeEmbed from './YouTubeEmbed';

const VideoSection = () => {
  return (
    <div className="flex flex-col px-4 lg:px-24 lg:items-center justify-center lg:flex-row">
      <div className="flex-1">
        <YouTubeEmbed videoId="VU3F018_l3s" />
      </div>
      <div className="flex-1 lg:pl-24 mt-5 lg:mt-0">
        <h1 className="text-lg md:text-xl font-extrabold text-gray-600">
          Watch our video presentation
        </h1>
        <p className="mt-1 text-gray-600">
          This video was filmed this year using a drone to capture the vastness of our mining operations. It showcases the scale of our operations and the technology we use to extract manganese.
        </p>

        <h1 className="text-lg md:text-xl font-extrabold text-gray-600 pt-16 lg:pt-28">
          Leaders in the mining and tech fields
        </h1>
        <p className="mt-1 text-gray-600">
          Our founders consist of a team of mining experts and tech entrepreneurs. We have a combined experience of over 50 years in the mining industry and have been involved in the development of blockchain technology for over a decade.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;