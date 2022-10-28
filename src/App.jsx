import Make from "./components/Make/Make"
import Manage from "./components/Manage/Manage"
import Subbar from "./components/Subbar/Subbar"
import Team from "./components/Team/Team"
import Topbar from "./components/Topbar/Topbar"
import Work from "./components/Work/Work"


function App() {


  return (
    <div className="App">
        <Topbar />
        <Manage />
        <Subbar />
        <Team />
        <Make />
        <Work />
    </div>
  )
}

export default App
