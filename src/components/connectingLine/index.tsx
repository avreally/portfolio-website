import "./styles.css";
import React from "react";

type ConnectingLineProps = {
  variant: 0 | 1 | 2 | 3;
  containerAlignSelf: "start" | "end" | "center";
};

const connectingLine = ({
  variant,
  containerAlignSelf,
}: ConnectingLineProps) => {
  const lineVariants = [
    <svg
      className="line neonPurple"
      key={1}
      viewBox="0 0 307 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="linePath"
        d="M294.259 0.706127C261.001 148 28.2306 91.8601 5.99992 200.5"
        stroke="black"
      />
    </svg>,
    <svg
      className="line neonPurple"
      key={2}
      viewBox="0 0 307 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="linePath"
        d="M3.39249 0.706358C15.4999 158 276.5 86 303.499 200.998"
        stroke="black"
      />
    </svg>,
    <svg
      className="line neonPurple"
      key={3}
      viewBox="0 0 307 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="linePath"
        d="M38 0.499983C57.0006 93.503 278.137 57.8505 283.001 200.5"
        stroke="black"
      />
    </svg>,
    <svg
      className="line neonPurple"
      key={4}
      viewBox="0 0 307 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="linePath"
        d="M282.5 0.499973C282.5 0.499973 279.197 30.9498 266.185 51.2408C264.73 53.5102 263.181 55.6985 261.597 57.8806C255.398 66.4254 236.942 89.3101 210.107 100.253C181.595 111.879 169.283 113.799 129.753 119.694C92.8169 125.203 71.1108 128.44 43.5707 119.368C25.0423 113.265 13.5629 97.2646 10 77.5C6.43712 57.7354 10.7372 33.1393 30.5 20.5C50.2627 7.86072 68.3839 7.69587 87.5 14.5C102.412 19.8077 111.097 32.9602 114.197 38.4887C115.12 40.1351 115.935 41.8296 116.655 43.5742C119.495 50.4543 125.99 70.0531 117.443 89.2362C102.863 121.96 63.8229 122.841 37.415 147.556C13.1151 167.968 14 200.5 14 200.5"
        stroke="black"
      />
    </svg>,
  ];

  return (
    <div
      className={`lineContainer ${
        containerAlignSelf === "start"
          ? ""
          : containerAlignSelf === "end"
          ? "lineContainerAlignEnd"
          : "lineContainerAlignCenter"
      }`}
    >
      {lineVariants[variant]}
    </div>
  );
};

export default connectingLine;
