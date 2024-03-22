// Creating the components for Home page
function Home() {
  return (
    <div>
      <div className="mt-5"><h1>About Me</h1></div>
      <div className="row mt-3">
        <div class="col-sm-12 col-md-4">
          <img class="img-fluid" src="./assets/images/profilepic.jpeg" alt="" />
        </div>
        <div className="col-sm-12 col-md-8">
          <p>
            I am a highly motivated Business Management Graduate with
            significant customer service and administerial experience. I am
            honest, patient, approachable and flexible. With high levels of
            organisation, I work well under pressure and thrive within a team. I
            am a fast learner with excellent IT skills who is motivated by
            challenges. I have experience in stock control, training and
            handling staff, administration and health and safety. I also fulfil
            an active voluntary role in my local church. Currently I have been
            attending a coding bootcamp in frontend web development learning
            coding languages such as CSS, HTML, JAVASCRIPT, NODEJS and REACT
            with EDX Skills for life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
