import React from "react";

export const GraphicIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M22 7L13.3636 15.6364L8.81818 11.0909L2 17.9091" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5454 7H22V12.4545" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)
