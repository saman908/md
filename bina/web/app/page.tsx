import CategoryChips from "@/components/CategoryChips";
import VideoRow from "@/components/VideoRow";
import { homeRows } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div>
      <CategoryChips />
      {homeRows.map((row) => (
        <VideoRow key={row.title} row={row} />
      ))}
    </div>
  );
}
