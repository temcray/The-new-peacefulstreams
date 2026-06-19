import "./App.css";

export default function VideoCard() {
  return (
    <div className="video-card">
      <div className="video-card-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/jVf08N1HwSE"
            title="Encouragement Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-text">
          <h2>Encouraging Message</h2>
          <h3>Bible Verse</h3>
          <p>
            “The Lord is my light and my salvation—whom shall I fear? The Lord
            is the stronghold of my life—of whom shall I be afraid?”
          </p>
          <p>— Psalm 27:1</p>
        </div>
      </div>
    </div>
  );
}
