import DevServiceData from "../../Common/DevServiceData.json";
import OddServiceList from "./OddServiceList";
import EvenServicesList from "./EvenServicesList";

// Define the interface for a single service item
interface ServiceItem {
  title: string;
  description: string;
  description_long: string;
  image: string;
  features: string[];
}

// Define the interface for the entire data structure
interface ServicesData {
  development_services: ServiceItem[];
}

// If you're using the imported JSON directly (not passing as props)
const ServicesList = () => {
  // Type assertion for the imported JSON data
  const servicesData = DevServiceData as ServicesData;

  return (
    <div className="space-y-6">
      {servicesData.development_services.map((service, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <OddServiceList service={service} />
          ) : (
            <EvenServicesList service={service} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
