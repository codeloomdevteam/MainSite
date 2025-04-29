import event_web_cover_img from "../../../assets/img/event_web_cover_img.png";

const PartyCrafter = () => {
  return (
    <div className="mt-10 ">
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
            <p>
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
    </div>
  );
};

export default PartyCrafter;
