// Temporary mock data for Step 1 so the homepage has something to show.
// This will be replaced by real data from the Bina backend API in a later step.

export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  gradient: string; // placeholder thumbnail (until real thumbnails exist)
};

export type Row = {
  title: string;
  videos: Video[];
};

const g = [
  "from-rose-500 to-orange-500",
  "from-sky-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-500 to-purple-600",
  "from-amber-500 to-red-500",
  "from-cyan-500 to-blue-600",
];

function make(prefix: string, items: [string, string, string, string][]): Video[] {
  return items.map((it, i) => ({
    id: `${prefix}-${i}`,
    title: it[0],
    channel: it[1],
    views: it[2],
    duration: it[3],
    gradient: g[i % g.length],
  }));
}

export const homeRows: Row[] = [
  {
    title: "ترێندینگ ئەمڕۆ",
    videos: make("trend", [
      ["دیمانەی تایبەت لەگەڵ هونەرمەندێکی ناودار", "کەناڵی بینا", "١٢٤ هەزار بینین", "12:04"],
      ["کوردستان لە وێنەدا — دۆکیۆمێنتاری", "بینا دۆک", "٨٩ هەزار بینین", "24:51"],
      ["باشترین گۆڵەکانی هەفتە", "وەرزشی بینا", "٢٠١ هەزار بینین", "8:32"],
      ["فێرکاری: دەستپێکردن بە بەرنامەنووسی", "ئەکادیمیای بینا", "٤٥ هەزار بینین", "18:10"],
    ]),
  },
  {
    title: "فیلم و زنجیرەی نوێ",
    videos: make("movie", [
      ["فیلمی کوردی — شەوی دوور", "سینەمای بینا", "٣٠٠ هەزار بینین", "1:42:00"],
      ["زنجیرەی نوێ — ئەڵقەی ١", "درامای بینا", "١٥٦ هەزار بینین", "41:22"],
      ["کارتۆنی منداڵان", "بینا کیدز", "٥١٢ هەزار بینین", "11:09"],
      ["فیلمی دۆکیۆمێنتاری سروشت", "بینا دۆک", "٧٨ هەزار بینین", "52:30"],
    ]),
  },
  {
    title: "مۆسیقا و گۆرانی",
    videos: make("music", [
      ["گۆرانی نوێ — هەناری دڵ", "مۆسیقای بینا", "٩٨٠ هەزار بینین", "3:48"],
      ["میکسی مۆسیقای کوردی", "بینا میوزیک", "١.٢ ملیۆن بینین", "1:02:00"],
      ["کۆنسێرتی زیندوو", "بینا لایڤ", "٤٤٠ هەزار بینین", "58:11"],
      ["مۆسیقای ئارامبەخش", "بینا ڕیلاکس", "٢٢٠ هەزار بینین", "2:00:00"],
    ]),
  },
];
