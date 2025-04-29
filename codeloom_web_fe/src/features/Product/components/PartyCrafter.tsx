import event_web_cover_img from "../../../assets/img/event_web_cover_img.png";

import { FaStreetView } from "react-icons/fa";

const PartyCrafter = () => {
  return (
    <div className="mt-15 ">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">PARTY </span>
            <span className="text-orange-600">CRAFTERS</span>
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row mt-5 gap-10">
        <div className="card rounded-box grid grow place-items-center">
          <div className="">
            <img
              src={event_web_cover_img}
              alt="PARTY CRAFTERS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="card rounded-box grid grow place-items-start">
          <div className="">
            <p className="lg:pt-5">
              <span className="font-bold text-indigo-600">
                PARTY CRAFTERS is
              </span>
              <br />
              <br />
              your ultimate all-in-one platform for effortless event planning,
              inventory management, and seamless operations. Designed to
              simplify every aspect of event organization, PARTY CRAFTERS
              empowers you to create unforgettable experiences with ease—whether
              you're coordinating an intimate gathering or a grand celebration.
              Our intuitive tools and smart features take the stress out of
              planning, allowing you to focus on what truly matters: bringing
              your vision to life.
              <br />
              <br />
              From guest lists and vendor coordination to real-time inventory
              tracking and budget management, PARTY CRAFTERS provides everything
              you need in one convenient place. We’re committed to delivering
              exceptional service, ensuring you have the support and resources
              to make every event a success. With a dedicated team ready to
              assist you at every step, PARTY CRAFTERS is more than just a
              platform—it's your trusted partner in crafting perfect moments.
              Have questions or need guidance? Reach out anytime—we’re here to
              help you party smarter, not harder!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            <span className="font-light">Key Features & </span>
            <span className="">Functionalities</span>
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="">
          <div className="flex gap-5 mb-5">
            <div>
              <FaStreetView className="text-4xl" />
            </div>
            <div>
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            "Remaining Reason" became an instant hit, praised for its haunting
            sound and emotional depth. A viral performance brought it widespread
            recognition, making it one of Dio Lupa’s most iconic tracks.
          </p>
        </div>

        <div>09</div>
      </div>
    </div>
  );
};

export default PartyCrafter;
