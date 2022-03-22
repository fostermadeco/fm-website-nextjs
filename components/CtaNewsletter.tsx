import React from 'react';
import { theme } from 'tailwind.config';

const FormCtaNewsletter = () => {
    const actionUrl = `https://fostermade.us8.list-manage.com/subscribe?u=8503905fda180a49ac40e4e3b&amp;id=f417ed3dd8&MEDIA0=`;
    return (
        <form action={actionUrl} method="post">
            <div className="flex flex-row">
                <div className="flex-auto">
                    <div className="form-group">
                        <label className="label-overline" htmlFor="email">
                            EMAIL ADDRESS
                        </label>
                        <input
                            className="form-control"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            style={{ backgroundColor: theme.colors.lime }}
                        />
                    </div>
                </div>
                <div className="-ml-10 mt-16">
                    <button className="hover:clickable" type="submit" aria-label="submit newsletter signup">
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
};

const CtaNewsletter = () => {
    const leftSectionMessage =
        'Want to stay in the loop? Sign-up for our quarterly newsletter and we’ll send you updates with a mix of our latest content.';
    return (
        <div className="grid-cols-1 gap-0 mx-0 md:grid md:grid-cols-2">
            <div className="md:col-span-1 bg-darkLime font-semibold p-20 text-2xl">{leftSectionMessage}</div>
            <div className="md:col-span-1 bg-lime py-14 px-20 xl:px-40">
                <FormCtaNewsletter />
            </div>
        </div>
    );
};

export default CtaNewsletter;
