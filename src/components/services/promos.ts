const PROMOS_URL = "https://wcpw-network.vercel.app/api/promos";

export async function fetchPromos() {
  const response = await fetch(PROMOS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch promos");
  }

  return response.json();
}