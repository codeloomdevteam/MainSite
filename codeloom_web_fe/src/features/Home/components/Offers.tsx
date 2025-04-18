import { Link } from "react-router";

const Offers = () => {
  return (
    <div className="mt-20" id="offer">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">Our Current,</span>
            <span className="text-orange-600"> Offers</span>
          </h1>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center flex-col lg:flex-row items-stretch gap-4">
          {/* Left Card */}
          <div className="card rounded-box grow  md:w-1/2 ">
            <div className="card shadow-sm h-full">
              <figure className="h-42">
                <img
                  src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
                  alt="Academic"
                  className="object-cover h-full w-full"
                />
              </figure>
              <div className="card-body justify-between">
                <div>
                  <h2 className="card-title text-lg md:text-xl">
                    for An Academic Project
                  </h2>
                  <p className="text-sm">
                    Custom software solutions for student projects - from
                    concept to functional prototype. We transform your ideas
                    into deployable systems with documented code perfect for
                    coursework and requirements.
                  </p>
                </div>
                <Link to="/contact">
                  <button className="btn btn-outline mt-6 w-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="card rounded-box grow h-full md:w-1/2">
            <div className="card shadow-sm h-full">
              <figure className="h-42">
                <img
                  src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9jYWwlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Business"
                  className="object-cover h-full w-full"
                />
              </figure>
              <div className="card-body flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-lg md:text-xl">
                    for Small Business Boost
                  </h2>
                  <p className="text-sm">
                    Budget-friendly software application tailored for growing
                    businesses. We create tools that streamline operations,
                    enhance customer engagement, and boost growth—with
                    startup-appropriate timelines and pricing for your.
                  </p>
                </div>
                <Link to="/contact">
                  <button className="btn btn-outline mt-6 w-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
