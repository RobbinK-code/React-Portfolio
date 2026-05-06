import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import SearchBar from "./components/SearchBar"
import AddProjectForm from "./components/AddProjectForm"
import ProjectList from "./components/ProjectList"
import Footer from "./components/Footer"
import projectsData from "./data/projects"
import "./styles/App.css"

function App() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState("")

  const addProject = (project) => {
    setProjects([
      ...projects,
      {
        ...project,
        id: Date.now(),
      },
    ])
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Navbar />

      <HeroSection />

      <main className="container">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AddProjectForm addProject={addProject} />

        <ProjectList projects={filteredProjects} />
      </main>

      <Footer />
    </div>
  )
}

export default App