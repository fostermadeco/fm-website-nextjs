import React from 'react';
import { TypeLogoFields } from '@types';

type ClientLogoPropTypes = {
    fields: TypeLogoFields;
};
const ClientLogo = (props: ClientLogoPropTypes) => {
    const { fields } = props;
    // console.log(fields);
    if (!fields) return null;

    // const { internalName, logos } = fields;

    return null;
};
export default ClientLogo;
