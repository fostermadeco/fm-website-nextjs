import React from 'react';
import { TypeBlockLogoGridFields } from '@types';
import ClientLogo from './ClientLogo';

type ClientLogoGridsPropTypes = {
    fields: TypeBlockLogoGridFields;
};
const ClientLogoGrid = (props: ClientLogoGridsPropTypes) => {
    const { fields } = props;

    const { logos } = fields;

    if (!fields) return null;
    return (
        <div className="container py-10 px-10">
            <div className="relative flex flex-auto flex-wrap justify-center gap-8">
                {logos?.map((logo) => (
                    <ClientLogo logo={logo} key={logo.sys.id} />
                ))}
            </div>
        </div>
    );
};
export default ClientLogoGrid;
