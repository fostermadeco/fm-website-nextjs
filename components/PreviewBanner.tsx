import React from 'react';
import Link from 'next/link';

import { disablePreview } from 'lib/preview';
import useNavigation from 'hooks/useNavigation';

// http://localhost:3000/api/preview?secret=chime-entire-townsman-majestic&slug=values
export const PreviewBanner = ({ preview }: { preview: boolean }) => {
    const { currentPath } = useNavigation();

    if (!preview) {
        return null;
    }

    const exitURL = disablePreview(currentPath);

    return (
        <div className="py-4 text-center bg-blue-800 lg:px-4 bg-lime">
            <div
                className="flex flex-col w-full max-w-screen-xl p-2 px-8 mx-auto text-blue-100 sm:flex-row"
                role="alert"
            >
                <span className="flex-auto mr-2 text-left">
                    {/* https://heroicons.dev/?search=info */}
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-flex w-5 h-5 mb-1 mr-2 information-circle"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="font-semibold">Preview mode</span> is turned on. This enables viewing unpublished
                    changes.
                </span>
                <Link href={exitURL}>
                    <a className="flex mr-3 font-semibold">Turn off</a>
                </Link>
            </div>
        </div>
    );
};
