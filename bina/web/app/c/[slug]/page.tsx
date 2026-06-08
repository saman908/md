import { categories } from "@/lib/categories";
import CategoryChips from "@/components/CategoryChips";

// Step 1: a placeholder page for each category.
// In a later step every category gets its OWN dynamic experience
// (Movies = Netflix-style, Music = Spotify-style, etc.).
export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);

  return (
    <div>
      <CategoryChips />
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <div className="text-6xl">{category?.icon ?? "📁"}</div>
        <h1 className="mt-4 text-2xl font-bold">
          {category?.name ?? params.slug}
        </h1>
        <p className="mt-2 max-w-md text-bina-muted">
          ئەم کاتێگۆریە لە هەنگاوەکانی داهاتوودا ڕووکاری تایبەتی خۆی دەبێت.
          (بۆ نموونە: فیلم → ستایلی نێتفلیکس، مۆسیقا → ستایلی سپۆتیفای).
        </p>
      </div>
    </div>
  );
}
