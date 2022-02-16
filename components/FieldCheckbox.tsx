import { useField, FieldHookConfig } from 'formik';
import React, { FC, HTMLProps } from 'react';
import RequiredIndicator from './RequiredIndicator';

const FieldCheckbox: FC<FieldHookConfig<string> & HTMLProps<HTMLInputElement>> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.error;

    return (
        <div className={`form-group relative ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={props.name}>
                <input className="absolute top-1" type="checkbox" id={props.name} {...field} {...props} />
                <span className="block ml-7">
                    {label} {props.required && <RequiredIndicator />}
                </span>
            </label>
            {hasError ? <div className="form-error-msg">{meta.error}</div> : null}
        </div>
    );
};

export default FieldCheckbox;
