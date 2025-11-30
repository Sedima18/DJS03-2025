import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { fetchPodcasts } from "./api/fetchPodcast.js";
import { genres } from "./data.js";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcasts();
        if (!data) throw new Error("No podcasts found");
        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        {loading && <p>Loading podcasts...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <PodcastGrid podcasts={podcasts} genres={genres} />}
      </main>
    </>
  );
}