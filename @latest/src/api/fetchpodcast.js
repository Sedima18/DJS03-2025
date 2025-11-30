export async function fetchPodcasts() {
  try {
    const response = await fetch("https://podcast-api.netlify.app/");
    if (!response.ok) throw new Error("Failed to fetch podcasts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return null;
  }
}