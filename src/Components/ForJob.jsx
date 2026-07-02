import { useEffect, useState } from "react"
import Congratulations from "./Congratulations"

const LIKES_KEY = "forjob-video-likes"
const NAME_KEY = "forjob-video-name"
const TARGET_KEY = "forjob-like-target"

function readNumber(key, fallback) {
  const stored = localStorage.getItem(key)
  if (stored === null) return fallback
  const value = Number(stored)
  return Number.isFinite(value) ? value : fallback
}

function readName(fallback) {
  const stored = localStorage.getItem(NAME_KEY)
  return stored?.trim() ? stored : fallback
}

function ForJob() {
  const [videoName, setVideoName] = useState(() => readName("VIRAT KOHLI"))
  const [videoLikes, setVideoLikes] = useState(() => readNumber(LIKES_KEY, 10))
  const [likeTarget, setLikeTarget] = useState(() => readNumber(TARGET_KEY, 20))

  useEffect(() => {
    localStorage.setItem(LIKES_KEY, String(videoLikes))
  }, [videoLikes])

  useEffect(() => {
    localStorage.setItem(NAME_KEY, videoName)
  }, [videoName])

  useEffect(() => {
    localStorage.setItem(TARGET_KEY, String(likeTarget))
  }, [likeTarget])

  function handleDislike() {
    setVideoLikes((prev) => Math.max(0, prev - 1))
  }

  function resetLikes() {
    setVideoLikes(0)
  }

  const targetReached = videoLikes >= likeTarget

  return (
    <section className="section for-job">
      <h2>Featured video</h2>

      <label className="field">
        <span>Video title</span>
        <input
          type="text"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
          placeholder="Enter video name"
        />
      </label>

      <h3>{videoName || "Untitled video"}</h3>
      <p className="likes-count">Likes: {videoLikes}</p>

      <label className="field">
        <span>Like target</span>
        <input
          type="number"
          min={1}
          value={likeTarget}
          onChange={(e) => setLikeTarget(Math.max(1, Number(e.target.value) || 1))}
        />
      </label>

      <div className="button-row">
        <button type="button" onClick={() => setVideoLikes((prev) => prev + 1)}>
          Like video
        </button>
        <button
          type="button"
          onClick={handleDislike}
          disabled={videoLikes === 0}
        >
          Dislike video
        </button>
        <button type="button" className="btn-primary" onClick={resetLikes}>
          Reset likes
        </button>
      </div>

      {!targetReached ? (
        <p className="status">People are liking the video.</p>
      ) : (
        <Congratulations
          videoName={videoName}
          videoLikes={videoLikes}
          likeTarget={likeTarget}
        />
      )}
    </section>
  )
}

export default ForJob
