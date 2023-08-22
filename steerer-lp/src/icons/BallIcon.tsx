import React from "react";

export const BallIcon = ({ ...props }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* <mask id="mask0_188_1556" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
            <path d="M22 2H2V22H22V2Z" fill="white" />
        </mask> */}
        <g mask="url(#mask0_188_1556)">
            <path d="M14.9856 12.0475L12.8752 14.791L9.49848 13.9469V10.1481L13.0862 8.88184L14.9856 12.0475Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.59892 19.6452L7.80996 15.6354L3.80014 14.3691" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.9401 18.3786L13.8697 17.0181L11.6088 20.5635" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.9401 18.3786L13.8697 17.0181L11.6088 20.5635" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.6748 8.37915L17.307 11.9587L20.1465 15.0602" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.031 3.18384L13.7508 6.78822L18.1513 5.71635" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.78165 9.64845L7.70946 8.81448L7.70945 4.44995" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0309 20.9113C16.9263 20.9113 20.8948 16.9428 20.8948 12.0474C20.8948 7.15207 16.9263 3.18359 12.0309 3.18359C7.13556 3.18359 3.16709 7.15207 3.16709 12.0474C3.16709 16.9428 7.13556 20.9113 12.0309 20.9113Z" stroke="black" />
        </g>
    </svg>
)
