export type ContentKind = "post" | "carousel" | "reel";
export type ContentStatus = "generated" | "scheduled" | "published" | "processing" | "failed";
export type BrandHealth = "on-track" | "low-credits" | "needs-plan" | "paused";

export type ContentPackage = {
  id: string;
  name: string;
  priceMnt: number;
  includedPosts: number;
  includedCarousels: number;
  includedReels: number;
};

export type CreditBalance = {
  month: string;
  posts: { used: number; total: number; extra: number };
  carousels: { used: number; total: number; extra: number };
  reels: { used: number; total: number; extra: number };
};

export type ContentItem = {
  id: string;
  title: string;
  caption: string;
  kind: ContentKind;
  platform: "Facebook" | "Instagram" | "LinkedIn";
  status: ContentStatus;
  date: string;
  image: string;
  url?: string;
};

export type MonthlyPlan = {
  month: string;
  total: number;
  generated: number;
  published: number;
  scheduled: number;
  processing: number;
  failed: number;
  nextTopic: string;
  nextDate: string;
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  handle: string;
  industry: string;
  logo: string;
  health: BrandHealth;
  package: ContentPackage;
  credits: CreditBalance;
  plan: MonthlyPlan;
  content: ContentItem[];
};

export type CreditPurchaseRequest = {
  id: string;
  brandId: string;
  brandName: string;
  posts: number;
  carousels: number;
  reels: number;
  amountMnt: number;
  status: "pending" | "approved" | "paid";
  createdAt: string;
};

export type CronRun = {
  id: string;
  name: string;
  status: "success" | "running" | "failed";
  lastRun: string;
  nextRun: string;
  affectedBrands: number;
};
