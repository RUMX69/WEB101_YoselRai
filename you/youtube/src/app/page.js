import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import VideoInfo from "@/components/VideoInfo";
import Description from "@/components/Description";
import CommentSection from "@/components/CommentSection";
import RecommendationCard from "@/components/RecommendationCard";
import { videoData, commentsData, recommendationsData } from "@/data/mockData";

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Main content: two-column layout on desktop, single column on mobile */}
      <main className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-6">

        {/* Left column: video + info + comments */}
        <div className="flex-1 min-w-0">
          <VideoPlayer videoId={videoData.id} />
          <VideoInfo video={videoData} />
          <Description text={videoData.description} />
          <CommentSection comments={commentsData} />
        </div>

        {/* Right column: recommendations sidebar */}
        <aside className="w-full lg:w-96 flex flex-col gap-3">
          <h2 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
            Up next
          </h2>
          {recommendationsData.map((video) => (
            <RecommendationCard key={video.id} video={video} />
          ))}
        </aside>

      </main>
    </div>
  );
}