function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span>{project.category}</span>
      </div>
    </div>
  )
}

export default ProjectCard