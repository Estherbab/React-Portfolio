// Creating the components for project gallery
import projects from "../utils/projects.json";
import Project from "../components/Project";
function ProjectGallery() {
  console.log(projects);
  return (
    <div>
      <h1>My Project Gallery</h1>
      <p className="mt-3 mb-5">
      Welcome to my project gallery throught the last four months i have been enrolled in a
      Front-end web development bootcamp by EDX. I have been learning several languages such as
      HTML, CSS, JAVASCRIPT, JQUERY, NODE.JS and REACT and i have used all these skills learnt from
      the bootcamp classes to creat different projects. Below are some of the projects that I have 
      created with the skills that I have learnt through out this period. Please feel free to  check
      them out each card link takes you directly to the application url and the Github repository
      for each of the projects.
      </p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 col-sm-12 mb-4" key={index}>
            <Project
              title={project.title}
              description={project.description}
              languages={project.languages}
              image={project.image}
              repo={project.repo}
              deployed={project.deployed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
