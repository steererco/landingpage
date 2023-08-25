import React from "react";

export const HeartRateIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="black"
        {...props}
    >
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)
