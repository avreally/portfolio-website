import "./styles.css";
import React from "react";
import { ClientType } from "../../../types";
import { animated, useSpring } from "@react-spring/web";

type ClientsCarouselProps = {
  clientsData: ClientType[];
};

const clientsCarousel = ({ clientsData }: ClientsCarouselProps) => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));

  return (
    <div className="container">
      <p>Lalala about my experience in Made People</p>
      <div className="clientsCarousel">
        {[...clientsData].map(
          ({ id, name, websiteUrl, imgUrl }: ClientType) => (
            <animated.div key={id} className="client" style={{ ...springs }}>
              <div className="clientName">{name}</div>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                <img src={imgUrl} alt={name} />
              </a>
            </animated.div>
          )
        )}
      </div>
    </div>
  );
};

export default clientsCarousel;
