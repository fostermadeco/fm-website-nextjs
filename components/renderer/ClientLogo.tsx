import React from 'react';
import { TypeLogoFields } from '@types';
import Image from 'next/image';

type ClientLogoPropTypes = {
    fields: TypeLogoFields;
};
const ClientLogo = (props: ClientLogoPropTypes) => {
    const { fields } = props;
    if (!fields) return null;
    const { logo } = fields;

    const { fields: logoFields } = logo;

    const { file } = logoFields;

    return (
        <div className="relative w-1/2 h-16 md:w-1/4">
            <Image
                src={`https:${file.url}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="grayscale"
            />
        </div>
    );
};
export default ClientLogo;
