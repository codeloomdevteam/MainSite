export interface ServiceItem {
  title: string;
  description: string;
  description_long: string;
  image: string;
  features: string[];
}

// Main data structure interface
export interface ServicesData {
  development_services: ServiceItem[];
}
