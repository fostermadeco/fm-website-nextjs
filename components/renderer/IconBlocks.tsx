import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import { TypeComponentBlockIconBlocksFields } from '../../lib/types';

type IconBlocksPropTypes = {
    fields: TypeComponentBlockIconBlocksFields;
    mode: 'dark' | 'light';
};

const IconBlocks = (props: IconBlocksPropTypes) => {
    const { fields, mode = 'light' } = props;
    console.log('icons', mode);
    if (!fields) return null;

    const isDark = mode === 'dark';

    return (
        <div className={classNames(`relative`)}>
            <div className="container">
                <div className="grid grid-cols-14">
                    <div className="col-span-12 col-start-2">
                        <div className="my-14 md:mx-0">
                            {fields.overline && (
                                <div className={classNames(`flex`, { 'justify-center': isDark })}>
                                    <div className={classNames(`max-w-2xl`, { ' text-center': isDark })}>
                                        <h5 className={classNames(`h5 overline`, { 'text-white': isDark })}>
                                            {fields.overline}
                                        </h5>
                                        <p className={classNames(`h3`, { 'text-white': isDark })}>
                                            {fields.headerText}
                                        </p>
                                        <p className={classNames(`text-xl`, { 'text-white': isDark })}>
                                            {fields.paragraph}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 gap-0 my-10 md:grid-cols-2 md:gap-6">
                                {fields.iconBlocks.map((b) => (
                                    <div className="mb-8" key={`icon-block-${b.sys.id}`}>
                                        <Image
                                            src={`https:${b.fields.icon.fields.iconImage.fields.file.url}`}
                                            width={30}
                                            height={30}
                                        />
                                        <h4 className={classNames(`mt-4 h4`, { 'text-white': isDark })}>
                                            {b.fields.headerText}
                                        </h4>
                                        <p className={classNames(`p-xl`, { 'text-white': isDark })}>
                                            {b.fields.paragraph}
                                        </p>
                                        {b.fields.link && (
                                            <Link href={`/${b.fields.link.fields.slug}`}>
                                                <a
                                                    className={classNames(`inline-block mt-4 h5 emdash-in`, {
                                                        'text-white': isDark,
                                                    })}
                                                >
                                                    Read More
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconBlocks;
