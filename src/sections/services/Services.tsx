import { FaGlobe } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import React from "react";
import Service from "./Service";
import "./services.css";
import SectionWrapper from "../section-wrapper/SectionWrapper";

interface ServicesProps {
  translations: {
    title: string;
    description: string;
    services: {
      id: number;
      title: string;
      description: string;
      viewMoreButton: string;
    }[];
  };
}

const icons = [FaGlobe, FaCode, FaServer, FaInbox];

const Services: React.FC<ServicesProps> = ({ translations }) => {
  const servicesWithIcons = translations.services.map((service) => {
    const Icon = icons[service.id - 1];
    return { ...service, Icon };
  });

  return (
    <SectionWrapper id="services">
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <div className="container services__container">
        {servicesWithIcons.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
