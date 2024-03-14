// Creating the components for Projects
function Project({title, description, languages, image, repo, deployed}) {
    return (
      <div className="card " >
        <img src={image} className="card-img-top img-height" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{languages}</h6>
        <p className="card-text">{description}</p>
        <a href={repo} className="card-link">Github Repo</a>
        <a href={deployed} className="card-link">Demo App</a>
      </div>
    </div>
    );
  }
  
  export default Project;
  