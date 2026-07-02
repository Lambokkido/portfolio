import './ProjectCard.css'

function ProjectCard({ project }) {
  const { name, description, stack, repoUrl, demoUrl, tag, image } = project

  return (
    <article className="project-card">
      {image ? (
        <img src={image} alt={name} className="project-card__image" />
      ) : (
        <div className="project-card__placeholder" />
      )}

      <div className="project-card__overlay">
        <span className="project-card__tag">{tag}</span>
        <h3>{name}</h3>
        <p>{description}</p>

        <ul className="project-card__stack">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
