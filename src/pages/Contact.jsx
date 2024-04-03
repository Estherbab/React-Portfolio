// Creating the components for Contact page
function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="mt-5"><h1>Contact Me</h1></div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <p className="mt-3">
            For further enquiries feel free to contact me through my email
            below, youtube, linkedin, github or you can use the contact form to
            send me a direct email message and i will happily get back to you I
            am happy to answer any questions regarding my youtube business, my
            portfolio projects on github, my job experiences from hospital
            administration, sales assistant, fashion assistant and running my
            own business.
          </p>
        </div>

        <div className="col-sm-12 col-md-8">
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
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-4 mt-5 row">
        <div className="col-sm-12 col-md-4">
        <a href="https://www.estherbogere@gmail.com" className="col-1">
          <i class="fa-solid fa-envelope icons"></i>
        </a>
     
        <a href="https://www.youtube.com/@estheronala" className="col-1">
          <i class="fa-brands fa-youtube icons"></i>
        </a>
        </div>
   </section>

   <section className="mb-4 mt-1 row">
        <div className="col-sm-12 col-md-4">
        <a href="https://www.linkedin.com/in/esther-babirye/" className="col-1">
          <i class="fa-brands fa-linkedin icons"></i>
        </a>


        <a href="https://github.com/Estherbab"target="_blank" rel="noopener noreferrer" className="col-1">
          <i className="fa-brands fa-github icons"></i>
          </a>
          </div>
          

          <a className="icons" href="https://docs.google.com/document/d/1-CgoQuRUD3p0bwubb-AF3MKTeXX1KgH4HbxesZyXEYE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Link to my latest CV 2024
          </a>
          </section>

         
   
    </div>
    </div>
  );
}

export default Contact;
