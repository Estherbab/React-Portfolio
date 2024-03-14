// Creating the components for Contact page
function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
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
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <section className="mb-4 mt-4 row">
        <a href="https://www.instagram.com/estherbogere/" className="col-1">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/EstherBogere"className="col-1"
      
        ></a>
        <a
          href="https://www.youtube.com/@TheBogeres"className="col-1"
      
        ></a>
        <a
          href="https://www.pinterest.co.uk/ebogere/"className="col-1"
       
        ></a>
        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
        <a href="http://" target="_blank" rel="noopener noreferrer" className="col-1">
          <i className="fa-brands fa-github"></i>
        </a>
      </section>
    </div>
  );
}

export default Contact;
