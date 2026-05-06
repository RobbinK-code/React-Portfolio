import ProjectCard from "./ProjectCard"

function ProjectList({ projects }) {
  return (
    <section className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default ProjectList