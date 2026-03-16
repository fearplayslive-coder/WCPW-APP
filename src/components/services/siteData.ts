const SITE_DATA_URL = "https://wcpw-network.vercel.app/data/site-data.json";

export async function fetchSiteData() {
  const response = await fetch(SITE_DATA_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch site data");
  }

  return response.json();
}