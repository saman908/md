import type { Row } from "@/lib/mockData";
import VideoCard from "@/components/VideoCard";

export default function VideoRow({ row }: { row: Row }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-bold">{row.title}</h2>
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {row.videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
