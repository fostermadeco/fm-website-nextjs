import { useField, FieldHookConfig } from 'formik';
import React, { FC, HTMLProps } from 'react';
import RequiredIndicator from './RequiredIndicator';

// https://github.com/jaredpalmer/formik/issues/2780
const FieldSelect: FC<FieldHookConfig<string> & HTMLProps<HTMLSelectElement>> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className={`form-group ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={props.name}>
                {label} {props.required && <RequiredIndicator />}
            </label>
            <select className="form-control" {...field} {...props} />
            {hasError ? <div className="form-error-msg">{meta.error}</div> : null}
        </div>
    );
};
export default FieldSelect;
