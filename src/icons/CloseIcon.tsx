import React from "react";

export const CloseIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 3L22.7279 15.7279" stroke="#000C54" stroke-width="1.5" stroke-linecap="round" />
        <path d="M10 16L22.7279 3.27208" stroke="#000C54" stroke-width="1.5" stroke-linecap="round" />
    </svg>

)