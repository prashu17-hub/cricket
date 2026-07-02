const CONFETTI_COLORS = [
  "var(--heading-c1)",
  "var(--heading-c2)",
  "var(--heading-c3)",
  "var(--heading-c4)",
  "var(--heading-c5)",
]

const confettiPieces = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 98}%`,
  delay: `${(i % 12) * 0.08}s`,
  duration: `${2 + (i % 6) * 0.4}s`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  size: 6 + (i % 5) * 3,
  rotate: (i * 47) % 360,
}))

function Congratulations({ videoName, videoLikes, likeTarget }) {
  const title = videoName?.trim() || "Untitled video"

  return (
    <div className="congrats-wrap" role="status" aria-live="polite">
      <div className="confetti-layer" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              backgroundColor: piece.color,
              width: `${piece.size}px`,
              height: `${piece.size * 0.6}px`,
              "--confetti-rotate": `${piece.rotate}deg`,
            }}
          />
        ))}
      </div>

      <div className="congrats-card">
        <div className="congrats-rays" aria-hidden="true" />
        <div className="congrats-ring" aria-hidden="true" />

        <span className="congrats-emoji" aria-hidden="true">
          🎉
        </span>
        <p className="congrats-kicker">Target reached</p>
        <h4 className="congrats-title">Congratulations!</h4>
        <p className="congrats-subtitle">
          <strong>{title}</strong> hit {likeTarget} likes and is trending on your
          channel.
        </p>
        <p className="congrats-stats">
          <span className="congrats-stat-pill">{videoLikes} total likes</span>
          <span className="congrats-stat-pill">Goal: {likeTarget}</span>
        </p>

        <div className="congrats-sparkles" aria-hidden="true">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  )
}

export default Congratulations
