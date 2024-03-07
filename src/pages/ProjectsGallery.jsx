// Creating the components for project gallery
import projects from "../utils/projects.json";
import Project from "../components/Project";
function ProjectGallery() {
  console.log(projects);
  return (
    <div>
      <h1>Project Gallery</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
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
