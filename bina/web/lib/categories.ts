export type Category = {
  slug: string;
  name: string;
  icon: string;
};

// The core navigation categories of the Bina platform.
// (Step 1: navigation shell only — each will later get its own dynamic experience.)
export const categories: Category[] = [
  { slug: "home", name: "ماڵەوە", icon: "🏠" },
  { slug: "movies", name: "فیلم و زنجیرە", icon: "🎬" },
  { slug: "music", name: "مۆسیقا", icon: "🎵" },
  { slug: "kids", name: "منداڵان", icon: "🧸" },
  { slug: "gaming", name: "یاری", icon: "🎮" },
  { slug: "sports", name: "وەرزش", icon: "⚽" },
  { slug: "islamic", name: "ئیسلامی", icon: "🕌" },
  { slug: "news", name: "هەواڵ", icon: "📰" },
  { slug: "podcast", name: "پۆدکاست", icon: "🎙️" },
  { slug: "library", name: "کتێبخانە", icon: "📚" },
];
