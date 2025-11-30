import PodcastCard from "./PodcastCard.jsx";

export default function PodcastGrid({ podcasts, genres }) {
  if (!podcasts || podcasts.length === 0) {
    return <p>No podcasts available</p>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem"
    }}>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}