import type { Video } from "@/lib/mockData";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a href="#" className="group block w-72 shrink-0">
      {/* Thumbnail (placeholder gradient until real thumbnails exist) */}
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br ${video.gradient}`}
      >
        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
          {video.duration}
        </span>
      </div>

      {/* Meta */}
      <div className="mt-2 flex gap-3">
        <div className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-bina-card" />
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug group-hover:text-white">
            {video.title}
          </h3>
          <p className="mt-1 text-xs text-bina-muted">{video.channel}</p>
          <p className="text-xs text-bina-muted">{video.views}</p>
        </div>
      </div>
    </a>
  );
}
