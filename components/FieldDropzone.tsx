import React, { useCallback } from 'react';
import { useDropzone, FileWithPath, FileRejection, FileError } from 'react-dropzone';
import { useField } from 'formik';
import RequiredIndicator from './RequiredIndicator';

type FieldDropzoneProps = {
    onSuccess?: (file: string) => void;
    label?: string;
    name: string;
    required?: boolean;
    acceptedFileTypes: string;
    placeholder: string;
};

// TODO: handle multiple files
const FieldDropzone = (props: FieldDropzoneProps) => {
    const { onSuccess, label, name, required, acceptedFileTypes, placeholder } = props;
    const [field, meta, helpers] = useField(props);
    const hasError = meta.touched && meta.error;

    const onDrop = useCallback((filesToUpload: FileWithPath[]) => {
        if (!filesToUpload || filesToUpload.length === 0) return;
        console.log('drop', filesToUpload);

        console.log({ filesToUpload });

        // TODO deal with array of files
        // Do something with the files
        const file = filesToUpload[0];

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
    const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
        maxSize: 10485760,
    });
    console.log(acceptedFiles);

    return (
        <div className={`form-group ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={name}>
                {label} {required && <RequiredIndicator />}
            </label>
            <input type="hidden" value="" name={name} />
            <div {...getRootProps()} className="p-4 mb-2 border-2 border-black">
                <input {...getInputProps()} />
                <p className="mb-2 text-xs">{placeholder}</p>
                <div className="flex items-center justify-center h-40 p-4 border-2 border-dashed border-steel">
                    {isDragActive ? (
                        <p className="text-steel-200">Drop files here.</p>
                    ) : (
                        <p className="text-steel">Drop files here or click to upload.</p>
                    )}
                </div>
            </div>
            {acceptedFiles && acceptedFiles.length > 0 && (
                <>
                    <p className="text-green text-bold font-headline">Successfully uploaded these files: </p>
                    <ul className="ml-6 list-disc">
                        {acceptedFiles.map((file: FileWithPath) => (
                            <li key={file.path}>
                                <p className="text-bold font-headline">{file.path}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {fileRejections && fileRejections.length > 0 && (
                <>
                    <p className="mt-2 text-bold font-headline text-poppy">There were problems with these files: </p>
                    <ul className="ml-6 list-disc">
                        {fileRejections.map(({ file, errors }: FileRejection) => (
                            <li key={file.name}>
                                <div>
                                    <span className="text-bold font-headline">{file.name}: </span>
                                    {errors.map((e: FileError) => (
                                        <span className="inline text-sm" key={e.code}>
                                            {e.message}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {hasError ? <div className="form-error-msg">{meta.error}</div> : null}
        </div>
    );
};

export default FieldDropzone;
