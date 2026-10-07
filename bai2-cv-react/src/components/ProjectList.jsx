function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectList;
