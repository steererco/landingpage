import React from "react";

const LoaderIcon = () => {
  return (
    <div>
      <svg
        className="animate-spin"
        width="24"
        height="24"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 36C64 29.7169 61.8867 23.6164 58.0001 18.6796C54.1135 13.7429 48.6793 10.2568 42.5717 8.78213C36.4641 7.30746 30.038 7.92987 24.327 10.5493C18.6159 13.1687 13.9518 17.6328 11.0848 23.2237C8.21787 28.8146 7.31465 35.2072 8.52047 41.3736C9.72628 47.5399 12.971 53.1214 17.7329 57.2205C22.4947 61.3196 28.4968 63.698 34.7739 63.9731C41.051 64.2483 47.2382 62.4042 52.3404 58.7374"
          stroke="white"
          stroke-width="8"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default LoaderIcon;
