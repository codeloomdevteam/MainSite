import React from "react";
import { Link } from "react-router";

type Props = {
  service: any;
  index: number;
};

const OddServiceList = ({ service, index }: Props) => {
  return (
    <div className="h-1/2">
      <div className="flex flex-col lg:flex-row w-full h-full rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-40 lg:h-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h2 className="md:text-4xl text-2xl font-semibold text-base-content">
              {service.title}
            </h2>
            <p className="mt-2 text-md text-base-content/80 text-orange-600">
              {service.description}
            </p>
            <p className="mt-2 text-sm text-base-content/80">
              {service.description_long}
            </p>

            {/* Features List */}
            <ul className="mt-4 space-y-2 ">
              {service.features.map((feature: any, i: number) => (
                <li key={i} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 mt-0.5 flex-shrink-0 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs md:text-sm text-left">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-4">
            <Link to="/contact">
              <button className="btn btn-outline w-full">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddServiceList;
