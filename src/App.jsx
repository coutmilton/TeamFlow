import Manage from "./components/Manage/Manage"
import Subbar from "./components/Subbar/Subbar"
import Team from "./components/Team/Team"
import Topbar from "./components/Topbar/Topbar"


function App() {


  return (
    <div className="App">
        <Topbar />
        <Manage />
        <Subbar />
        <Team />
    </div>
  )
}

export default App
