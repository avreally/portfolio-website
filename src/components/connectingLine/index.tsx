import "./styles.css";

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
      className="line small"
      width="563"
      height="105"
      viewBox="0 0 563 105"
      key={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="path0" className="linePath" d="M4 0V67.9141H74V105" />
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#path0" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#path0" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#path0" />
        </animateMotion>
      </rect>
    </svg>,
    <svg
      className="line big"
      width="563"
      height="105"
      viewBox="0 0 563 105"
      key={1}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path1"
        className="linePath"
        d="M559 105V41.7237H4V1.90735e-06"
      />
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="11s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path1" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path1" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="9s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path1" />
        </animateMotion>
      </rect>
    </svg>,
    <svg
      className="line small"
      width="563"
      height="105"
      viewBox="0 0 563 105"
      key={2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="path2" className="linePath" d="M559 0V67.9141H489V105" />
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#path2" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#path2" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#path2" />
        </animateMotion>
      </rect>
    </svg>,
    <svg
      className="line big"
      width="563"
      height="105"
      viewBox="0 0 563 105"
      key={3}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path3"
        className="linePath"
        d="M4 105V41.7237H559V1.90735e-06"
      />
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="11s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path3" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path3" />
        </animateMotion>
      </rect>
      <rect width={3} height={3} x={-1.5} y={-1.5} fill="#07ff32">
        <animateMotion
          dur="9s"
          repeatCount="indefinite"
          keyPoints="1;0"
          keyTimes="0;1"
        >
          <mpath href="#path3" />
        </animateMotion>
      </rect>
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
