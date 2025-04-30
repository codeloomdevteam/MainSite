import promo_loon_cover from "../../../../assets/img/promo_loon_cover.png";
import {
  FaUsers,
  FaBoxOpen,
  FaMoneyBillWave,
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
            <span className="font-light">PROMO </span>
            <span className="text-orange-600">LOOM</span>
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row mt-5 gap-10">
        <div className="card rounded-box grid grow place-items-center md:w-2/5">
          <div className="">
            <img
              src={promo_loon_cover}
              alt="PARTY CRAFTERS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="card rounded-box grid grow place-items-start md:w-3/5">
          <div className="">
            <p className="lg:pt-5">
              <span className="font-bold text-indigo-600">PromoLoom is</span>
              <br />
              <br />
              The all-in-one event marketing platform designed to turn every
              event into a viral sensation. Powered by AI-driven hype tools,
              dynamic ticketing, and real-time analytics, we help clubs,
              promoters, artists, and brands cut through the noise and sell out
              events faster. Whether you're launching a music festival, hosting
              a corporate conference, or organizing a local party, PromoLoom
              automates the heavy lifting—from TikTok-style promo videos to
              smart audience targeting—so you can focus on delivering
              unforgettable experiences.
              <br />
              <br />
              Unlike traditional event platforms, PromoLoom merges social
              virality with seamless ticketing, giving organizers the power to
              boost engagement, maximize ticket sales, and track ROI in real
              time. With features like NFT passes, influencer collaboration
              hubs, and AR filters, we bridge the gap between online hype and
              real-world attendance. Built for the Gen Z and Millennial-driven
              event economy, PromoLoom isn’t just a tool—it’s your competitive
              edge in a crowded market.
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
