import Card from "@/components/card/Card";
import React from "react";
import { IconType } from "react-icons";

interface ServiceProps {
  service: {
    Icon: IconType;
    title: string;
    description: string;
    viewMoreButton: string;
  };
}

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <Card className="service__card">
      <div className="service__card-face">
        <div className="service__card-icon">
          <service.Icon />
        </div>
        <h3>{service.title}</h3>
      </div>
      <div className="service__card-back">
        <p>{service.description}</p>
        <a
          className="service__btn btn primary"
          href="https://www.codielectro.com/cotizacion"
          target="_blank"
          rel="noreferrer noopener"
        >
          {service.viewMoreButton}
        </a>
      </div>
    </Card>
  );
};

export default Service;
