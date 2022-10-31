import Topbar from './components/Topbar/Topbar.jsx'
import Basebar from "./components/Basebar/Basebar.jsx"
import Make from "./components/Make/Make.jsx"
import Manage from "./components/Manage/Manage.jsx"
import Subbar from "./components/Subbar/Subbar.jsx"
import Team from "./components/Team/Team.jsx"
import Why from "./components/Why/Why.jsx.jsx"
import Work from "./components/Work/Work.jsx"


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
