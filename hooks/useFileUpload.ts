import React from 'react';
import { FileWithPath } from 'react-dropzone';

// https://kentcdodds.com/blog/using-fetch-with-type-script
// TODO: improve this and fix typescript disabled rules
const useFileUpload = () => {
    const uploadFile = async ({ file }: { file: FileWithPath }): Promise<{ file: FileWithPath; uploadURL: string }> => {
        const response = await fetch(`https://mu6ink2rya.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: file.name,
                type: file.type,
            }),
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { uploadURL }: { uploadURL: string } = await response.json();

        if (response.ok) {
            if (!uploadURL) {
                return Promise.reject(new Error('No upload url!'));
            }
            console.log('OK');
            return {
                file,
                uploadURL,
            };
        }
        console.log('not ok');

        return Promise.reject(new Error('Error with upload.'));
    };

    const uploadFileCollection = ({ files }: { files: FileWithPath[] }) => {
        const promises = files.map((file: FileWithPath) => uploadFile({ file }));
        return Promise.all(promises);
    };
    return { uploadFile, uploadFileCollection } as const;
};

export default useFileUpload;
