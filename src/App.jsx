import Topbar from './components/Topbar/Topbar'
import Basebar from "./components/Basebar/Basebar"
import Make from "./components/Make/Make"
import Manage from "./components/Manage/Manage"
import Subbar from "./components/Subbar/Subbar"
import Team from "./components/Team/Team"
import Why from "./components/Why/Why"
import Work from "./components/Work/Work"


function App() {


  return (
    <div>
        <Topbar />
        <Manage />
        <Subbar />
        <Team />
        <Make />
        <Work />
        <Why />
        <Basebar />
    </div>
  )
}

export default App
