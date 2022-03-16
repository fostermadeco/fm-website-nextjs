import React from 'react';

const CtaNewsletter = () => {
    const message =
        'Want to stay in the loop? Sign-up for our quarterly newsletter and we’ll send you updates with a mix of our latest content.';
    return (
        <div className="grid-cols-1 gap-0 mx-0 md:grid md:grid-cols-2">
            <div className="md:col-span-1 col-start-1 bg-darkLime text-center p-20">{message}</div>
            <div className="md:col-span-1 bg-lime text-center p-20">{message}</div>
        </div>
    );
};

export default CtaNewsletter;
