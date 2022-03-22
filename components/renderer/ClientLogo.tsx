import React from 'react';
import { TypeLogo } from '@types';
import Image from 'next/image';

type ClientLogoPropTypes = {
    logo: TypeLogo;
};
const ClientLogo = (props: ClientLogoPropTypes) => {
    const { logo } = props;
    if (!logo) return null;
    const { file } = logo.fields.logo.fields;

    return (
        <div className="relative w-3/4 h-16">
            <Image
                src={`https:${file.url}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="opacity-50 grayscale"
            />
        </div>
    );
};
export default ClientLogo;
