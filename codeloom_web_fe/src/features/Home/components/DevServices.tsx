import React from "react";
import DevServiceData from "../../Common/DevServiceData.json";
import { Link } from "react-router";

type Props = {};

const DevServices = (props: Props) => {
  return (
    <div className="min-h-screen py-10 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">Our Development</span>
            <span className="text-orange-600"> Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {DevServiceData.development_services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-24 md:h-48 object-cover"
                />
              </figure>

              <div className="card-body flex-grow flex flex-col">
                <div>
                  <h2 className="card-title text-lg md:text-xl">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base mt-2">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 hidden md:block">
                    {service.features.map((feature, i) => (
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

                {/* Button pinned to bottom */}
                <div className="mt-auto">
                  <Link to="/services">
                    <button className="btn btn-outline mt-6 w-full">
                      More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevServices;
