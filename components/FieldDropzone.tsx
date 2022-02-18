import React, { useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

type FieldDropzoneProps = {
    onSuccess: (file: string) => void;
};

const FieldDropzone = ({ onSuccess }: FieldDropzoneProps) => {
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        if (!acceptedFiles) return;
        console.log('drop', acceptedFiles, process.env.SERVERLESS_URL);
        // if (!process.env.SERVERLESS_URL) {
        //     throw new Error('No request upload endpoint specified!');
        // }
        console.log({ acceptedFiles });

        // Do something with the files
        const file = acceptedFiles[0];

        console.log('drop');
        console.log(
            JSON.stringify({
                name: file.name,
                type: file.type,
            })
        );

        // fetch(`${process.env.SERVERLESS_URL}/requestUploadURL`, {
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
                onSuccess(`https://d28oa4z68sivtx.cloudfront.net/${file.name}`);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    console.log(getInputProps());

    return (
        <div {...getRootProps()} className="h-40 mt-8 border border-lime">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

export default FieldDropzone;
