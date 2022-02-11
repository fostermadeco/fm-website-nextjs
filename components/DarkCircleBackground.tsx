import React from 'react';

const DarkCircleBackground = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <div className="bg-black rounded-full">
        <div className="container mx-auto">
            <div className="mx-6 py-14 md:mx-0">{children}</div>
        </div>
    </div>
);

export default DarkCircleBackground;
