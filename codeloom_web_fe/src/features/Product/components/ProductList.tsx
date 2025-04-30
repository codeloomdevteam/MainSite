import { useNavigate } from "react-router";
import event_logo from "../../../assets/img/Eventify.png";
import photo_logo from "../../../assets/img/photo_logo.png";
import promoloom_logo from "../../../assets/img/promoloom logo.png";

const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="card rounded-box grid grow md:place-items-end place-items-center">
          <div
            className="card w-96 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("eventloom")} // Navigates to /eventloom
          >
            <figure className="px-5 pt-5 md:min-h-80">
              <img
                src={event_logo}
                alt="logo"
                className="rounded-xl md:w-72 w-36"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg md:text-xl">EventLoom</h2>
              <p>
                Your one-stop solution for managing events, inventory, and more.
                Our platform is designed to help you streamline your operations
                and make event planning a breeze.
              </p>
            </div>
          </div>
        </div>
        <div className="divider md:divider-horizontal"></div>
        <div className="card rounded-box grid grow md:place-items-start place-items-center">
          <div
            className="card w-96 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("captureLoom")} // Navigates to /eventloom
          >
            <figure className="px-5 pt-5 md:min-h-80">
              <img
                src={photo_logo}
                alt="logo"
                className="rounded-xl md:w-60 w-36"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg md:text-xl">CAPTURELOOM</h2>
              <p>
                Weave Perfection into Every Shoot – The Photographer’s Command
                Center. Built for studios, freelancers, and event photographers.
              </p>
            </div>
          </div>
        </div>
        <div className="divider md:divider-horizontal"></div>
        <div className="card rounded-box grid grow md:place-items-start place-items-center">
          <div
            className="card w-96 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("promoloom")} // Navigates to /eventloom
          >
            <figure className="px-5 pt-5 md:min-h-80">
              <img
                src={promoloom_logo}
                alt="logo"
                className="rounded-xl md:w-60 w-36"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg md:text-xl">PROMOLOOM</h2>
              <p>
                Go Viral or Go Home – AI-Powered Event Promotion & Ticketing.
                Built for clubs, artists, promoters, and venues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
