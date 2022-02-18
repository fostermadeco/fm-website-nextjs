import React, { useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { useField } from 'formik';
import RequiredIndicator from './RequiredIndicator';

type FieldDropzoneProps = {
    onSuccess?: (file: string) => void;
    label?: string;
    name: string;
    required?: boolean;
};

const FieldDropzone = (props: FieldDropzoneProps) => {
    const { onSuccess, label, name, required } = props;
    const [field, meta, helpers] = useField(props);
    const hasError = meta.touched && meta.error;

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        if (!acceptedFiles) return;
        console.log('drop', acceptedFiles, process.env.SERVERLESS_URL);
        // if (!process.env.SERVERLESS_URL) {
        //     throw new Error('No request upload endpoint specified!');
        // }
        console.log({ acceptedFiles });

        // TODO deal with array of files
        // Do something with the files
        const file = acceptedFiles[0];

        console.log('drop');
        console.log(
            JSON.stringify({
                name: file.name,
                type: file.type,
            })
        );

        fetch(`https://mu6ink2rya.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: file.name,
                type: file.type,
            }),
        })
            .then((response) => response.json())
            .then((json: { uploadURL: string }) => {
                fetch(json.uploadURL, {
                    method: 'PUT',
                    body: new Blob([file], { type: file.type }),
                });
            })
            .then(() => {
                console.log(`https://d28oa4z68sivtx.cloudfront.net/${file.name}`);
                helpers.setValue(`https://d28oa4z68sivtx.cloudfront.net/${file.name}`);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={`form-group ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={name}>
                {label} {required && <RequiredIndicator />}
            </label>
            <input type="hidden" value="" name={name} />
            <div {...getRootProps()} className="h-40 p-4 border-2 border-black">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div>
        </div>
    );
};

export default FieldDropzone;
