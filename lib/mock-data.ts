import type { Brand, ContentPackage, CreditPurchaseRequest, CronRun } from "./types";

export const packages: ContentPackage[] = [
  { id: "starter", name: "Starter", priceMnt: 199000, includedPosts: 4, includedCarousels: 2, includedReels: 0 },
  { id: "growth", name: "Growth", priceMnt: 350000, includedPosts: 10, includedCarousels: 7, includedReels: 4 },
  { id: "pro", name: "Pro", priceMnt: 650000, includedPosts: 15, includedCarousels: 15, includedReels: 8 },
];

export const brands: Brand[] = [
  {
    id: "b1",
    slug: "ai-global-academy",
    name: "AI Global Academy",
    handle: "@aiglobal.mn",
    industry: "AI training",
    logo: "AI",
    health: "on-track",
    package: packages[1],
    credits: { month: "2026-06", posts: { used: 5, total: 10, extra: 0 }, carousels: { used: 3, total: 7, extra: 0 }, reels: { used: 1, total: 4, extra: 0 } },
    plan: { month: "June 2026", total: 21, generated: 9, published: 6, scheduled: 2, processing: 1, failed: 0, nextTopic: "AI agent ашиглах 5 давуу тал", nextDate: "Маргааш 09:00" },
    content: [
      { id: "c1", title: "AI Agent ашиглах 5 давуу тал", caption: "Бизнесийн өдөр тутмын ажлыг AI агент хөнгөвчилнө.", kind: "carousel", platform: "Facebook", status: "published", date: "2026/06/05 20:48", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", url: "#" },
      { id: "c2", title: "Vibe Coding summer camp", caption: "Залуус 14 хоногт апп бүтээж сурна.", kind: "post", platform: "Instagram", status: "scheduled", date: "2026/06/07 09:00", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" },
      { id: "c3", title: "AI CERTs танилцуулга", caption: "Олон улсын AI сертификатын давуу тал.", kind: "reel", platform: "Facebook", status: "processing", date: "2026/06/08 18:00", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800" },
    ],
  },
  {
    id: "b2",
    slug: "luna-brew",
    name: "Luna Brew",
    handle: "@lunabrew.mn",
    industry: "Coffee shop",
    logo: "LB",
    health: "low-credits",
    package: packages[0],
    credits: { month: "2026-06", posts: { used: 4, total: 4, extra: 0 }, carousels: { used: 1, total: 2, extra: 0 }, reels: { used: 0, total: 0, extra: 0 } },
    plan: { month: "June 2026", total: 6, generated: 5, published: 4, scheduled: 1, processing: 0, failed: 0, nextTopic: "Өглөөний сайн кофе", nextDate: "Баасан 08:30" },
    content: [
      { id: "c4", title: "Өглөөний сайн кофе", caption: "Өдрийг сайхан эхлүүлэх нэг аяга кофе.", kind: "post", platform: "Instagram", status: "published", date: "2026/06/04 08:30", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", url: "#" },
      { id: "c5", title: "Coffee subscription", caption: "Сар бүрийн кофены багц.", kind: "carousel", platform: "Facebook", status: "scheduled", date: "2026/06/09 12:00", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800" },
    ],
  },
  {
    id: "b3",
    slug: "postly-mn",
    name: "Postly.mn",
    handle: "@postly.mn",
    industry: "AI content automation",
    logo: "P",
    health: "on-track",
    package: packages[2],
    credits: { month: "2026-06", posts: { used: 9, total: 15, extra: 4 }, carousels: { used: 8, total: 15, extra: 2 }, reels: { used: 3, total: 8, extra: 0 } },
    plan: { month: "June 2026", total: 38, generated: 20, published: 14, scheduled: 4, processing: 2, failed: 1, nextTopic: "AI digital employee", nextDate: "Өнөөдөр 18:00" },
    content: [
      { id: "c6", title: "AI ажилтан гэж юу вэ?", caption: "Брэндийн контентыг автоматжуулах шинэ арга.", kind: "post", platform: "Facebook", status: "published", date: "2026/06/05 19:00", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", url: "#" },
      { id: "c7", title: "Контент эрхийн систем", caption: "Сард хэдэн контент орохыг хянах самбар.", kind: "carousel", platform: "LinkedIn", status: "failed", date: "2026/06/05 11:00", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
    ],
  },
  {
    id: "b4",
    slug: "green-life",
    name: "Green Life",
    handle: "@greenlife.mn",
    industry: "Lifestyle movement",
    logo: "GL",
    health: "needs-plan",
    package: packages[1],
    credits: { month: "2026-06", posts: { used: 2, total: 10, extra: 0 }, carousels: { used: 1, total: 7, extra: 0 }, reels: { used: 0, total: 4, extra: 0 } },
    plan: { month: "June 2026", total: 21, generated: 3, published: 2, scheduled: 0, processing: 0, failed: 0, nextTopic: "Green Citizen ID", nextDate: "Plan needed" },
    content: [
      { id: "c8", title: "Green Citizen ID", caption: "Ногоон амьдралын шинэ иргэншил.", kind: "post", platform: "Facebook", status: "generated", date: "2026/06/03 10:00", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    ],
  },
];

export const creditRequests: CreditPurchaseRequest[] = [
  { id: "r1", brandId: "b2", brandName: "Luna Brew", posts: 5, carousels: 2, reels: 0, amountMnt: 120000, status: "pending", createdAt: "2026/06/06" },
  { id: "r2", brandId: "b3", brandName: "Postly.mn", posts: 10, carousels: 5, reels: 2, amountMnt: 350000, status: "approved", createdAt: "2026/06/04" },
];

export const cronRuns: CronRun[] = [
  { id: "cr1", name: "Daily content generation", status: "success", lastRun: "2026/06/06 08:00", nextRun: "2026/06/07 08:00", affectedBrands: 4 },
  { id: "cr2", name: "Publish scheduled posts", status: "running", lastRun: "2026/06/06 13:00", nextRun: "2026/06/06 18:00", affectedBrands: 2 },
  { id: "cr3", name: "Low credit scanner", status: "success", lastRun: "2026/06/06 09:00", nextRun: "2026/06/07 09:00", affectedBrands: 1 },
];
