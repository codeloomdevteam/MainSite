import CaptureLoom_cover_img from "../../../../assets/img/CaptureLoom_cover_img.jpg";
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

const Gratick_start = () => {
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
            <span className="font-light">CAPTURE </span>
            <span className="text-orange-600">LOOM</span>
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row mt-5 gap-10">
        <div className="card rounded-box grid grow place-items-center md:w-2/5">
          <div className="">
            <img
              src={CaptureLoom_cover_img}
              alt="PARTY CRAFTERS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="card rounded-box grid grow place-items-start md:w-3/5">
          <div className="">
            <p className="lg:pt-5">
              <span className="font-bold text-indigo-600">CaptureLoom</span>
              <br />
              <br />
              Redefines photography business management by merging granular
              role-based control with end-to-end workflow automation. Designed
              for both solo photographers and large studios, our platform
              eliminates chaotic spreadsheets and miscommunication with tools
              for team assignments, inventory tracking, and AI-driven booking
              reminders. Whether you’re shooting weddings, corporate events, or
              portraits, CaptureLoom ensures every detail—from gear allocation
              to client invoices—is flawlessly orchestrated.
              <br />
              <br />
              Unlike generic scheduling tools, CaptureLoom caters specifically
              to photography’s unique demands, like equipment dependencies,
              multi-member teams, and client review workflows. With features
              like dynamic package builders, team-based RBAC, and integrated
              photo delivery, we empower photographers to focus on
              creativity—not admin chaos.
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

export default Gratick_start;
