import React from "react";

export const LiveIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="12" cy="12" r="8.5" stroke="black" />
        <circle cx="9.09231" cy="16.2925" r="1.10769" stroke="black" />
        <circle cx="16.4307" cy="8.67675" r="0.969231" stroke="black" />
        <path d="M9.68573 15.3428C10.9714 13.8 12 12.2571 14.0572 10.2" stroke="black" />
        <rect x="9.4357" y="6.47949" width="0.771429" height="2.49231" rx="0.385714" transform="rotate(30 9.4357 6.47949)" fill="black" />
        <path d="M11.2285 10.1997H14.0571V12.7711" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="7.8746" y="7.46289" width="0.771429" height="2.49231" rx="0.385714" transform="rotate(-60 7.8746 7.46289)" fill="black" />
        <rect x="15.3429" y="14.8289" width="1.02857" height="3.47018" rx="0.514286" transform="rotate(30 15.3429 14.8289)" fill="black" />
        <rect x="13.0935" y="16.1663" width="1.02857" height="3.47018" rx="0.514286" transform="rotate(-60 13.0935 16.1663)" fill="black" />
    </svg>
)
