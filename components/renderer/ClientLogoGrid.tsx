import React, { useEffect } from 'react';
import { TypeBlockLogoGridFields } from '@types';

type ClientLogoGridsPropTypes = {
    fields: TypeBlockLogoGridFields;
};
const ClientLogoGrid = (props: ClientLogoGridsPropTypes) => {
    console.log(props);
    const { fields } = props;

    const { internalName, logos } = fields;

    // useEffect(() => {
    //     console.log(logos);
    // });
    if (!fields) return null;
    return (
        <div className="container">
            <div className="grid grid-rows-4">
                {logos?.map((logo) => (
                    <ClientLogoGrid fields={logo} />
                ))}
            </div>
        </div>
    );
};
export default ClientLogoGrid;
// key={logo.fields.content.sys.id}
