const TRENDING_URL = "https://wcpw-network.vercel.app/api/trending";

export async function fetchTrending() {
  const response = await fetch(TRENDING_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch trending");
  }

  return response.json();
}