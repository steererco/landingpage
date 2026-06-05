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
        <path d="M19.968 5H3.7968C2.80445 5 2 5.80445 2 6.7968V17.2032C2 18.1955 2.80445 19 3.7968 19H19.968C20.9603 19 21.7647 18.1955 21.7647 17.2032V6.7968C21.7647 5.80445 20.9603 5 19.968 5Z" />
        <path d="M5.08826 9.52954V13.8531H7.76474M9.20591 9.52954V13.8531M10.853 9.52954L12.7059 13.8531L14.7647 9.52954M18.8824 9.52954H16V13.8531H18.8824M17.6471 11.7942H16.2059" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
