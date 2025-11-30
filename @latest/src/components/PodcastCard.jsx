export default function PodcastCard({ podcast, genres }) {
  const genreNames = podcast.genres
    ? podcast.genres.map((id) => genres[id]).join(", ")
    : "Unknown";

  const updatedDate = podcast.updated
    ? new Date(podcast.updated).toLocaleDateString()
    : "N/A";

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center"
    }}>
      <img
        src={podcast.image}
        alt={podcast.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{podcast.title}</h3>
      <p>Seasons: {podcast.seasons}</p>
      <p>Genres: {genreNames}</p>
      <p>Updated: {updatedDate}</p>
    </div>
  );
}