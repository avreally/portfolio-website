import "./styles.css";
import React from "react";
import { ClientType } from "../../../types";

type ClientsCarouselProps = {
  clientsData: ClientType[];
};

const clientsCarousel = ({ clientsData }: ClientsCarouselProps) => {
  return (
    <div className="container">
      <p>Lalala about my experience in Made People</p>
      <div className="clientsCarousel">
        {[...clientsData].map(
          ({ id, name, websiteUrl, imgUrl }: ClientType) => (
            <div key={id} className="client">
              <div className="clientName">{name}</div>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                <img src={imgUrl} alt={name} />
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default clientsCarousel;
