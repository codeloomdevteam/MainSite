import event_web_cover_img from "../../../assets/img/event_web_cover_img.png";
import {
  FaStreetView,
  FaUsers,
  FaBoxOpen,
  FaMoneyBillWave,
  FaTruck,
  FaBell,
  FaUserCog,
  FaChartBar,
  FaLock,
  FaFileCsv,
} from "react-icons/fa";
import { LuRotate3D } from "react-icons/lu";
import EventifyKeyFeatures from "./Eventify_Key_Features.json";

const PartyCrafter = () => {
  const featureIcons = [
    <FaUsers />,
    <FaBoxOpen />,
    <FaMoneyBillWave />,
    <FaTruck />,
    <FaBoxOpen />,
    <FaBell />,
    <FaUserCog />,
    <FaChartBar />,
    <FaLock />,
    <FaFileCsv />,
    <LuRotate3D />,
  ];

  return (
    <div className="mt-15">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">EVENT </span>
            <span className="text-orange-600">LOOM</span>
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row mt-5 gap-10">
        <div className="card rounded-box grid grow place-items-center md:w-2/5">
          <div className="">
            <img
              src={event_web_cover_img}
              alt="PARTY CRAFTERS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="card rounded-box grid grow place-items-start md:w-3/5">
          <div className="">
            <p className="lg:pt-5">
              <span className="font-bold text-indigo-600">Event Loom is</span>
              <br />
              <br />
              Event Loom is a comprehensive event management platform designed
              to streamline the planning and execution of events such as
              weddings and birthdays. The system caters to three key user roles:
              Customers, who can browse and book customizable event packages;
              Administrators, who manage users, inventory, orders, and payments;
              and Event Organizers, who create and oversee event setups. With
              features like package customization, delivery fee calculations,
              payment tracking, and inventory management, Event Loom ensures a
              seamless experience for both clients and administrators. The
              platform also includes reporting tools for monitoring user
              activity and inventory status, making event coordination efficient
              and hassle-free.
              <br />
              <br />
              Event Loom simplifies the entire event planning process by
              offering pre-defined packages (Basic, Pro, Premium) that customers
              can tailor to their needs. Once a booking request is submitted,
              admins review and approve it before processing payments and
              coordinating deliveries. The system also handles refundable items,
              sending email notifications at each stage—from order confirmation
              to payment verification and delivery completion. With its
              user-friendly dashboard and robust backend management tools, Event
              Loom empowers businesses to deliver exceptional events while
              maintaining full control over logistics, finances, and customer
              interactions.
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 p-4">
        {EventifyKeyFeatures.key_features.map((feature, index) => (
          <div
            key={index}
            className="card hover:shadow-xl transition-all duration-300 p-4 
             border border-transparent hover:border-primary/20 
             hover:-translate-y-1 hover:scale-[1.02] group"
          >
            <div className="flex gap-4 items-start">
              <div className="text-2xl mt-1 text-orange-600">
                {featureIcons[index]}
              </div>
              <div>
                <h3 className="font-bold text-lg text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-sm mt-1">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyCrafter;
