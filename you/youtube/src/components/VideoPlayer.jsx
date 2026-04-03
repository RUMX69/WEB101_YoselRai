// VideoPlayer: embeds a YouTube iframe using the video ID passed as a prop

export default function VideoPlayer({ videoId }) {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}