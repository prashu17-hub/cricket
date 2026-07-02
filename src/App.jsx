import "./App.css"
import kohliBg from "./assets/kohli-bg.svg"
import MyChannelVideos from "./Components/videos"
import ForJob from "./Components/ForJob"
import MyPractice from "./Components/practice"
import TeamList from "./Components/TeamList"
import { team } from "./Data/Team"

function App() {
  return (
    <div
      className="kohli-page"
      style={{ "--kohli-bg-image": `url(${kohliBg})` }}
    >
    <main className="app">
      <MyChannelVideos />
      <ForJob />
      <section className="section squad">
        <h2>Squad highlights</h2>
        <div className="squad-grid">
          <MyPractice Name="virat" Role="batter" />
          <MyPractice Name="rohit" Role="hitter" />
        </div>
      </section>
      <TeamList members={team} />
    </main>
    </div>
  )
}

export default App
