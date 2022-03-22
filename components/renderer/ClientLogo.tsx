import React from 'react';
import { TypeLogo } from '@types';
import Image from 'next/image';

type ClientLogoPropTypes = {
    logo: TypeLogo;
};
const ClientLogo = (props: ClientLogoPropTypes) => {
    const { logo } = props;
    const { fields } = logo;
    if (!fields) return null;
    const { logo: logoMedia } = fields;
    const { fields: logoMediaFields } = logoMedia;
    const { file } = logoMediaFields;

    return (
        <div className="relative w-1/2 h-16 md:w-1/5">
            <Image
                src={`https:${file.url}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="grayscale opacity-50"
            />
        </div>
    );
};
export default ClientLogo;
