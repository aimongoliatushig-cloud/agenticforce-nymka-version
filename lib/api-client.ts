import { brands, creditRequests, cronRuns, packages } from "./mock-data";

// Frontend-only placeholder layer.
// Backend pass will replace these functions with real API calls.
export async function getBrands() {
  return brands;
}

export async function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug) || brands[0];
}

export async function getBrandById(id: string) {
  return brands.find((brand) => brand.id === id) || brands[0];
}

export async function getPackages() {
  return packages;
}

export async function getCreditRequests() {
  return creditRequests;
}

export async function getCronRuns() {
  return cronRuns;
}
