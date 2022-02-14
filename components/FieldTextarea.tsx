import { useField, FieldHookConfig } from 'formik';
import React, { FC, HTMLProps } from 'react';
import RequiredIndicator from './RequiredIndicator';

const FieldTextarea: FC<FieldHookConfig<string> & HTMLProps<HTMLTextAreaElement>> = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <div className={`form-group ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={props.name}>
                {label} {props.required && <RequiredIndicator />}
            </label>
            <textarea className="form-control" {...field} {...props} />
            {hasError ? <div className="form-error-msg">{meta.error}</div> : null}
        </div>
    );
};

export default FieldTextarea;
