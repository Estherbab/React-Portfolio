// Creating the components for Contact page
function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>  
      <div className="row mt-3">
      <div className="col-sm-12 col-md-4">
      <p className="mt-3">
       For further enquiries feel free to contact me through my email below, youtube, linkedin, github or
       you can use the contact form to send me a direct email message and i will happily get back to you

       I am happy to answer any questions regarding my youtube business, my portfolio projects on github,
       my job experiences from hospital administration, sales assistant, fashion assistant and running my own business.
        
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
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
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

      </div>


      </div>


      <section className="mb-4 mt-4 row">
        <a href="https://www.estherbogere@gmail.com" className="col-1">
        <i class="fa-solid fa-envelope"></i>
        </a>

        <a href="https://www.youtube.com/@TheBogeres"className="col-1">
        <i class="fa-brands fa-youtube"></i></a>

        <a href="https://www.pinterest.co.uk/ebogere/"className="col-1">
        <i class="fa-brands fa-linkedin"></i></a>


   
        <a href="http://" target="_blank" rel="noopener noreferrer" className="col-1">
          <i className="fa-brands fa-github"></i>
        </a>
      </section>
    </div>
  );
}

export default Contact;
