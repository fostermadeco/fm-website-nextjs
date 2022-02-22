import React, { useCallback, useRef, useState } from 'react';
import { useDropzone, FileWithPath, FileRejection, FileError } from 'react-dropzone';
import { useField, FieldArray, Field, FieldArrayRenderProps } from 'formik';
import useFileUpload from '../hooks/useFileUpload';
import RequiredIndicator from './RequiredIndicator';

type FieldDropzoneProps = {
    onSuccess?: (file: string) => void;
    label?: string;
    name: string;
    nameHidden: string;
    required?: boolean;
    acceptedFileTypes: string;
    placeholder: string;
};

// TODO: add loader
const FieldDropzone = (props: FieldDropzoneProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { label, name, required, acceptedFileTypes, placeholder, nameHidden } = props;
    const [fieldHidden, metaHidden, helpersHidden] = useField(nameHidden);
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    const values = field.value as File[];
    const arrayHelpersRef = useRef<FieldArrayRenderProps | null>(null);
    const { uploadFileCollection } = useFileUpload();

    const onDrop = useCallback((filesToUpload: FileWithPath[]) => {
        if (!filesToUpload || filesToUpload.length === 0) return;
        console.log({ filesToUpload });
        setIsLoading(true);

        uploadFileCollection({ files: filesToUpload })
            .then((responses) => {
                console.log({ responses });

                responses.forEach(({ file: oneFile }: { file: FileWithPath }) => {
                    // when just pushing in the whole file, it was empty for some reason
                    arrayHelpersRef.current?.push({
                        name: oneFile.name,
                        path: oneFile.path,
                        lastModified: oneFile.lastModified,
                        size: oneFile.size,
                        type: oneFile.type,
                    });
                });
                helpersHidden.setValue(values.map((doc: File) => doc.name).join(','));
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                console.log(e);
            });
    }, []);

    const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
        maxSize: 10485760,
    });

    const renderDropzoneMessage = () => {
        if (isLoading) {
            return <p className="text-steel animate-pulse">Loading ...</p>;
        }
        if (isDragActive) {
            return <p className="text-steel-200">Drop files here.</p>;
        }
        return <p className="text-steel">Drop files here or click to upload.</p>;
    };

    return (
        <div className={`form-group ${hasError ? 'form-group--error' : ''}`}>
            <label htmlFor={name}>
                {label} {required && <RequiredIndicator />}
            </label>

            <div {...getRootProps()} className="p-4 mb-2 border-2 border-black">
                <input {...getInputProps()} />
                <p className="mb-2 text-xs">{placeholder}</p>
                <div className="flex items-center justify-center h-40 p-4 border-2 border-dashed border-steel">
                    {renderDropzoneMessage()}
                </div>
            </div>

            <Field name={nameHidden} type="hidden" />

            <FieldArray
                name={name}
                render={(arrayHelpers) => {
                    arrayHelpersRef.current = arrayHelpers;
                    return (
                        <div>
                            {values && values.length > 0 && (
                                <>
                                    <p className="text-green text-bold font-headline">
                                        Successfully uploaded these files:{' '}
                                    </p>
                                    <ul className="ml-6 list-disc">
                                        {values.map((doc: File, index: number) => (
                                            <li key={`doc-${index}`}>
                                                <p className="text-bold font-headline">
                                                    {doc.name}
                                                    <button
                                                        className="ml-4 text-poppy"
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    );
                }}
            />

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
