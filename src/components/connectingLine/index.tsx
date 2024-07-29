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
      viewBox="0 0 296 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="linePath" stroke="black" d="M295 1L295 49H1V117" />
    </svg>,
    <svg
      className="line neonPurple"
      key={2}
      viewBox="0 0 296 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="linePath" d="M1 1L1 49H295V117" stroke="black" />
    </svg>,
    <svg
      className="line neonPurple"
      key={3}
      viewBox="0 0 296 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="linePath" d="M295 1L295 49H1V117" stroke="black" />
    </svg>,
    <svg
      className="line neonPurple"
      key={4}
      viewBox="0 0 296 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="linePath" d="M1 1L1 49H295V117" stroke="black" />
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
