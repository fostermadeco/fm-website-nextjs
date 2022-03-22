import React from 'react';
import { TypeBlockLogoGridFields } from '@types';
import ClientLogo from './ClientLogo';

type ClientLogoGridsPropTypes = {
    fields: TypeBlockLogoGridFields;
};
const ClientLogoGrid = (props: ClientLogoGridsPropTypes) => {
    const { fields } = props;
    if (!fields) return null;

    const { logos } = fields;

    return (
        <div className="container">
            <div className="py-20">
                <div className="grid grid-cols-14">
                    <div className="col-span-12 col-start-2">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20">
                            {logos.map((logo) => (
                                <div className="flex items-center justify-center">
                                    <ClientLogo logo={logo} key={logo.sys.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientLogoGrid;
